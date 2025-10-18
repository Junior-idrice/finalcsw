import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import NoteDetailPage from './pages/NoteDetailPage';
import AddNotePage from './pages/AddNotePage';
import EditNotePage from './pages/EditNotePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from './axiosConfig';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);
  }, []);

  const handleFilterText = (val) => {
    setFilterText(val);
  };

  const resetFilter = () => {
  setFilterText(""); 
};


  const handleSearchText = (val) => {
    setSearchText(val);
  };

  const filterNotes =
    filterText === "BUSINESS"
      ? notes.filter(note => note.category === "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter(note => note.category === "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter(note => note.category === "IMPORTANT")
      : notes;


  useEffect(() => {
    if (!isAuthenticated) return;

    if (searchText === "") {
      fetchNotes();
      return;
    }

    if (searchText.length < 3) return;

    api
      .get(`notes-search/?search=${searchText}`)
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err.message);
        if (err.response?.status === 401) {
          setIsAuthenticated(false);
          toast.error('Session expired. Please login again.');
        }
      });
  }, [searchText, isAuthenticated]);


  const fetchNotes = () => {
    setIsLoading(true);
    api
      .get("notes/")
      .then(res => {
        setNotes(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setIsLoading(false);
        if (err.response?.status === 401) {
          setIsAuthenticated(false);
        }
      });
  };


  useEffect(() => {
    if (isAuthenticated) {
      fetchNotes();
    }
  }, [isAuthenticated]);

  const addNote = (data) => {
    api
      .post("notes/", data)
      .then(res => {
        setNotes([res.data, ...notes]);
        toast.success("New note added successfully");
      })
      .catch(err => {
        console.log(err.message);
        toast.error("Failed to add note");
      });
  };

  const updateNote = (data, slug) => {
    api
      .put(`notes/${slug}/`, data)
      .then(res => {
        setNotes(prevNotes =>
          prevNotes.map(note =>
            note.slug === slug ? res.data : note
          )
        );
        toast.success("Note updated successfully");
      })
      .catch(err => {
        console.log(err.message);
        toast.error("Failed to update note");
      });
  };

  const deleteNote = (slug) => {
    api
      .delete(`notes/${slug}/`)
      .then(() => {
        setNotes(notes.filter(note => note.slug !== slug));
        toast.success("Note deleted successfully");
      })
      .catch(err => {
        console.log(err.message);
        toast.error("Failed to delete note");
      });
  };


  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            searchText={searchText}
            handleSearchText={handleSearchText}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        }
      >
       
        <Route
          path="login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <SignupPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

      
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage
                notes={filterNotes}
                loading={isLoading}
                handleFilterText={handleFilterText}
                resetFilter={resetFilter}
              />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="add-note"
          element={
            <ProtectedRoute>
              <AddNotePage addNote={addNote} />
            </ProtectedRoute>
          }
        />
        <Route
          path="edit-note/:slug"
          element={
            <ProtectedRoute>
              <EditNotePage updateNote={updateNote} />
            </ProtectedRoute>
          }
        />
        <Route
          path="notes/:slug"
          element={
            <ProtectedRoute>
              <NoteDetailPage deleteNote={deleteNote} />
            </ProtectedRoute>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
