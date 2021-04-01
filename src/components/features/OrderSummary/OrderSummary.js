import React from 'react';

import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';


const OrderSummary = props => {
  const orderCalc = calculateTotal(formatPrice(props.tripCost), props.options);
  return (< h2 className={styles.component}> Total: <strong>$ {orderCalc}</strong></h2 >);
};

OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  orderCalc: PropTypes.node,
  // pricing: PropTypes.array,
  options: PropTypes.object,
};

export default OrderSummary;
