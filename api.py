from flask import Flask, jsonify, request
import joblib
import pandas as pd
import numpy as np

app = Flask(__name__)
@app.route('/predict', methods=['POST'])
def predict():
    json_ = request.get_json(force=True)
    data = pd.DataFrame([json_])
    # for col in model_columns:
    #     if col not in query.columns:
    #         query[col] = 0
    prediction = lr.predict(data)
    if prediction[0] == 1:
        return "Patient likely to survive >12 months"
    return "Patient unlikely to survive 12 months"


if __name__ == '__main__':
    lr = joblib.load('model.pkl')
    # model_columns = joblib.load('model_columns.pkl')
    app.run(port=8080)
