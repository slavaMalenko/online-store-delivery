import React, { useState } from 'react';

function Categories({ items }) {

    const [activeItem, changeActiveItem] = useState(null);

    const changeClassOfActiveElement = (index) => {
        changeActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => changeClassOfActiveElement(null)}
                    className={activeItem === null ? 'active' : ''} >

                    Все
                    
                </li>

                {items &&
                    items.map((item, index) => {
                        return (
                            <li
                                onClick={() => changeClassOfActiveElement(index)}
                                className={activeItem === index ? 'active' : ''}
                                key={item} >

                                {item}

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;