import React from 'react';


import Categories from '../component/Categories';
import PizzaBlock from '../component/PizzaBlock';
import SortPopup from '../component/SortPopup';




function Home({ items }) {
    return (
        <div className="container">
            <div className="content__top">

                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]} />

                <SortPopup
                    items={[
                        'популярности',
                        'цене',
                        'алфавиту',
                    ]}
                />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(item => {
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