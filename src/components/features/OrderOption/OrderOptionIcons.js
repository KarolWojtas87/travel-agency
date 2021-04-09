import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';
import propTypes from 'prop-types';


const OrderOptionIcons = ({ values, setOptionValue, currentValue }) => (

  <div className={styles.icon}>
    {console.log(values, setOptionValue, currentValue)}
    {values.map(value => (
      <div
        className={styles.icon && currentValue == value.id ? styles.iconActive : ''}
        key={value.id}
        onClick={(value) => setOptionValue(value.id)}
      >
        <Icon name={value.icon}></Icon>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}

  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
  price: propTypes.string,
  values: propTypes.any,
};


export default OrderOptionIcons;
