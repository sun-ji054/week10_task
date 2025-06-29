import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/loginAPI';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await login(username, password);
            localStorage.setItem('token', data.token);
            alert('로그인 성공!');
            navigate('/mainPage');
        } catch (err) {
            console.error('로그인 실패:', err);
            setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">로그인</h1>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    className="auth-input"
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="auth-error">{error}</div>}
                <button className="auth-button" type="submit">
                    로그인
                </button>
            </form>
            <div className="auth-link">
                계정이 없으신가요? <Link to="/signUpPage">회원가입</Link>
            </div>
        </div>
    );
}

export default LoginPage;
