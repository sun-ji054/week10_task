import React, { useState } from 'react';
import { register } from '../api/loginAPI';
import styled from 'styled-components';

const RegisterContainer = styled.div`
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

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await register(username, email, password);
            console.log('회원가입 성공:', res);
            alert('회원가입이 완료되었습니다! 로그인해주세요.');
            // 여기에 로그인 페이지로 이동하는 로직 추가
        } catch (err) {
            alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <RegisterContainer>
            <Title>회원가입</Title>
            <form onSubmit={handleRegister}>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    required
                />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <Button type="submit">회원가입</Button>
            </form>
        </RegisterContainer>
    );
}

export default Register;
