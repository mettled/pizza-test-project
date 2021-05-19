import React, { useState } from 'react';
import cl from 'classnames';

function Categories({ items, onClickHandler }) {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="categories">
      <ul>
        {items.length > 0 &&
          items.map((item, index) => (
            <li
              onClick={() => setActiveItem(index)}
              className={cl({ active: activeItem == index }) || null}
              key={item + '_' + index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
