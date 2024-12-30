from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
# model = joblib.load('ai_model/house_price_model.pkl')
# ---------
model = joblib.load('ai_model/house_price_xgb_model.pkl')
label_encoders = joblib.load('ai_model/label_encoders.pkl')
scaler = joblib.load('ai_model/scaler.pkl')
# -------------

@app.route('/')
def home():
    return "House Price Evaluator API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Log model features
        print("Model trained on features:", model.feature_names_in_)

        # Extract JSON input
        data = request.get_json()
        print("Received data:", data)

        # Prepare input features (include all required features)
        required_fields = ['BHK', 'type', 'ownership', 'bathroom', 'balcony', 'city', 'location', 'Rate_per_sqft', 'bedroom', 'total_area', 'status', 'transaction', 'facing']
        missing_fields = [field for field in required_fields if field not in data]

        if missing_fields:
            return jsonify({"error": f"Missing fields: {', '.join(missing_fields)}"}), 400


# ----------------
        input_features = []
        for field in required_fields:
            if field in label_encoders:  # If the field is categorical, encode it
                encoded_value = label_encoders[field].transform([data[field]])[0]
                input_features.append(encoded_value)
            else:
                input_features.append(data[field])
# ----------


        # input_features = [
        #     data['BHK'],
        #     data['bathroom'],
        #     data['Rate_per_sqft'],
        #     data['total_area'],
        #     data['type'],
        #     data['city'],
        #     data['location'],
        #     data['transaction'],
        #     data['rate'],
        #     data['bedroom'],
        #     data['balcony']
        # ]
        print("Input features:", input_features)

        input_df = pd.DataFrame([input_features], columns=required_fields)
        input_df = input_df[model.feature_names_in_]
        # Scale numeric features
        numeric_fields = [field for field in required_fields if field not in label_encoders]
        input_df[numeric_fields] = scaler.transform(input_df[numeric_fields])
        
        print("Input DataFrame after scaling:", input_df)
        # Convert to NumPy array
        input_array = input_df.to_numpy()
        # -----------
        # numeric_indices = [i for i, field in enumerate(required_fields) if field not in label_encoders]
        # input_array[:, numeric_indices] = scaler.transform(input_array[:, numeric_indices])

        # ------------
        print("Input array shape:", input_array.shape)

        # Make prediction
        predicted_price = model.predict(input_array)
        print("Predicted price: ",predicted_price)
        predicted_price = float(predicted_price[0])
        return jsonify({"predicted_price": predicted_price})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='0.0.0.0', port=5000)
