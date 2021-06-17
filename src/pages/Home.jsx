import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../component/Categories';
import PizzaBlock from '../component/Pizza/PizzaBlock';
import SortPopup from '../component/SortPopup';
import Placeholder from '../component/Pizza/Placeholder';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';




const categories = [
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
]



function Home() {

    const state = useSelector(({ pizzas, filters }) => {
        return {
            items: pizzas.items,
            isLoading: pizzas.isLoading,
            sortBy: filters.sortBy,
            category: filters.category,
        }
    });



    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPizzas(state.sortBy, state.category));
    }, [state.sortBy, state.category])





    const onClickItem = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onClickSortItem = React.useCallback(sort => {
        dispatch(setSortBy(sort))
    }, [])

    const handleAddPizzaToCart = (pizza) => {
        dispatch(addPizzaToCart(pizza))
    }



    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClickItem={onClickItem}
                    items={categories}
                    activeItemCategories={state.category} />

                <SortPopup
                    activeItemSortPopup={state.sortBy}
                    onClickSortPopup={onClickSortItem}
                    items={sortItems}
                />

            </div>

            <h2 className="content__title">{state.category !== null ? categories[state.category] : 'Все'} пиццы</h2>
            <div className="content__items">
                {state.isLoading
                    ? state.items.map(item => {
                        return <PizzaBlock
                            key={item.id}
                            id={item.id}
                            onAddPizza={handleAddPizzaToCart}
                            name={item.name}
                            img={item.imageUrl}
                            sizes={item.sizes}
                            price={item.price}
                            types={item.types} />
                    })
                    : Array(4).fill(0).map((item, index) => <Placeholder key={index} />)
                }
            </div>
        </div>
    )
}

export default Home;