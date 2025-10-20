<h2>NoteBook App📖</h2>

<p>This NoteBook App is a modern web-based note-taking application built with React for the frontend and Django + Django REST Framework for the backend. It provides users a seamless and responsive interface to create, view, search, and filter notes based on different categories. The application is fully responsive and optimized for both desktop and mobile devices.<p>
<hr>
<h2>Features❄️</h2>
<i>This web application includes the following features:</i>
<ul>
<li>User Authentication: Secure signup, login, and logout functionality using JWT tokens. Users can create accounts and access their notes across devices.
</li>
<li>Add Notes: Users can add notes with a title, content, and category (Business, Personal, Important). Notes are visually tagged with color indicators based on their category.
</li>
<li>Filter Notes: Users can filter notes by category using a dropdown menu. Selecting “All Notes” returns to the homepage displaying all notes without requiring a page refresh.
</li>
<li>Search Functionality: A search bar allows users to find notes by title or content keywords dynamically.
</li>
<li>Responsive Design: Notes are displayed in a three-column layout on larger screens, while on smaller screens, they stack vertically and remain centered. The layout adjusts dynamically based on device width.
</li>
<li>Dynamic Feedback: Toast notifications provide immediate feedback for actions like login, signup, logout, note creation, or errors.
</li>
<li>Mobile-Friendly Interface: Forms, cards, buttons, and filters scale properly to smaller devices, maintaining usability and readability.
</li>
</ul>

<h2>Requirements</h2>
<i>To run the app locally, the following are required:</i>
<ul>
<li>Backend (Django)</li>
<li>Python 3.10+</li>
<li>Django 5.x</li>
<li>Django REST Framework</li>
<li>djangorestframework-simplejwt</li>
<li>SQLite (default) or PostgreSQL/MySQL if preferred</li>
<li>Frontend (React)</li>
<li>Node.js 18+</li>
<li>npm or yarn</li>
<li>Installation & Setup</li>
<li>Clone the repository</li>
<li>git clone https://github.com/YourUsername/NoteBookApp.git</li>
<li>cd NoteBookApp</li>

<ol>
<li><b>Backend Setup</b></li>
<li>cd backend</li>
<li>python -m venv env</li>
<li>env\Scripts\activate     # Windows</li>
<li>source env/bin/activate  # Linux/macOS</li>
<li>pip install -r requirements.txt</li>
<li>python manage.py migrate</li>
<li>python manage.py runserver</li>
<li>Backend runs at http://127.0.0.1:8000/.</li>
</ol>

<ol>
<li><b>Frontend Setup</b></li>
<li>cd ../frontend</li>
<li>npm install</li>
<li>npm run dev</li>
</ol>

</ul>
Usage

Open the app in a web browser.

Signup or login to start managing notes.

Add notes with titles, content, and categories.

Use the filter dropdown to view notes by category or click “All Notes” to return to the full list.

Search for notes by keywords using the search bar.

Logout when finished to end the session.

Technologies Used

Frontend: React, React Router, Bootstrap, React Toastify, React Icons

Backend: Django, Django REST Framework, Simple JWT

Styling: Custom CSS + Bootstrap

Deployment: Render

Notes

The app stores JWT tokens in localStorage for authentication.

Filtering, searching, and navigation are dynamic without requiring page reloads.

Responsive design ensures usability across mobile, tablet, and desktop devices.

License

MIT License © 2025 [Idrice Junior]