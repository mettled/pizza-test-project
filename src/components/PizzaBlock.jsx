import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import Button from './Button';

const AVALIBLE_TYPES = ['тонкое', 'традиционное'];
const AVALIBLE_SIZES = [26, 30, 40];

const PizzaBlock = React.memo(function PizzaBlock({
  id,
  imageUrl,
  name,
  price,
  sizes,
  types,
  onAddPizzaToCart,
  countPizzaInCart = 0,
}) {
  const [selectedSize, selectSize] = React.useState(sizes[0]);
  const [selectedType, selectType] = React.useState(types[0]);

  const onSelectType = (index) => {
    selectType(index);
  };
  const onSelectSize = (index) => {
    selectSize(index);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={name} />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {AVALIBLE_TYPES.map((type) => {
            return (
              <li
                className={cl({
                  active: selectedType === type,
                  disable: !types.includes(type),
                })}
                onClick={() => onSelectType(type)}
                key={name + '_' + type}>
                {type}
              </li>
            );
          })}
        </ul>
        <ul>
          {AVALIBLE_SIZES.map((size) => {
            return (
              <li
                className={cl({
                  active: selectedSize === size,
                  disable: !sizes.includes(size),
                })}
                onClick={() => onSelectSize(size)}
                key={name + '_' + size}>
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} ₽</div>
        <Button
          onClick={() => onAddPizzaToCart({ id, price, size: selectedSize, type: selectedType })}
          className="button--add"
          outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{countPizzaInCart}</i>
        </Button>
      </div>
    </div>
  );
});

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

PizzaBlock.default = {
  imageUrl: '',
  name: '',
  price: 0,
  sizes: AVALIBLE_SIZES[0],
  types: AVALIBLE_TYPES[0],
};

export default PizzaBlock;
