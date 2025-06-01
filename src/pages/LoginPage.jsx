import React, { useState } from 'react';
import {login} from "../login/loginAPI";
import "../App.css";

function LoginPage({ onLoginSuccess }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleLogin = async () => {
        const result = await login(id, pw);

        if (result) {
            console.log('로그인 결과:', result);
            onLoginSuccess();
        } else {
            console.log('로그인 실패');
            alert("로그인 실패")
        }
    };

    return (
        <div className='loginPage'>
             <div className='loginBox'>
            <div>
                <h1>Login</h1>
            <input type="text" placeholder="Username" value={id} onChange={(e) => setId(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <input type='checkbox' id='checkbox'></input>
            <label for='checkbox'>Remember me</label>
            <button onClick={handleLogin}>Login</button>
            </div>
        </div>
        </div>
    );
}

export default LoginPage;