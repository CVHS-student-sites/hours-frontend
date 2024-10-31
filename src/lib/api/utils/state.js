import {studentData} from "$lib/stores/dashboard.js";
import * as Student from "$lib/api/dash/student.js";

export async function loadStudentData(){
    let hours = await Student.getStudentHours();
    let stats = await Student.getStudentStatistics();

    let data = {
        hours: await hours.data,
        statistics: await stats.data
    };

    studentData.set(data);
}