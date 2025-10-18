import { FaSquarePlus } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../axiosConfig";

const NavBar = ({ searchText, handleSearchText, isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      
      if (refreshToken) {
        await api.post('/auth/logout/', {
          refresh: refreshToken
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      
      setIsAuthenticated(false);
      toast.success('Logged out successfully');
      navigate('/login');
    }
  };

  return (
    <nav className="navbar py-50" style={{ padding: "20px",backgroundColor:"#e2d8c8ff" }}>
      <div className="container d-flex justify-content-around align-items-center" >
        <Link className="navbar-brand" to="/">
          <h4 style={{ fontWeight: "bold" }}>NoteBook</h4>
        </Link>

        {isAuthenticated && (
          <div className="d-flex align-items-center">
            <div
              className="input-group input-group-sm"
              style={{ width: "500px", height: "40px",backgroundColor:"#a4cacaff"  }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={(e) => handleSearchText(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                SearchNote
              </button>
            </div>
          </div>
        )}

        <div className="d-flex align-items-center gap-3">
          {isAuthenticated ? (
            <>
              <span style={{ color: "black", fontSize: "14px",}}>
                Welcome, <strong>{user.username}</strong>
              </span>

              <Link to="/add-note" style={{ textDecoration: "none" }}>
                <button className="btn btn-outline-primary btn-md" type="button">
                  <FaSquarePlus /> Add NoteBooks
                </button>
              </Link>

              <button
                className="btn btn-outline-danger btn-md"
                type="button"
                onClick={handleLogout}
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button className="btn btn-outline-primary btn-md" type="button">
                  Login
                </button>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button className="btn btn-primary btn-md" type="button">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;