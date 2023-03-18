import {Link, useLocation} from "react-router-dom";
import classes from "./Pagination.module.scss"

const Pagination = ({onPageChange, pageInformation}) => {
    const location = useLocation();
    const currentPage = (location.pathname.slice(-1));
    const {totalPages} = pageInformation;
    const totalPagesArray = Array.from({length: totalPages},(_, i) => i + 1);
    return (
        <div className={classes.linksContainerPag}>
            {totalPages && totalPagesArray.map(page => {
                return <Link className={classes.paginationLink}
                    key={page}
                    to={`/courses/${page}`}
                    style={{ marginRight: "10px", fontWeight: page === parseInt(currentPage) ? "bold" : "normal" }}
                    onClick={() => onPageChange(page)}>
                    {page}
                </Link>
            })}
        </div>
    );
};

export default Pagination;