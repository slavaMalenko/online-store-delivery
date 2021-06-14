const initialState = {
    items: [],
    isLoading: false,
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
            }

        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }

        default:
            return state;
    }
}

export default pizzas;