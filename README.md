# 🍽 Recipe Hub  
*A full-stack Django + React app for managing, sharing, and discovering delicious recipes!* 🚀  

![Recipe Hub Preview](https://via.placeholder.com/800x400) <!-- Replace with an actual screenshot -->

---

## 📌 About  
**Recipe Hub** is a web application that lets users **store, manage, and share recipes**. Whether you're a home cook or a professional chef, this app helps you organize your favorite dishes, discover new ones, and connect with other food lovers!  

### ✨ Features  
👉 **User Authentication** – Sign up, log in, and manage your profile  
👉 **Add, Edit & Delete Recipes** – Manage your recipe collection  
👉 **Recipe Categories** – Organize recipes (Breakfast, Lunch, Dinner, Dessert)  
👉 **Search & Filter** – Find recipes by name or category  
👉 **Favorites** – Save your favorite recipes for quick access  
👉 **Ratings & Comments** – Rate recipes and share feedback  
👉 **Image Uploads** – Upload pictures of your dishes  
👉 **Dark Mode** – Toggle between light and dark mode  

---

## 🚀 Tech Stack  
| **Category**  | **Technology**  |
|--------------|----------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend**  | Django, Django REST Framework |
| **Database** | SQLite (default) / PostgreSQL (production) |
| **Authentication** | Django Auth, JWT |
| **Styling**  | Tailwind CSS |

---

## 📺 Project Structure
```
recipe-app/
│── backend/               # Django Backend
│   ├── manage.py
│   ├── db.sqlite3
│   ├── backend/           # Django Project
│   │   ├── settings.py
│   │   ├── urls.py
│   ├── recipes/           # Main App
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   ├── urls.py
│
│── frontend/              # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── RecipeCard.js
│   │   │   ├── RecipeList.js
│   │   │   ├── DarkModeToggle.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── RecipePage.js
│   │   ├── context/
│   │   │   ├── ThemeContext.js
│   │   ├── App.js
│   │   ├── index.js
│
│── README.md
│── .gitignore
│── requirements.txt
│── package.json
```

---

## 🔧 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/YOUR-USERNAME/recipe-hub.git
cd recipe-hub
```

### 2️⃣ Backend Setup (Django)  
```bash
cd backend
python -m venv env
source env/bin/activate  # Mac/Linux
env\Scripts\activate     # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # Create an admin account
python manage.py runserver
```
Backend will run at **http://127.0.0.1:8000/**  

---

### 3️⃣ Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
Frontend will run at **http://localhost:3000/**  

---

## 📚 API Endpoints (Backend)
| Method | Endpoint                 | Description           |
|--------|--------------------------|-----------------------|
| GET    | `/api/recipes/`          | Get all recipes      |
| POST   | `/api/recipes/`          | Create a new recipe  |
| GET    | `/api/recipes/:id/`      | Get a single recipe  |
| PUT    | `/api/recipes/:id/`      | Update a recipe      |
| DELETE | `/api/recipes/:id/`      | Delete a recipe      |
| POST   | `/api/auth/register/`    | Register a user      |
| POST   | `/api/auth/login/`       | Login a user         |

---

## 🌟 Contributing
Contributions are welcome! If you’d like to help improve this project:  
1. Fork the repo  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Make your changes and commit (`git commit -m "Added new feature"`)  
4. Push to your fork and submit a pull request  

---

## 📝 License
This project is licensed under the **MIT License**.  

---

Feel free to update the repo link (`YOUR-USERNAME/recipe-hub`) with your actual GitHub username.  

Let me know if you need any changes! 🚀😊  
