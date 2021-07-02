import React from 'react';
import cl from 'classnames';

const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = React.memo(function Categories({ onSelectCategory, selectedCategory }) {
  return (
    <div className="categories">
      <ul>
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              onClick={() => onSelectCategory(index)}
              className={cl({ active: selectedCategory === index }) || null}
              key={item + '_' + index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
