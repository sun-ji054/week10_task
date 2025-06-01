import apiCall from "./api";

export const login = async (id, pw) => {
  try {
    const response = await apiCall.post("/auth/login", {
      username: id,
      password: pw,
    });

    localStorage.setItem('token', response.data.accessToken);
    sessionStorage.setItem('token', response.data.accessToken);

    console.log("로그인 성공:", response.data);

    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error);
    return null;
  }
};