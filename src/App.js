import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
import Blogbar from './components/Blogbar';
import { Routes, Route} from 'react-router-dom';
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import LoginPage from './pages/LoginPage';
import BlogWrite from './pages/BlogWrite';
import SignUpPage from './pages/SignUpPage';


export default function App() {

  // posts 상태를 상위에서 관리 (localStorage 연동)
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });

    // 글 추가 함수
    const addPost = (post) => {
        const newPosts = [post, ...posts];
        setPosts(newPosts);
        localStorage.setItem('posts', JSON.stringify(newPosts));
    };

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
          <Route path="/blogWrite" element={<BlogWrite />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/write" element={<BlogWrite addPost={addPost} />} />
        </Routes>
      </div>
    </div>
  );
}

