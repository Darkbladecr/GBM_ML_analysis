from flask import Flask, jsonify, request, render_template
import joblib
import pandas as pd

app = Flask(__name__, static_url_path='', 
            static_folder='build/',
            template_folder='build/')
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/predict', methods=['POST'])
def predict():
    lr = joblib.load('model.pkl')
    model_columns = joblib.load('model_columns.pkl')
    json_ = request.get_json(force=True)
    df = pd.DataFrame([json_])
    for col in model_columns:
        if col not in df.columns:
            df[col] = 0
    data = df[model_columns]
    prediction = lr.predict(data)
    if prediction[0] == 1:
        return jsonify({"message": "Patient likely to survive >18 months", "positive": True})
    return jsonify({"message": "Patient unlikely to survive 18 months", "positive": False})


if __name__ == '__main__':
    app.run(threaded=True, port=8080)
