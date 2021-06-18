export const addPizzaToCart = (pizza) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizza,
})

export const clearCart = (pizza) => ({
    type: 'CLEAR_CART',
})