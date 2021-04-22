import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';
import propTypes from 'prop-types';


const OrderOptionIcons = ({ values, setOptionValue, currentValue, required }) => (

  <div className={styles.icon}>


    {required ? false : (
      <div className={styles.icon} onClick={() => setOptionValue('')} value=''>
        <Icon name={'times-circle'} > none </Icon>
      </div>
    )}
    {values.map(value => (
      <section
        className={currentValue == value.id ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        {/* {console.log(value.id)} */}
        <Icon name={value.icon}></Icon>
        {value.name} ({formatPrice(value.price)})
      </section>
    ))}

  </div >

);


OrderOptionIcons.propTypes = {
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
  price: propTypes.string,
  values: propTypes.array,
  required: propTypes.bool,
  id: propTypes.string,
};


export default OrderOptionIcons;
