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

            const totalCount = Object.keys(newPizzas).reduce((prev, key) => prev += newPizzas[key].items.length, 0);
            const totalPrice = Object.keys(newPizzas).reduce((prev, key) => prev += newPizzas[key].totalPrice, 0);

            return {
                ...state,
                items: newPizzas,
                totalCount,
                totalPrice,
            }
        }

        case 'REMOVE_CART_ITEM': {
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
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