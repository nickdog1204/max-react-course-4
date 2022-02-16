import classes from "./MealItem.module.css";
import Card from "../../UI/Card";
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    const {name, description, price, id} = props;
    const formattedPrice = `$${price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const amountConfirmHandler = (amount) => {
        const item = {
            id,
            name,
            price,
            amount
        };
        cartCtx.addItem(item);
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAmountConfirm={amountConfirmHandler}/>
            </div>
        </li>
    )

}

export default MealItem;