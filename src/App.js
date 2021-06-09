import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './component/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';



function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then(response => {
        debugger
        setPizzas(response.data.pizzas)
      })
  }, []);

  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Route path="/" exact render={() => <Home items={pizzas} />} />
        <Route path="/cart" exact render={() => <Cart />} />
      </div>
    </div>
  );
}

export default App;
