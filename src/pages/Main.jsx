import React from 'react';
import { Categories, SortingPizza, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas, sortPizzasBy, sortPizzasCategory } from '../redux/actions/pizzasAction';
import { addToCart } from '../redux/actions/cartAction';
import PreLoaderPizza from '../components/PreLoaderPizza';

const Main = React.memo(function Main() {
  const dispatch = useDispatch();
  const {
    items = [],
    selectedCategory,
    selectedSortBy,
    pizzasInCart,
  } = useSelector((state) => ({
    items: state.pizzas?.items,
    selectedCategory: state.pizzas?.category,
    selectedSortBy: state.pizzas?.sortingBy,
    pizzasInCart: state.cart.pizzasCount,
  }));

  React.useEffect(() => {
    dispatch(fetchPizzas(selectedCategory, selectedSortBy));
  }, [dispatch, selectedCategory, selectedSortBy]);

  const onSelectCategory = React.useCallback(
    (category) => {
      dispatch(sortPizzasCategory(category));
    },
    [dispatch],
  );

  const onSelectSort = React.useCallback(
    (sortBy) => {
      dispatch(sortPizzasBy(sortBy));
    },
    [dispatch],
  );

  const onAddPizzaToCart = React.useCallback(
    (prop) => {
      dispatch(addToCart(prop));
    },
    [dispatch],
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />
        <SortingPizza selectedSortBy={selectedSortBy} onSelectSort={onSelectSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.length === 0 ? (
          <>
            <PreLoaderPizza />
            <PreLoaderPizza />
            <PreLoaderPizza />
            <PreLoaderPizza />
          </>
        ) : (
          items.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
              countPizzaInCart={pizzasInCart[pizza.id]}
              onAddPizzaToCart={onAddPizzaToCart}
              {...pizza}
            />
          ))
        )}
      </div>
    </div>
  );
});

export default Main;
