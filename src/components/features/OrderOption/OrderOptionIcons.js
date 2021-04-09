import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';
import propTypes from 'prop-types';


const OrderOptionIcons = ({ values, setOptionValue, currentValue, required }) => (

  <div className={styles.icon}>
    {console.log(values, setOptionValue, currentValue)}

    {required ? false : ''(
      <div className={styles.icon} onClick={() => setOptionValue('')} value=''>
        <Icon name={'times-circle'} /> none
      </div>
    )}

    {values.map(value => (
      <div
        // value={currentValue}
        className={currentValue == value.id ? styles.iconActive : styles.icon}
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
  required: propTypes.node,
};


export default OrderOptionIcons;
