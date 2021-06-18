export const addPizzaToCart = (pizza) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizza,
})

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
})

export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})