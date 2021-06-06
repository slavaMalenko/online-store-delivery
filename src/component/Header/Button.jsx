import React from 'react';
import className from 'classnames';
import classNames from 'classnames';

function Button(props) {
    return (
        <button className={classNames(
            'button',
            { 'button--outline': props.outline },
        )}>
            {this.props.children}
        </button>
    )
}

export default Button;