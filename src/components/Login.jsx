import React, { useState } from 'react';
import {login} from '../api/loginAPI';
import styled from 'styled-components';

const LoginContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(username, password);
            console.log('로그인 성공:', res);
            alert('로그인 성공!');
            // 여기에 메인 페이지로 이동하는 로직 추가
        } catch (err) {
            alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
        }
    };

    return (
        <LoginContainer>
            <Title>로그인</Title>
            <form onSubmit={handleLogin}>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <Button type="submit">로그인</Button>
            </form>
        </LoginContainer>
    );
}

export default Login;
