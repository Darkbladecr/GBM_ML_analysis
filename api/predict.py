from http.server import BaseHTTPRequestHandler
import joblib
import pandas as pd
import json
import cgi
import re
import os.path

file_dir = os.path.abspath(os.path.dirname(__file__))


def get_header(headers, key):
    regex = r"^" + key + r":\s(.+)$"
    matches = re.finditer(regex, headers, re.MULTILINE)

    for matchNum, match in enumerate(matches):
        return match.groups()[0]


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        headers = str(self.headers)
        ctype = get_header(headers, 'content-type')

        # refuse to receive non-json content
        if ctype != 'application/json':
            self.send_response(400)
            self.end_headers()
            return

        # read the message and convert it into a python dictionary
        length = int(get_header(headers, 'content-length'))
        message = json.loads(self.rfile.read(length))

        lr = joblib.load(os.path.join(file_dir, 'model.pkl'))
        model_columns = joblib.load(os.path.join(file_dir, 'model_columns.pkl'))

        df = pd.DataFrame([message])
        for col in model_columns:
            if col not in df.columns:
                df[col] = 0
        data = df[model_columns]
        prediction = lr.predict(data)
        if prediction[0] == 1:
            resp = {"message": "Patient likely to survive >12 months", "positive": True}
        else:
            resp = {"message": "Patient unlikely to survive 12 months", "positive": False}

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(resp).encode("utf-8"))
        return
