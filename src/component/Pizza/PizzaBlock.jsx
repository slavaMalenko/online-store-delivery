import React from 'react';
import ButtonPizza from './ButtonPizza';


function PizzaBlock({ id, img, name, sizes, price, types, onAddPizza, addedCount }) {

    const [activeType, setActiveType] = React.useState(0);
    const changeActiveType = (index) => {
        setActiveType(index)
    }

    const [activeSize, setActiveSize] = React.useState(26);
    const changeActiveSize = (item) => {
        setActiveSize(item)
    }


    const onClickAddPizza = () => {
        const pizza = {
            id,
            name,
            img,
            price,
            size: activeSize,
            type: activeType === 0 ? 'тонкое' : 'традиционное',
        }
        onAddPizza(pizza)
    }



    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={img}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        types.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => changeActiveType(index)}
                                    className={activeType === index ? 'active' : ''}>
                                    {
                                        item === 0 ? "тонкое" : "традиционное"
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        sizes.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => changeActiveSize(item)}
                                    className={activeSize === item ? 'active' : ''}>

                                    {item} см.

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price} ₽</div>

                <ButtonPizza
                    onClickAddPizza={onClickAddPizza}
                    addedCount={addedCount}
                    className="button--add"
                    outline />
            </div>
        </div >
    )
}

export default PizzaBlock;