import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const openCartHandler = () => {
        setCartIsShown(true);
    }
    const closeCartHandler = (from) => {
        console.log("clicked from: ", from);
        setCartIsShown(false);
    }
    return (
        <CartContextProvider>
            {cartIsShown && <Cart onBackdropOrCloseBtnClick={closeCartHandler}/>}
            <Header onCartBtnClick={openCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;
