const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((prev, item) => prev += item.price, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newPizzas = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            }

            const items = Object.values(newPizzas).map(item => item.items);
            const allArrPizzas = [].concat.apply([], Object.values(items));

            return {
                ...state,
                items: newPizzas,
                totalCount: allArrPizzas.length,
                totalPrice: getTotalPrice(allArrPizzas),
            }
        }

        case 'CLEAR_CART':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }


        default:
            return state;
    }
}

export default cart;