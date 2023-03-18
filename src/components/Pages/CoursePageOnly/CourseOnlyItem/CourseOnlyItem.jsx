import classes from "../CoursePageOnly.module.scss"
import {useRef, useState} from "react";
import {useLocalTimeEffects} from "../../../effects/useLocalTimeEffects";
import {useSpeedEffects} from "../../../effects/useSpeedEffects";
import {useCurrentVideoEffects} from "../../../effects/useCurrentVideoEffects";
import CourseItemSidePanel from "./Panels/courseItemSidePanel";
import CourseItemVideoPanel from "./Panels/courseItemVideoPanel";
import CourseItemDescriptionPanel from "./Panels/courseItemDecriptionPanel";

const CourseOnlyItem = ({currentCourse, currentVideo, setCurrentVideo, courseVideos}) => {
    const videoRef = useRef();
    const [isOpenedDesc, setIsOpenedDesc] = useState(false);

    useCurrentVideoEffects(videoRef, currentVideo);
    useSpeedEffects(videoRef);
    useLocalTimeEffects(currentVideo, videoRef);

    return (
        <div className={classes.courseContainer}>
            <CourseItemSidePanel
                courseVideos={courseVideos}
                setCurrentVideo={setCurrentVideo}
            />
            <CourseItemVideoPanel
                courseVideos={courseVideos}
                currentVideo={currentVideo}
                currentCourse={currentCourse}
                isOpenedDesc={isOpenedDesc}
                setIsOpenedDesc={setIsOpenedDesc}
                videoRef={videoRef}
            />
            <CourseItemDescriptionPanel
                isOpenedDesc={isOpenedDesc}
            />
        </div>
    );
};

export default CourseOnlyItem;