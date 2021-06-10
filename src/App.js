import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './component/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { setPizzas } from './redux/actions/pizzas';
import { setSortBy, setCategory } from './redux/actions/filters';




class App extends React.Component {

  componentDidMount() {
    axios
      .get("http://localhost:3000/db.json")
      .then(response => {
        this.props.setPizzas(response.data.pizzas)
      })
  }

  render() {
    return (
      <div className="wrapper">

        <Header />

        <div className="content">
          <Route path="/" exact render={() => <Home items={this.props.pizzas} />} />
          <Route path="/cart" exact render={() => <Cart />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas.items,
    filters: state.filters,
  }
}

export default connect(mapStateToProps, { setPizzas, setSortBy, setCategory })(App);
