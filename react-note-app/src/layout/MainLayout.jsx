import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({ searchText, handleSearchText, isAuthenticated, setIsAuthenticated }) => {
  return (
    <div className="layout-container">
      <NavBar
        searchText={searchText}
        handleSearchText={handleSearchText}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />

      <div className="layout-content">
        <Outlet />
      </div>

   <footer className="layout-footer bg-light py-3 mt-4">
  <div className="container text-center" style={{ marginLeft: "5%" }}>
    <div className="mb-2">
      &copy; {new Date().getFullYear()} My NoteBook App. All rights reserved.
    </div>

    <div className="mb-2">
      <a
        href="https://idricejunior.onrender.com"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        Get in touch with me!
      </a>
    </div>

    <div className="mb-2">
      Built with React & Django |
      <a
        href="https://github.com/Junior-idrice"
        target="_blank"
        rel="noreferrer"
        className="ms-1 text-decoration-none"
      >
        GitHub
      </a>
    </div>

    <div>
      Follow me:{" "}
      <a
        href="https://www.instagram.com/idricejr/?igsh=MWt2ZjUybHZuamczcg%3D%3D#"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        Instagram
      </a>{" "}
      |{" "}
      <a
        href="https://www.linkedin.com/in/junior-idrice/"
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none"
      >
        LinkedIn
      </a>
    </div>
  </div>
</footer>
 <footer class="p-5 bg-light text-dark text-center
            position-relative custom-shadow">
            <div class="container">
                <p class="lead">Copyright &copy; 2025 Frontend Developer</p>
                <a href="https://www.linkedin.com/in/junior-idrice/"><i class="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="https://www.instagram.com/idricejr?igsh=MWt2ZjUybHZuamczcg=="><i class="bi bi-instagram text-dark mx-1"></i></a>
               
            </div>

            </footer>





      <ToastContainer />
    </div>
  );
};

export default MainLayout;
