import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
import Blogbar from './components/Blogbar';
import { Routes, Route} from 'react-router-dom';
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import MainPage from "./pages/MainPage";


export default function App() {
  const [showOpening, setShowOpening] = useState(true);

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

if (showOpening) {
    return (
      <div className="appContainer">
        <Opening />
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

