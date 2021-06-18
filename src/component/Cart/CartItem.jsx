import React from 'react';

import CartItemDelete from './CartItemDelete';
import CartButtonMinus from './CartButtonMinus';
import CartButtonPlus from './CartButtonPlus';

function CartItem({ id, name, img, type, size, totalPrice, totalPizzaCount, onRemove }) {

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={img}
                    alt="Pizza"
                />
            </div>

            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>{type} тесто, {size} см.</p>
            </div>

            <div className="cart__item-count">
                <CartButtonMinus className="button--circle" outline />
                <b>{totalPizzaCount}</b>
                <CartButtonPlus className="button--circle" outline />
            </div>

            <div className="cart__item-price">
                <b>{totalPrice} ₽</b>
            </div>

            <CartItemDelete id={id} onRemove={onRemove} className="button--circle" outline />
        </div>
    )
}

export default CartItem;