import axiosInstance from "$lib/api/config/axios.js";

export async function checkLoginStatus() {
    const token = localStorage.getItem('token');
    return  await axiosInstance.get('/auth/check-auth', {
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export function loginStudent(data) {
    return axiosInstance.post('/auth/student/login', data)
}

export function loginPrivileged(data) {
    return axiosInstance.post('/auth/privileged/login', data)
}