import {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const {onClick} = props;
    const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
    const ctx = useContext(CartContext)
    const numberOfCartItems = ctx.items
        .reduce((accum, incoming) => accum + incoming.amount, 0)

    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`;
    const {items} = ctx;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnHighlighted(true);

        const timer = setTimeout(() => {
            setIsBtnHighlighted(false);

        }, 300)
        return () => {
            clearTimeout(timer)
            // setIsBtnHighlighted(false);
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>你的購物車</span>
            <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
    );
}

export default HeaderCartButton;