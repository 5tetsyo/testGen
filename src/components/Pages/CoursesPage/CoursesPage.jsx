import classes from './CoursesPage.module.scss';
import Pagination from "../../Pagination/Pagination";
import CourseItem from "./CourseItem/CourseItem";
import {useLocation} from "react-router-dom";

const CoursesPage = ({courses, onPageChange, pageInformation}) => {
    const location = useLocation();
    const page = parseInt(location.pathname.slice(-1));

    const {coursesPerPage} = pageInformation;
    const start = (page-1)*coursesPerPage;
    const pageItems = courses.slice(start, start+coursesPerPage);

    return (
        <>
            <div className={classes.coursesList}>
                {pageItems.map(el => {
                    return (
                        <CourseItem key={el.id} course={el}/>
                    )
                })}
            </div>
            <Pagination onPageChange={onPageChange} pageInformation={pageInformation}/>
        </>
    );
};

export default CoursesPage;