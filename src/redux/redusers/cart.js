const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const newPizzas = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allArrPizzas = [].concat.apply([], Object.values(newPizzas))

            return {
                ...state,
                items: newPizzas,
                totalCount: allArrPizzas.length,
                totalPrice: allArrPizzas.reduce((prev, item) => prev += item.price, 0)
            }
        }


        default:
            return state;
    }
}

export default cart;