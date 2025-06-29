import api from './api';

// 회원가입
export const register = async (username, email, password1, password2, nickname, university, location) => {
    try {
        const res = await api.post('/dj/registration/', {
            username,
            email,
            password1,
            password2,
            nickname,
            university,
            location,
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

// 로그인
export const login = async (username, password) => {
    try {
        const res = await api.post('/dj/login/', {
            username,
            password,
        });
        if (res.data && res.data.access) {
            localStorage.setItem('token', res.data.access);
        }
        return res.data;
    } catch (err) {
        throw err;
    }
};

// 로그아웃
export const logout = async () => {
    try {
        await api.post('/dj/logout/');
        localStorage.removeItem('token');
    } catch (err) {
        localStorage.removeItem('token');
    }
};

// 현재 로그인 상태 확인
export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};
