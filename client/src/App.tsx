import './App.css';
import NavBar from './components/NavBar';
import MoodFilter from './components/MoodFilter';
import ContentList from './components/ContentList';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleAuthChange = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
      console.log('Auth change detected, isAuthenticated:', !!token);
    };

    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    console.log('Initial token check, isAuthenticated:', !!token);
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={isAuthenticated ? (
          <>
            <ContentList />
            <MoodFilter />
          </>
        ) : (
          <Navigate to="/auth" />
        )} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/auth"} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
