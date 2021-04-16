import React from 'react';
import propTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = (props, setOptionValue, price, currentValue) => (

  <div className={styles.number}>

    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={props.limits.min}
      max={props.limits.max}

    />

    {formatPrice(price)}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: propTypes.number,
  setOptionValue: propTypes.func,
  price: propTypes.string,
  limits: propTypes.object,
};

export default OrderOptionNumber;



