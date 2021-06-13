import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../component/Categories';
import PizzaBlock from '../component/PizzaBlock';
import SortPopup from '../component/SortPopup';

import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from './redux/actions/pizzas';




const categories = [
    'Мясные',
    'Вегетарианская',
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

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchPizzas());
    }, [])




    const dispatch = useDispatch();
    const state = useSelector(({ pizzas }) => {
        return {
            items: pizzas.items,
        }
    });

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    onClickItem={onSelectCategory}
                    items={categories} />

                <SortPopup
                    items={sortItems}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    state.items.map(item => {
                        return <PizzaBlock
                            key={item.id}
                            name={item.name}
                            img={item.imageUrl}
                            sizes={item.sizes}
                            price={item.price}
                            types={item.types} />

                    })
                }
            </div>
        </div>
    )
}

export default Home;