# import pandas as pd

# # Load the dataset
# file_path = 'ai_model/real_estate_main_correct_1.csv'
# data = pd.read_csv(file_path)

# # Display the first few rows of the dataset and basic info
# data_info = data.info()
# data_head = data.head()

# data_info, data_head




# # Check for missing values in each column
# missing_values = data.isnull().sum()

# # Dropping columns with too many missing values or irrelevant ones
# columns_to_drop = ['ownership', 'facing', 'status']  # Irrelevant or too many missing values
# cleaned_data = data.drop(columns=columns_to_drop)

# # Fill missing numeric columns with the median
# numeric_columns = cleaned_data.select_dtypes(include=['float64', 'int64']).columns
# for col in numeric_columns:
#     cleaned_data[col].fillna(cleaned_data[col].median(), inplace=True)

# # Fill missing categorical columns with the mode
# categorical_columns = cleaned_data.select_dtypes(include=['object']).columns
# for col in categorical_columns:
#     cleaned_data[col].fillna(cleaned_data[col].mode()[0], inplace=True)

# # Verify that there are no missing values
# cleaned_missing_values = cleaned_data.isnull().sum()

# # Show the cleaned data overview
# cleaned_missing_values, cleaned_data.head()




# from sklearn.preprocessing import LabelEncoder

# # Initialize LabelEncoder for categorical columns
# label_encoder = LabelEncoder()

# # Encode all categorical columns
# categorical_columns = cleaned_data.select_dtypes(include=['object']).columns
# for col in categorical_columns:
#     cleaned_data[col] = label_encoder.fit_transform(cleaned_data[col])

# # Display the dataset after encoding
# cleaned_data.head()



# from sklearn.model_selection import train_test_split

# # Define features and target variable
# X = cleaned_data.drop(columns=['Price'])  # Features
# y = cleaned_data['Price']                # Target

# # Split the data into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)




# from sklearn.ensemble import RandomForestRegressor
# from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# # Initialize the Random Forest model
# model = RandomForestRegressor(n_estimators=100, random_state=42)

# # Train the model
# model.fit(X_train, y_train)

# # Make predictions on the test set
# y_pred = model.predict(X_test)




# # Calculate evaluation metrics
# mae = mean_absolute_error(y_test, y_pred)
# mse = mean_squared_error(y_test, y_pred)
# rmse = mse ** 0.5
# r2 = r2_score(y_test, y_pred)

# print(f"Mean Absolute Error (MAE): {mae}")
# print(f"Mean Squared Error (MSE): {mse}")
# print(f"Root Mean Squared Error (RMSE): {rmse}")
# print(f"R² Score: {r2}")


# import joblib

# # Save the model to a file
# joblib.dump(model, 'house_price_model.pkl')
# print("Model saved as house_price_model.pkl")









import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from xgboost import XGBRegressor
import joblib

# Load the dataset
file_path = 'ai_model/real_estate_main_correct_1.csv'
data = pd.read_csv(file_path)

# Display basic information about the dataset
print(data.info())
print(data.head())

# Check for missing values
missing_values = data.isnull().sum()
print("Missing values:\n", missing_values)
# temp = data.drop(columns=['Price'])
# Define numeric and categorical columns
numeric_columns = data.select_dtypes(include=['float64', 'int64']).columns.drop('Price')
categorical_columns = data.select_dtypes(include=['object']).columns

# Fill missing values for numeric columns
for col in numeric_columns:
    data[col] = data[col].fillna(data[col].median())

# Fill missing values for categorical columns and encode them
label_encoders = {}
for col in categorical_columns:
    data[col] = data[col].fillna(data[col].mode()[0])
    label_encoders[col] = LabelEncoder()
    data[col] = label_encoders[col].fit_transform(data[col])

# Feature scaling for numeric columns
scaler = StandardScaler()
data[numeric_columns] = scaler.fit_transform(data[numeric_columns])
data['Price'] = data['Price'].replace([np.inf, -np.inf], np.nan)
data = data.dropna(subset=['Price'])
# Define features and target variable
X = data.drop(columns=['Price'])  # Replace 'Price' with your target column name
y = data['Price']

if y.isnull().any() or np.isinf(y).any():
    raise ValueError("Target variable contains NaN or infinite values. Please clean the data.")
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the XGBoost model
model = XGBRegressor(n_estimators=500, learning_rate=0.1, max_depth=8, random_state=42)

# Train the model
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = mse ** 0.5
r2 = r2_score(y_test, y_pred)

print(f"Mean Absolute Error (MAE): {mae}")
print(f"Mean Squared Error (MSE): {mse}")
print(f"Root Mean Squared Error (RMSE): {rmse}")
print(f"R² Score: {r2}")

# Save the model and encoders
joblib.dump(model, 'ai_model/house_price_xgb_model.pkl')
joblib.dump(label_encoders, 'ai_model/label_encoders.pkl')
joblib.dump(scaler, 'ai_model/scaler.pkl')
print("Model, encoders, and scaler saved.")
