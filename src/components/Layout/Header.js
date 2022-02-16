import {Fragment} from "react";
import mealsImg from '../../assets/meals.jpeg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    const {onCartBtnClick} = props;
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React餐飲</h1>
                <HeaderCartButton onClick={onCartBtnClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="A table full of delicious food"/>
            </div>
        </Fragment>
    );
}
export default Header;