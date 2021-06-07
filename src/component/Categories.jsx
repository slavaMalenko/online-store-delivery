import { render } from '@testing-library/react';
import React from 'react';

class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.activateItem = this.activateItem.bind(this);
        this.state = {
            activeItem: 3
        };
    }

    activateItem = (index) => {
        this.setState({
            activeItem: index
        });
    }

    render() {
        const { items } = this.props;
        return (
            <div className="categories">
                <ul>
                    {
                        items.map((item, index) => <li
                            onClick={() => this.activateItem(index)}
                            className={this.state.activeItem === index ? 'active' : ''}
                            key={item}>
                            {item}
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Categories;