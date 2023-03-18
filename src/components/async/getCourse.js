import axios from 'axios';

export const getCourse = async (id) => {
    const apiUrl = `http://localhost:3000/course/${id}`;
    const headers = new Headers();
    headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Yzg4NWFjZi05ZTQ5LTRjNjktODNhOC1jZTQwMmI0NGI2NjAiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5ODgxMTksImV4cCI6MTY3OTg4ODExOX0.avdEhdWxMP1qUZhZtEkcd-Ys2KqSDwf-BSjrdUHB0nw")
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

export const getCourses = async () => {
    const apiUrl = `http://localhost:3000/courses`;
    const headers = new Headers();
    headers.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Yzg4NWFjZi05ZTQ5LTRjNjktODNhOC1jZTQwMmI0NGI2NjAiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5ODgxMTksImV4cCI6MTY3OTg4ODExOX0.avdEhdWxMP1qUZhZtEkcd-Ys2KqSDwf-BSjrdUHB0nw")
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
};
