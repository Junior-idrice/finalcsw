# 📖 NoteBook App 📖
✨ **NoteBook App** This project is inspired by the everyday challenges that many people, including myself, face — the struggle to remember important tasks or ideas throughout the day. It is a lightweight and user-friendly web application designed to help people quickly jot down notes in fast-paced situations.

I created this project primarily as a personal productivity tool, since I often find myself forgetting certain things during the day. My goal was to design an application that allows users to take quick notes with minimal friction — simply open the app, write down a thought or reminder, and move on with their next task efficiently.

Although it may appear simple on the surface, this project embodies the idea that simplicity can deliver great utility. Behind its clean interface, it includes several key features such as user authentication, CRUD operations (create, read, update, and delete notes), and organized note management.

The application was built using Django for the backend and React for the frontend, ensuring a smooth, dynamic, and responsive user experience. Users can register for an account, create and edit notes, mark them as important, and delete them when no longer needed.

What I find most rewarding is that I actively use this application in my own daily routine for managing personal tasks and reminders. It has made my workflow more organized, efficient, and reliable. This project reflects how a simple idea — supported by thoughtful design and solid technical implementation — can make a meaningful difference in productivity.

✨ **NoteBook App** is a modern web-based note-taking application built using **React** for the frontend and **Django + Django REST Framework** for the backend.  
It provides users with a seamless and responsive interface to create, view, search, and filter notes based on different categories.  
The application is fully responsive and optimized for both desktop and mobile devices.

---

## 🧠 Distinctiveness and Complexity

This project is distinct and complex because it goes far beyond simple CRUD examples seen in coursework.  
It integrates **two modern frameworks** — React (frontend) and Django REST (backend) — to build a complete full-stack system with **real authentication**, **category-based filtering**, and **dynamic search**.

### Key Points of Distinctiveness
- Combines a **REST API** backend with a **modern React** frontend built using **Vite**.
- Uses **JWT Authentication** to handle secure login, signup, and token storage in the browser.
- Implements **dynamic filtering and searching** without page reloads.
- Provides **responsive layouts** that adapt seamlessly across devices.

### Key Points of Complexity
- Involves **state management** and asynchronous API communication with `axios`.
- Uses **React Router** for single-page routing.
- Implements **real-time UI feedback** using Toast notifications for CRUD operations and authentication events.
- Demonstrates **frontend-backend integration**, requiring correct CORS handling and secure API token headers.

These elements together make the project both technically challenging and distinct from simpler Django-only or React-only examples.

---

## ❄️ Features

🗨️ This web application includes the following features:

- **User Authentication:** Secure signup, login, and logout functionality using JWT tokens. Users can create accounts and access their notes across devices.  
- **Add Notes:** Users can create notebooks with a title, content, and category (Business, Personal, Important). Notes are visually tagged with color indicators by category.  
- **Filter Notes:** Users can filter notebooks by category using a dropdown menu. Selecting “All Notes” returns to the homepage displaying all notes without refreshing the page.  
- **Search Functionality:** A search bar allows users to find notes by title or keyword dynamically.  
- **Responsive Design:** Notes are displayed in a three-column layout on larger screens, and stack vertically on smaller screens.  
- **Dynamic Feedback:** Toast notifications provide instant responses for actions like login, logout, signup, and note creation or deletion.  
- **Mobile-Friendly Interface:** Layouts, forms, and buttons scale for smaller screens.

---

## 🗂️ Files Description

### Backend (Django)
- `models.py` — Defines the Note model with fields for title, content, category, user, and timestamp.  
- `views.py` — Contains API endpoints for CRUD operations, authentication, and search functionality.  
- `serializers.py` — Converts model data to JSON for communication with the frontend.  
- `urls.py` — Maps all API routes (`notes/`, `notes-search/`, `signup/`, etc.).  
- `settings.py` — Configures REST Framework, JWT authentication, and CORS.

### Frontend (React)
- `src/App.jsx` — Main entry point managing all routes and layout.  
- `src/pages/HomePage.jsx` — Displays the list of notes and integrates search and filter components.  
- `src/pages/LoginPage.jsx` and `src/pages/SignupPage.jsx` — Manage user authentication forms.  
- `src/components/Filter.jsx` — Handles category filtering through a dropdown menu.  
- `src/components/NoteCardContainer.jsx` — Displays all notes dynamically.  
- `src/components/NoteCard.jsx` — Represents individual note cards.  
- `src/components/Navbar.jsx` — Manages navigation and logout.  
- `.env` — Stores environment variables such as API endpoints.  

---

## ®️ Requirements

To run the app locally, ensure the following are installed:

**Backend (Django)**
- Python 3.10+
- Django 5.x
- Django REST Framework
- Django CORS Headers
- djangorestframework-simplejwt
- SQLite (default) or PostgreSQL/MySQL

**Frontend (React)**
- Node.js 18+
- npm or yarn

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
git clone https://github.com/Junior-idrice/finalcsw.git
cd finalcsw


<ol>
<li><h3>💭Backend Setup</h3></li>
<li>cd yt_notes</li>
<li>python -m venv env</li>
<li>env\Scripts\activate     # Windows</li>
<li>source env/bin/activate  # Linux/macOS</li>
<li>pip install -r requirements.txt</li>
<li>python manage.py migrate</li>
<li>python manage.py runserver</li>
<li>Backend runs at http://127.0.0.1:8000/.</li>
</ol>

<ol>
<li><h3>ℹ️Frontend Setup</h3></li>
<li>cd ../react-note-app</li>
<li>npm install</li>
<li>npm run dev</li>
<li>Frontend runs at http://localhost:5173/</li>
</ol>

<h2>🪴Usage</h2>
<ul>
<li>Open the app in a web browser.</li>
<li>
Signup or login to start managing noteBooks.</li>
<li>Add noteBooks with titles, content, and categories.</li>
<li>Use the filter dropdown to view noteBooks by category or click “All Notes” to return to the full list.</li>
<li>Search for noteBooks by keywords using the search bar.</li>
<li>Logout when finished to end the session.</li>
</ul>

<h2>📔Technologies Used</h2>
<ul>
<li><b>Frontend</b>: React, React Router, Bootstrap, React Toastify, React Icons</li>
<li><b>Backend</b>: Django, Django REST Framework, Simple JWT</li>
<li><b>Styling</b>: Custom CSS + Bootstrap</li>
<li><b>Deployment</b>: Render</li>
</ul>
<h2>📒NoteBooks</h2>
<ul>
<li>The app stores JWT tokens in localStorage for authentication.</li>
<li>Filtering, searching, and navigation are dynamic without requiring page reloads.</li>
<li>Responsive design ensures usability across mobile, tablet, and desktop devices.</li>
<li></li>
</ul>
<h1>🎉Live Demo of NoteBook App</h1>
<p>⚠️: please, first run https://finalcsw.onrender.com/, in other to start the backend, then :</p>
<p>Have fun🤝: https://react-note-app-43h3.onrender.com/</p>

<h2>💦License</h2>
<h3>MIT License © 2025 Idrice Junior</h3>