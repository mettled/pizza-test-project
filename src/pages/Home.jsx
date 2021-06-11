import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  console.log('items', items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* { category, id, imageUrl, name, price, rating, sizes, types } */}
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
