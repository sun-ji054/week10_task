import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogWrite.css';

function BlogWrite({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!title.trim() || !content.trim()) {
            setError('제목과 내용을 모두 입력해주세요.');
            setIsSubmitting(false);
            return;
        }

        // API 대신 로컬에 저장
        addPost({
            id: Date.now(),
            title,
            content,
            created_at: new Date().toISOString(),
        });
        alert('글이 성공적으로 작성되었습니다.');
        navigate('/blog');
        setIsSubmitting(false);
    };

    return (
        <div className="write-container">
            <h1 className="write-title">새 글 작성</h1>
            <form className="write-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                        required
                        className="write-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 입력하세요"
                        required
                        className="write-textarea"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="button-group">
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? '작성 중...' : '작성하기'}
                    </button>
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => navigate('/blog')}
                        disabled={isSubmitting}
                    >
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BlogWrite;
