import axiosInstance from "$lib/api/config/axios.js";

export async function checkLoginStatus() {
    return  await axiosInstance.get('/auth/check-auth', {
        withCredentials: true
    });
}