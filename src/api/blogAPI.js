import api from './api';

// 인증 없이 사용할 axios 인스턴스 생성
const publicApi = api.create({
    baseURL: 'https://hufs-meotsa-13th.store/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 글 목록 불러오기
export const getPostList = async () => {
    const res = await api.get('/blog/');
    return res.data;
};

// 글 상세 조회
export const getPost = async (id) => {
    const res = await api.get(`/blog/${id}/`);
    return res.data;
};

// 글 작성 (인증 없이)
export const createPost = async (title, content) => {
    const res = await api.post('/blog/', { title, content });
    return res.data;
};

// 글 수정 (이 부분은 인증 필요할 수 있으니 기존대로 둡니다)
export const updatePost = async (id, title, content) => {
    const res = await api.put(`/blog/${id}/`, { title, content });
    return res.data;
};

// 글 삭제 (이 부분도 인증 필요할 수 있으니 기존대로 둡니다)
export const deletePost = async (id) => {
    const res = await api.delete(`/blog/${id}/`);
    return res.data;
};
