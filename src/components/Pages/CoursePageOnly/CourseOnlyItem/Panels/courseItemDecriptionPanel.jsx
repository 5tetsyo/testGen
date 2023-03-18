import classes from "../../CoursePageOnly.module.scss";

const CourseItemDescriptionPanel = ({isOpenedDesc}) => {
    return (
        <div style={{display: isOpenedDesc ? "block" : "none"}} className={classes.courseDescriptionPanel}>
            <h2>Description for users.</h2>
            <p>To change speed we are using digit numbers from 1 to 8.</p>
            <ul>
                <li>"1" - 1x speed</li>
                <li>"2" - 0.25x speed</li>
                <li>"3" - 0.5x speed</li>
                <li>"4" - 0.75x speed</li>
                <li>"5" - 1.25x speed</li>
                <li>"6" - 1.5x speed</li>
                <li>"7" - 1.75x speed</li>
                <li>"6" - 2x speed</li>
            </ul>
        </div>
    );
};

export default CourseItemDescriptionPanel;