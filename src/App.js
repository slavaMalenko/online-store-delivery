import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './component/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

import { fetchPizzas } from './redux/actions/pizzas';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
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
