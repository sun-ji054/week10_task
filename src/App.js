import React, { useState, useEffect } from 'react';
import './App.css';
import Opening from './components/Opening';
import Blogbar from './components/Blogbar';
import { Routes, Route, useNavigate } from 'react-router-dom'; // useNavigate 추가!
import ListPage from "./pages/ListPage";
import MainPage from "./pages/MainPage";
import LoginPage from './pages/LoginPage';
import BlogWrite from './pages/BlogWrite';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  const navigate = useNavigate(); // useNavigate 사용

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
        navigate('/mainPage'); // Opening이 끝나면 무조건 /mainPage로 이동!
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showOpening, navigate]); // navigate도 의존성에 추가

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
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/listPage" element={<ListPage posts={posts}/>} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
          <Route path="/blogWrite" element={<BlogWrite addPost={addPost} />} />
        </Routes>
      </div>
    </div>
  );
}
