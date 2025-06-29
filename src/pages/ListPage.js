import React from 'react';
import './ListPage.css';
import { Link } from 'react-router-dom';

function ListPage({ posts = [] }) { 
  return (
    <div className="blog-list-container">
      <div className="blog-header">
        <h1 className="blog-title">블로그</h1>
        <Link to="/Blogwrite" className="write-button">
            새 글 작성
        </Link>
      </div>
      <div className="post-grid">
        {posts.length === 0 ? (
          <p className="no-posts">작성된 글이 없습니다.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-date">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                <p className="post-summary">
                  {post.content.substring(0, 150)}...
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListPage;
