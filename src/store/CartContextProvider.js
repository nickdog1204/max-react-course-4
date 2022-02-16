import {useReducer} from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if ('ADD' === action.type) {
        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price
        const idxOfItem = state.items.findIndex(it => it.id === action.item.id);
        let updatedItems;
        if (-1 === idxOfItem) {
            updatedItems = [...state.items, action.item];
        } else {
            updatedItems = state.items.map(it => {
                if (action.item.id === it.id) {
                    return {
                        ...it,
                        amount: it.amount + action.item.amount
                    }
                }
                return it
            })
        }
        // const updatedItems = [...state.items, action.item];
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if ('REMOVE' === action.type) {
        const existingCartItemIndex = state.items.findIndex(it => it.id === action.id);
        // const cartItem
        let updatedTotalAmount = state.totalAmount;
        const updatedItems = state.items
            .map(it => {
                if (it.id === action.id) {
                    updatedTotalAmount -= it.price;
                    if (it.amount === 1) {
                        return null;
                    } else {
                        return {
                            ...it,
                            amount: it.amount - 1
                        }

                    }

                }
                return it;
            })
            .filter(it => it)

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }
    return initialCartState;
}

const CartContextProvider = props => {
    const {children} = props;

    const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);
    const addItemToCartHandler = (item) => {
        dispatchCart({type: 'ADD', item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCart({type: 'REMOVE', id})

    };

    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )

}
export default CartContextProvider;