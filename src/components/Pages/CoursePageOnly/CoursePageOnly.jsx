import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCourse} from "../../async/getCourse";
import Loader from "../../Loader/Loader";
import CourseOnlyItem from "./CourseOnlyItem/CourseOnlyItem";
import {useCourseEffects} from "../../effects/useCourseEffects";

const CoursePageOnly = () => {
    const courseParam = useParams();
    const [currentCourse, setCurrentCourse] = useState(null);

    const courseVideos = currentCourse?.lessons;
    const [currentVideo, setCurrentVideo] = useState(null);

    useCourseEffects(courseParam, currentCourse, setCurrentCourse, courseVideos, setCurrentVideo)

    return (
        <>
            {currentCourse && currentVideo ?
                <CourseOnlyItem currentCourse={currentCourse} courseVideos={courseVideos} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/>
                 :
                <Loader/>
            }
        </>
    );
};

export default CoursePageOnly;