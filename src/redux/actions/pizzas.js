import axios from 'axios';

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    console.log(sortBy, category)
    dispatch(isLoading(false));
    axios
        .get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
        .then(({ data }) => {
            dispatch(setPizzas(data));
            dispatch(isLoading(true));
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

export const isLoading = (boolean) => ({
    type: 'IS_LOADING',
    payload: boolean,
});
