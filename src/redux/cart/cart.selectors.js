import { createSelector } from 'reselect';

// Selector Input
const selectCart = state => state.cart;

// Selector Output
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

// Selector Output
export const selectCartItemsCount = createSelector(
    // Selector Input
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (previousQuantity, cartItem) => previousQuantity + cartItem.quantity
            ,0
        ) 
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (previousPrice, cartItem) => previousPrice + cartItem.quantity * cartItem.price
            , 0
        )
)