import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
//import opening_background from './opening_background.jpg'
import Blogbar from './components/Blogbar';
//import Box from './components/Box';
//import ProfileImg from './components/ProfileImg';
//import Info from "./components/Info";
import { Routes, Route, useNavigate} from 'react-router-dom';
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
//import loginAPI from "./loginAPI";
//import api from "./api";


export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
    if (showOpening) {
      const timer = setTimeout(() => {
        setShowOpening(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showOpening]);

  if (showOpening) {
    return (
      <div className="appContainer">
        <Opening />
      </div>
    );
  }
if (!isLoggedIn) {
    return (
      <div className="appContainer">
        <LoginPage
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            navigate("/", { replace: true });
          }}
        />
      </div>
    );
  }

  return (
    <div className="appContainer">
      <Blogbar />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/writePage" element={<WritePage />} />
        </Routes>
      </div>
    </div>
  );
}

