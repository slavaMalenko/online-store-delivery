import React from 'react';

const Categories = React.memo(({ items, onClickItem }) => {

    const [activeItemCategories, changeActiveItemCategories] = React.useState(null);

    const changeClassOfActiveElement = (index) => {
        changeActiveItemCategories(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => changeClassOfActiveElement(null)}
                    className={activeItemCategories === null ? 'active' : ''} >

                    Все

                </li>

                {items &&
                    items.map((item, index) => {
                        return (
                            <li
                                onClick={() => changeClassOfActiveElement(index)}
                                className={activeItemCategories === index ? 'active' : ''}
                                key={item} >

                                {item}

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default Categories;