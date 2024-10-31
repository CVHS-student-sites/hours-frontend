import axiosInstance from "$lib/api/config/axios.js";

//todo decide if api functions need to return the entire axios object or just the data
export function getStudentHours(){
    return axiosInstance.get('/student/hours');
}

export function getStudentStatistics(){
    return axiosInstance.get('/student/statistics');
}