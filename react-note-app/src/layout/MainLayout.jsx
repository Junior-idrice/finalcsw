import React from 'react';
import NavBar from '../components/NavBar';
import { Link, Outlet } from 'react-router-dom';
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

 <footer className="p-5 bg-light text-dark text-center
            position-relative custom-shadow">
               <div className="container">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" integrity="sha384-tViUnnbYAV00FLIhhi3v/dWt3Jxw4gZQcNoSCxCIFNJVCx7/D55/wXsrNIRANwdD" crossOrigin="anonymous"></link>
                <p className="lead">Copyright &copy; 2025 Frontend Developer</p>
                <Link href="https://www.linkedin.com/in/junior-idrice/"><i className="bi bi-linkedin text-dark mx-1"></i></Link>
                <Link href="https://www.instagram.com/idricejr?igsh=MWt2ZjUybHZuamczcg=="><i className="bi bi-instagram text-dark mx-1"></i></Link>
               
            </div>
            
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





      <ToastContainer />
    </div>
  );
};

export default MainLayout;
