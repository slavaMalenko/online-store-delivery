import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './component/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { setPizzas } from './redux/actions/pizzas';
import { setSortBy, setCategory } from './redux/actions/filters';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
      })
  }, [])


  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  )
}

export default App;
