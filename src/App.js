import React from 'react';
import { Route } from 'react-router-dom';

import Header from './component/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';



function App() {

  return (
    <div className="wrapper">

      <Header />

      <div className="content">
        <Route path="/" exact render={() => <Home />} />
        <Route path="/cart" exact render={() => <Cart />} />
      </div>
    </div>
  );
}

export default App;
