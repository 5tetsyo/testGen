import classes from "./WrongRoutePage.module.scss";

const WrongRoute = () => {
    return (
        <div className={classes.wrongRoute}>
            <h1>Ooops...</h1>
            <p>Looks like someone is looking for something here.</p>
        </div>
    );
};

export default WrongRoute;