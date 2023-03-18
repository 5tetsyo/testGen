import classes from "./Header.module.scss"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className={classes.navigationBar}>
            <ul className={classes.navigationList}>
                <li className={classes.navigationItem}>
                    <Link to="/home" className={classes.navigationLink}>
                        Home
                    </Link>
                </li>
                <li className={classes.navigationItem}>
                    <Link to="/courses" className={classes.navigationLink}>
                        Courses
                    </Link>
                </li>
                <li className={classes.navigationItem}>
                    <Link to="/contact" className={classes.navigationLink}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;