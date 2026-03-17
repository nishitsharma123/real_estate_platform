# 🏡 Real Estate Platform

A full-stack **Real Estate Web Application** built using the **MERN stack**, integrated with **Firebase**, **Redux Toolkit**, and **SendGrid**, designed to provide a seamless property browsing and listing experience.

---

## 🚀 Live Demo

👉 coming soon

---

## 📌 Features

### 👤 User Features

* 🔐 Secure authentication (Firebase Auth / JWT)
* 🏠 Browse and search properties
* 📄 View detailed property listings
* ❤️ Save favorite properties
* 📬 Contact property owners

### 🧑‍💼 Admin Features

* 📊 Admin dashboard with analytics
* 🏘️ Manage property listings (Create, Update, Delete)
* 👥 Manage users
* 🗂️ Category & listing control
* 📥 Handle user inquiries

### ⚡ Advanced Features

* ☁️ Image upload via Firebase Storage
* 🔄 Global state management with Redux Toolkit
* 📧 Email notifications using SendGrid
* 📱 Fully responsive UI/UX
* 🚀 Optimized performance and scalable architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Third-Party Services

* Firebase (Authentication + Storage)
* SendGrid (Email Services)

---

## 📁 Project Structure

```bash
real_estate_platform/
│── client/               # React frontend
│── server/               # Express backend
│── models/               # MongoDB schemas
│── routes/               # API routes
│── controllers/          # Business logic
│── redux/                # State management
│── utils/                # Helper functions
│── config/               # Environment configs
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nishitsharma123/real_estate_platform.git
cd real_estate_platform
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the server folder:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
SENDGRID_API_KEY=your_sendgrid_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

| Variable         | Description                |
| ---------------- | -------------------------- |
| MONGO_URI        | MongoDB connection string  |
| JWT_SECRET       | JWT authentication secret  |
| SENDGRID_API_KEY | SendGrid email service key |
| FIREBASE_CONFIG  | Firebase credentials       |

---

## 📸 Core Pages

* 🏠 Home Page
* 🔍 Property Listings Page
* 📄 Property Details Page
* 👤 User Dashboard
* 🧑‍💼 Admin Dashboard
* 📬 Contact / Inquiry Page

---

## 🎯 Project Highlights

* 💼 Built with **scalability in mind** (modular backend architecture)
* ⚡ Real-world production-level features
* 🔥 Clean UI with modern UX practices
* 📊 Role-based access control (Admin/User)

---

## 📬 Contact

* GitHub: https://github.com/nishitsharma123
* LinkedIn: https://www.linkedin.com/in/nishitsharma12
* Email: nishitsharma128@gmail.com

---

## ⭐ Contributing

Contributions, issues, and feature requests are welcome!

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

* MongoDB
* Express.js
* React.js
* Node.js
* Firebase
* SendGrid

---

## 💡 Future Improvements

* 🗺️ Map integration (Google Maps)
* 💳 Payment gateway for bookings
* 📈 Advanced analytics dashboard
* 🤖 AI-based property recommendations

---

⭐ If you like this project, don’t forget to **star the repository**!
