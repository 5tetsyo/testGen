import React from 'react';
import classes from "../../CoursePageOnly.module.scss";

const CourseItemSidePanel = ({courseVideos, setCurrentVideo}) => {
    return (
        <div className={classes.courseSidePanel}>
            <h2>Lessons board</h2>
            <p>Your lessons:</p>
            <hr/>
            <div className={classes.lessonContainer}>
                {courseVideos.map((les) => {
                    const locked = les.status === "locked"
                    return (
                        <div
                            key={les.id}
                            title={locked ? "This lesson is locked." : les.title}
                            className={locked ? classes.Locked : classes.lesson}
                            onClick={() => !locked && setCurrentVideo(les)}>
                            {les.title}
                            {locked ? <span dangerouslySetInnerHTML={{ __html: locked ? "&#x1F512;" : "" }}></span> : ""}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default CourseItemSidePanel;