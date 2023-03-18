import React, {useEffect, useState} from 'react';
import {getCourses} from "../async/getCourse";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import Header from "../Header/Header";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import Homepage from "../Pages/Homepage/Homepage";
import CoursePageOnly from "../Pages/CoursePageOnly/CoursePageOnly";
import WrongRoute from "../Pages/WrongRoutesPage/WrongRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Loader from "../Loader/Loader";

const RouteCoursesApp = () => {
    const [courses, setCourses] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const coursesPerPage = 10;

    useEffect(() => {
        const createCourses = async() => {
            const responseCourses = await getCourses();
            await setCourses(responseCourses.courses);
        };
        createCourses()
    }, []);
    useEffect(() => {
        if (courses) setTotalPages(Math.ceil(courses.length / coursesPerPage));
    }, [courses]);

    const handleChangePage = (page) => {
        setCurrentPage(page)
    };

    return (
        <BrowserRouter>
            <Header/>
            {courses ?
                <Routes>
                    <Route path="/courses/:page" element={
                        <CoursesPage
                            courses={courses}
                            onPageChange={handleChangePage}
                            pageInformation={{currentPage, totalPages, coursesPerPage}}
                        />}
                    />
                    <Route path={"/home"} element={<Homepage/>}/>
                    <Route path={"/"} element={<Homepage/>}/>
                    <Route path="/courses" element={<Navigate to="/courses/1"/>}/>
                    <Route path="/course/:id" element={<CoursePageOnly/>}/>
                    <Route path={"/wrong-route"} element={<WrongRoute/>}/>
                    <Route path={"/error"} element={<ErrorPage/>}/>
                    <Route path="/*" element={<Navigate to={"wrong-route"}/>}/>
                </Routes> :
                <Loader/>
            }
        </BrowserRouter>
    );
};

export default RouteCoursesApp;