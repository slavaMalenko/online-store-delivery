import React from 'react';

const Categories = React.memo(({ activeItemCategories, items, onClickItem }) => {

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickItem(null)}
                    className={activeItemCategories === null ? 'active' : ''} >

                    Все

                </li>

                {items &&
                    items.map((item, index) => {
                        return (
                            <li
                                onClick={() => onClickItem(index)}
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