import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = props => {
    const {onBackdropOrCloseBtnClick} = props;
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }
    const cartItems = <ul className={classes['cart-items']}> {cartCtx.items.map(it =>
        <CartItem
            key={it.id}
            name={it.name}
            price={it.price}
            amount={it.amount}
            onRemove={cartItemRemoveHandler.bind(null, it.id)}
            onAdd={cartItemAddHandler.bind(null, it)}
        />)}</ul>;
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const shouldShowOrderBtn = cartCtx.items.length > 0;
    const closeBtnClickHandler = (event) => {
        onBackdropOrCloseBtnClick('modalCloseBtn');
    }
    return (
        <Modal onBackdropOrCloseBtnClick={onBackdropOrCloseBtnClick}>
            {cartItems}
            <div className={classes.total}>
                <span>總價錢</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeBtnClickHandler}>關閉</button>
                {shouldShowOrderBtn && <button className={classes.button}>訂購</button>}
            </div>
        </Modal>
    )
}
export default Cart;
