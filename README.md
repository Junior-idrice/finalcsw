# 📖 NoteBook App 📖
✨ **NoteBook App** This project is inspired by the everyday challenges that many people, including myself, face — the struggle to remember important tasks or ideas throughout the day. It is a lightweight and user-friendly web application designed to help people quickly jot down notes in fast-paced situations.

I created this project primarily as a personal productivity tool, since I often find myself forgetting certain things during the day. My goal was to design an application that allows users to take quick notes with minimal friction — simply open the app, write down a thought or reminder, and move on with their next task efficiently.

Although it may appear simple on the surface, this project embodies the idea that simplicity can deliver great utility. Behind its clean interface, it includes several key features such as user authentication, CRUD operations (create, read, update, and delete notes), and organized note management.

The application was built using **Django + Django REST Framework** for the backend and **React** for the frontend, ensuring a smooth, dynamic, and responsive user experience. Users can register for an account, create and edit notes, mark them as important, and delete them when no longer needed.

What I find most rewarding is that I actively use this application in my own daily routine for managing personal tasks and reminders. It has made my workflow more organized, efficient, and reliable. This project reflects how a simple idea — supported by thoughtful design and solid technical implementation — can make a meaningful difference in productivity.
It provides users with a seamless and responsive interface to create, view, search, and filter notes based on different categories.  
The application is fully responsive and optimized for both desktop and mobile devices.

---

## 🧠 Distinctiveness and Complexity
This project is significantly different from the other CS50W projects in several important ways.

First and foremost, it introduces a complete connection between a backend and a frontend, showcasing how data flows between two distinct systems. The interaction between Django REST Framework (serving as the backend API) and React (as the frontend interface) forms the core of this project’s distinctiveness. This communication layer — involving structured endpoints, serialized data, and secure token-based authentication — adds a level of technical depth and architectural design not present in the earlier course projects.

Additionally, the project implements real user authentication using JWT tokens, including token refreshing and secure browser storage, ensuring proper session handling similar to professional web applications. On the frontend, features like React Hooks for state management, React Toastify for real-time notifications, and dynamic rendering through Axios API calls demonstrate modern frontend engineering practices. Combined, these elements make the project not only more advanced but also more interactive, responsive, and user-centered.

While projects like Wiki, Commerce, or Network emphasize specific Django functionalities, this NoteBook App goes beyond them by fully separating the frontend and backend. The backend provides a RESTful API that handles data persistence, authentication, and user requests, while the frontend consumes this API asynchronously, updating the interface without page reloads. This reflects the architecture of real-world, production-ready web applications.

Furthermore, the application’s category-based filtering and real-time search features create a smooth user experience, giving it a level of interactivity not seen in static or template-based Django projects. The integration of these technologies results in a truly distinct project that bridges traditional server-rendered pages and modern single-page applications.
It integrates **two modern frameworks** — React (frontend) and Django REST (backend) — to build a complete full-stack system with **real authentication**, **category-based filtering**, and **dynamic search**.

### Key Points of Distinctiveness
While CS50W projects like Wiki, Commerce, or Network each focus on different individual concepts such as **templating or Django models**, this project goes further by separating the frontend and backend completely. The backend provides a **Django REST Framework (DRF) API** that handles data persistence, authentication, and permissions, while the React frontend consumes this API asynchronously to display and update data dynamically.

The app’s structure and interaction model are more aligned with modern, production-level applications. The user experience is built around **asynchronous JavaScript requests** rather than traditional page reloads, resulting in smoother and faster interactions. The inclusion of **JWT (JSON Web Token) authentication** further distinguishes this project, allowing secure, token-based user login and session management directly in the frontend.

Additionally, the app’s category-based **filtering and dynamic search** capabilities make it more than just a static note-taking tool. Users can search and filter notes in real time, reflecting the responsiveness of modern web apps like Notion or Google Keep. This integration of multiple frameworks and features gives the project both a distinct and practical edge over simpler CRUD-based applications.
- Combines a **REST API** backend with a **modern React** frontend built using **Vite**.
- Uses **JWT Authentication** to handle secure login, signup, and token storage in the browser.
- Implements **dynamic filtering and searching** without page reloads.
- Provides **responsive layouts** that adapt seamlessly across devices.

### Key Points of Complexity
From a technical standpoint, the project’s complexity lies in its integration of multiple technologies and systems. Implementing a **RESTful API** required designing serializers, views, and URL patterns in Django while ensuring compatibility with React’s frontend requests. Handling **CORS** (Cross-Origin Resource Sharing) policies and securing API routes with **JWT authentication tokens** added another layer of challenge, demanding an understanding of HTTP headers, middleware, and session handling between two distinct servers (localhost:8000 for backend, localhost:5173 for frontend).

On the React side, the complexity appears in state management and component communication. The app dynamically updates its **UI using React hooks and Axios** to make asynchronous API calls. For example, when a user adds, edits, or deletes a note, the frontend immediately reflects these changes without reloading the page, which required careful implementation of re-render logic and API synchronization.

Furthermore, features like **real-time toast notifications**, error handling, and route protection add to the robustness and user experience of the system. Integrating React Router to handle different views (Home, Login, Signup) while maintaining a consistent layout and authentication state required deliberate component organization and thoughtful architectural decisions.

In short, this project demonstrates a comprehensive understanding of both frontend and backend web development. It showcases how separate systems can communicate through REST APIs, manage authentication securely, and deliver a smooth, dynamic user experience.
- Involves **state management** and asynchronous API communication with `axios`.
- Uses **React Router** for single-page routing.
- Implements **real-time UI feedback** using Toast notifications for CRUD operations and authentication events.
- Demonstrates **frontend-backend integration**, requiring correct CORS handling and secure API token headers.

These elements together make the project both technically challenging and distinct from simpler Django-only or React-only examples.

---
## Reflection ##

Beyond the technical aspects, this project reflects real-world development challenges such as deployment, responsiveness, and code maintainability. Building both ends of the application helped me understand how design decisions in one layer (e.g., model structure in Django) affect the other (e.g., how data is consumed in React).

While the concept behind the app — taking notes — might seem simple, the underlying structure represents a professional-level full-stack web project. I am proud of how it turned out because it not only solved a personal problem of mine (keeping track of daily ideas and reminders) but also demonstrated my ability to build, connect, and deploy modern web systems end-to-end.

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

The project consists of two main parts — the backend (Django) and the frontend (React). Together, they form a complete full-stack web application where Django handles data management and authentication, while React provides the user interface and handles dynamic updates. Below is a detailed explanation of the main files and their roles, focusing on the parts I built and contributed to.

## 🐍 Backend (Django)

The backend folder contains all the logic for data storage, authentication, and API communication. I built a Django REST API using Django REST Framework (DRF) to manage requests between the client and the database.

- `models.py` — Defines the core database model Note, which includes fields for the note’s title, content, category, slug, category, created_at, and a foreign key linking each note to its user. I designed this model to support personalized note storage, ensuring that each user can only access their own data.

- `serializers.py` — Converts Django model instances into JSON format so that they can be easily sent to and from the React frontend. The serializer also validates incoming data before saving it to the database.

- `views.py` — Contains all API endpoints for CRUD operations (Create, Read, Update, Delete) and authentication. I implemented custom logic for listing notes by user, filtering by category, and performing keyword searches. The file also includes endpoints for user registration and JWT-based login.

- `urls.py` — Maps all API routes, such as /notes/, /notes-search/, /signup/, and /login/. I organized routes by functionality to maintain clean and logical project structure.

- `settings.py` — Configures essential components including Django REST Framework, JWT Authentication, and CORS (Cross-Origin Resource Sharing). I customized this file to allow secure communication between the backend (port 8000) and the React frontend (port 5173).

 In summary, I built the backend from scratch to provide a secure, RESTful API capable of handling all user interactions and persistent data storage. It is responsible for authenticating users, storing their notes, and serving data dynamically to the frontend.

 ## ⚛️ Frontend (React)

The frontend is a single-page application (SPA) built using React and the Vite build tool. It communicates with the Django API using axios to retrieve and update data asynchronously, ensuring that users can interact with their notes in real time without reloading the page.

- `src/App.jsx` — The main entry point of the application. It defines the overall routing structure using React Router and manages the layout shared across all pages.

- `src/pages/HomePage.jsx` — Displays all user notes and integrates both search and filter functionalities. This page communicates directly with the backend to fetch and update notes dynamically.

- `src/pages/LoginPage.jsx` and `src/pages/SignupPage.jsx` — Handle user authentication and registration. I implemented form validation, API requests for JWT tokens, and token storage in localStorage to maintain user sessions securely.

- `src/components/Filter.jsx` — Provides a dropdown menu for filtering notes by category (e.g., Personal, Business, Important). This component helps make the UI interactive and intuitive.

- `src/components/NoteCardContainer.jsx` — Displays all notes in a grid-like structure. It receives data from the backend and updates the list in real time when a note is added, edited, or deleted.

- `src/components/NoteCard.jsx` — Represents individual note items. It includes logic for displaying note information and buttons for editing or deleting a note.

- `src/components/Navbar.jsx` — Implements the navigation bar, which includes links to pages like Home, Login, and Signup, as well as a logout function that clears authentication tokens.
- `src/axiosConfig.js` Manages all backend communication using Axios. Configures the base URL automatically based on whether the app is in development or production mode. Intercepts requests to attach the Authorization header with the JWT token.
Intercepts responses to handle expired tokens automatically — if the access token expires, it uses the refresh token to request a new one without forcing the user to log in again.
If both tokens expire, it clears local storage and redirects the user to the login page.
This file is crucial for maintaining a secure and seamless authentication workflow throughout the entire app.

 Through this frontend, I designed and implemented the full user interface, handling state management, authentication flow, and user experience design. Every action performed on the frontend (such as creating, editing, or deleting a note) interacts with the backend in real time, demonstrating my understanding of asynchronous data handling and UI synchronization.

---

## 🧩 Requirements

To run this project locally, make sure both backend and frontend environments are properly configured. The application uses Django for the backend (server logic and database) and React for the frontend (user interface).
To run the app locally, ensure the following are installed:


**🖥️ Backend (Django)**

-`Python 3.10+` — The programming language that powers Django and all backend functionality. Python is required to run the server, manage the database, and handle API requests.

-`Django 5.x` — The core backend framework used to structure the project. Django manages routing, models, views, and templates, providing a robust environment for building web applications.

-`Django REST Framework (DRF)` — Extends Django’s capabilities to create RESTful APIs. It allows the backend to send and receive data in JSON format, enabling communication with the React frontend.

-`Django CORS Headers` — Enables Cross-Origin Resource Sharing, allowing the React frontend (running on a different port or domain) to securely communicate with the Django backend without browser restrictions.

-`djangorestframework-simplejwt` — Handles authentication using JSON Web Tokens (JWT). It provides access and refresh tokens to ensure secure user login, logout, and session management.

- Python 3.10+
- Django 5.x
- Django REST Framework
- Django CORS Headers
- djangorestframework-simplejwt
- SQLite (default) or PostgreSQL/MySQL


**⚛️ Frontend (React)**

-`Node.js 18+` — Provides the JavaScript runtime environment required to run and build React applications outside the browser.

-`npm or yarn` — Package managers used to install and manage project dependencies such as React Router, Axios, and React Toastify.

-`React` — The main frontend library used to create a responsive and interactive user interface. React handles dynamic page rendering, state management, and real-time updates through hooks and components.

-`Axios` — Handles HTTP requests from the frontend to the Django backend, especially for authentication, data fetching, and note creation.

-`React Router` — Enables navigation and page routing without reloading the entire page.

-`React Toastify` — Displays user-friendly notifications for actions such as successful logins, errors, or note updates.

- Node.js 18+
- npm or yarn

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
git clone https://github.com/Junior-idrice/finalcsw.git
cd finalcsw


## 💭Backend Setup
cd yt_notes
python -m venv env
env\Scripts\activate     # Windows
source env/bin/activate  # Linux/macOS
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
Backend runs at http://127.0.0.1:8000/



## ℹ️Frontend Setup
cd ../react-note-app
npm install
npm run dev
Frontend runs at http://localhost:5173/


## 🪴Usage

Open the app in a web browser.

Signup or login to start managing noteBooks.
Add noteBooks with titles, content, and categories.
Use the filter dropdown to view noteBooks by category or click “All Notes” to return to the full list.
Search for noteBooks by keywords using the search bar.
Logout when finished to end the session.


## 📔Technologies Used
Frontend: React, React Router, Bootstrap, React Toastify, React Icons
Backend: Django, Django REST Framework, Simple JWT
Styling: Custom CSS + Bootstrap
Deployment: Render

# 📒NoteBooks

The app stores JWT tokens in localStorage for authentication.
Filtering, searching, and navigation are dynamic without requiring page reloads.
Responsive design ensures usability across mobile, tablet, and desktop devices.


# 🎉Live Demo of NoteBook App
# ⚠️: please, first run https://finalcsw.onrender.com/, in other to start the backend, then :
Have fun🤝: https://react-note-app-43h3.onrender.com/

# 💦License
# MIT License © 2025 Idrice Junior