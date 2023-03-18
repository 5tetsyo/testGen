import {useEffect} from "react";
import {getCourse} from "../async/getCourse";

export const useCourseEffects = (courseParam, currentCourse, setCurrentCourse, courseVideos, setCurrentVideo) => {
    useEffect(() => {
        async function createCourse(){
            const course = await getCourse(courseParam.id);
            await setCurrentCourse(course);
        }
        createCourse();
    }, [courseParam.id]);
    useEffect(() => {
        if (courseVideos) {
            setCurrentVideo(courseVideos[0])
        }
    }, [currentCourse]);
}