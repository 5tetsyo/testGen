import classes from "../../CoursePageOnly.module.scss";

const CourseItemVideoPanel = ({courseVideos, currentCourse, currentVideo, isOpenedDesc, setIsOpenedDesc, videoRef}) => {
    const getIndex = () => {
        return courseVideos.indexOf(currentVideo);
    }
    const secondsToTime = (sec) => {
        const h = Math.floor(sec / 3600).toString().padStart(2,'0'),
            m = Math.floor(sec % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(sec % 60).toString().padStart(2,'0');

        return sec >= 3600 ?  h + ':' + m + ':' + s : m + ':' + s;
    };
    console.log(isOpenedDesc)
    return (
        <div className={classes.courseVideoPanelContainer}>
            <div className={classes.courseDesc}>
                <h2>{currentCourse.title}</h2>
                <p>{currentCourse.description}</p>
                <hr/>
            </div>
            <div className={classes.courseVideoPanel}>
                <div className={classes.videoPanel}>
                    <video ref={videoRef} width={"854px"} height={"480px"} controls poster={currentCourse.previewImageLink + '/' + `${currentVideo.order}` + '.webp'}/>
                </div>
                <div className={classes.videoDesc}>
                    <h3>{getIndex()+1}.{currentVideo.title}.</h3>
                    <span>Duration: {secondsToTime(currentVideo.duration)}</span>
                    <div className={classes.skillsContainer}>
                        <h3>Skills:</h3>
                        {currentCourse?.meta?.skills.map((skill,i) => <div key={i} className={classes.skill}>{skill}</div>)}
                    </div>
                    <button onClick={() => {setIsOpenedDesc(!isOpenedDesc)}}>{!isOpenedDesc ? "Open description" : "Close description"}</button>
                </div>
            </div>
        </div>
    );
};

export default CourseItemVideoPanel;