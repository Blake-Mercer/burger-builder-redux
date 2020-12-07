import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = [];

  for (let key in props.ingredients) {
    for (let i = 0; i < props.ingredients[key]; i++) {
      transformedIngredients.push(
        <BurgerIngredient key={key + i} type={key} />
      );
    }
  }

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Blake's Burger Maker!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
