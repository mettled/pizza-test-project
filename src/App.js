import React from 'react';
import { Header } from './pages';
import { Main, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
