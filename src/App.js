import React, { useEffect, useState } from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setPizzas, fetchPizzas } from './redux/actions/pizzasAction';

class App extends React.Component {
  componentDidMount() {
    fetch('/db.json')
      .then((data) => data.json())
      .then(({ pizzas }) => {
        this.props.setPizzas(pizzas);
      });
  }

  render() {
    const { items } = this.props.pizzas;
    console.log(items[0]);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

// function App() {
//   const [pizzas, setPizzas] = useState([]);
//   useEffect(() => {
//     fetch('/db.json')
//       .then((data) => data.json())
//       .then(({ pizzas }) => {
//         setPizzas(pizzas);
//       });
//   }, []);

//   React.useEffect(() => {}, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={() => <Home items={pizzas} />} />
//         <Route exact path="/cart" component={Cart} />
//       </div>
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(App);
