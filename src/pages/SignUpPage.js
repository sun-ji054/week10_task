import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/loginAPI';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [nickname, setNickname] = useState('');
    const [university, setUniversity] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (password1 !== password2) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        try {
            await register(username, email, password1, password2, nickname, university, location);
            alert('회원가입이 완료되었습니다! 로그인해주세요.');
            navigate('/loginPage');
        } catch (err) {
            if (err.response && err.response.data) {
                const messages = Object.values(err.response.data).flat().join(' ');
                setError(messages);
            } else {
                setError('회원가입 중 오류가 발생했습니다.');
            }
        }
    };

    return (
        <div className="auth-container">
            <h1 className="auth-title">회원가입</h1>
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
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="text"
                    placeholder="닉네임"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="text"
                    placeholder="학교"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="text"
                    placeholder="지역"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="password"
                    placeholder="비밀번호"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                />
                <input
                    className="auth-input"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
                {error && <div className="auth-error">{error}</div>}
                <button className="auth-button" type="submit">
                    가입하기
                </button>
            </form>
            <div className="auth-link">
                이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </div>
        </div>
    );
}

export default Register;
