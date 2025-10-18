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

     <footer className="layout-footer">
      <div>
        &copy; {new Date().getFullYear()} My NoteBook App. All rights reserved.
      </div>
      <div>
        <a href="https://idricejunior.onrender.com">Get in touch with me!</a>
      </div>
      <div>
        Built with React & Django|
        <a href="https://github.com/Junior-idrice" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div>
        Follow me: 
        <a href="https://www.instagram.com/idricejr/?igsh=MWt2ZjUybHZuamczcg%3D%3D#" target="_blank">Instagram</a> | 
        <a href="https://www.linkedin.com/in/junior-idrice/" target="_blank">LinkedIn</a>
      </div>
     </footer>


      <ToastContainer />
    </div>
  );
};

export default MainLayout;
