import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogbar() {
  return(
    <nav className="blogbar">
      <div className="logo">선지's Page</div>
      <ul>
        <li><Link to="/signUpPage">회원가입</Link></li>
        <li><Link to="/loginPage">로그인</Link></li>
        <li><Link to="/blogWrite">글쓰기</Link></li>
        <li><Link to="/listPage">글 목록</Link></li>
        <li><Link to="/mainPage">home</Link></li>
      </ul>
    </nav>
  );
}