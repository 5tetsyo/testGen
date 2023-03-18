import { Link } from 'react-router-dom';
import classes from './Homepage.module.scss';

function Homepage() {
    return (
        <div className={classes.HomePage}>
            <h1>Welcome!</h1>
            <p>Explore courses and learn something new today!</p>
            <Link to="/courses" className={classes.linkButton}>View Courses</Link>
        </div>
    );
}

export default Homepage;