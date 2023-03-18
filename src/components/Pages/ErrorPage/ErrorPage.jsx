import classes from "./ErrorPage.module.scss";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={classes.errorPage}>
            <h1 className={classes.heading}>Oops!</h1>
            <p className={classes.message}>
                It looks like something went wrong. Please try again later.
            </p>
            <Link to={"/"} className={classes.link}>
                Go back to the home page
            </Link>
        </div>
    );
};

export default ErrorPage;