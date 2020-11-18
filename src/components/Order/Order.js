import React from 'react';

import classes from './Order.module.css';

export const Order = (props) => (
  <div className={classes.Order}>
    <p>Indredients: Salad (1)</p>
    <p>
      Price: <strong>USD 10</strong>
    </p>
  </div>
);

export default Order;
