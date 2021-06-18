export const addPizzaToCart = (pizza) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizza,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
})