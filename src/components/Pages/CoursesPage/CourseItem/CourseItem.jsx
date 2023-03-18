import classes from "../CoursesPage.module.scss";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Hls from "hls.js";

;
const CourseItem = ({course}) => {
    const [isHover, setIsHover] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const courseVideoPreview = course?.meta?.courseVideoPreview?.link;
    const courseImagePreview = course?.previewImageLink;

    const handleMouseOver = () => {
        setIsHover(true);
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(courseVideoPreview);
            hls.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = courseVideoPreview;
        };
        video.play();
    };
    const handleMouseOut = () => {
        setIsHover(false);
        const video = videoRef.current;
        if (Hls.isSupported()) {
            const hls = video.hls;
            if (hls) {
                hls.destroy();
            };
        };


        video.pause();
    };

    return (
        <div onClick={() => {navigate(`/course/${course.id}`)}} className={classes.courseBlock}>
            <h2>{course.title}</h2>
            <div
                className={classes.imagePreview}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >

                <video
                    muted
                    width={"100%"}
                    height={"100%"}
                    poster={courseImagePreview+"/cover.webp"}
                    ref={videoRef}
                ></video>
            </div>
            <div>
                <div className={classes.desc}>Description: {course.description}</div>
                <div className={classes.rating}>Rating: {course.rating}/5 &#11088;</div>
            </div>
        </div>
    );
};

export default CourseItem;