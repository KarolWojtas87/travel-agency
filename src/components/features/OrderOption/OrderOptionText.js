import React from 'react';
import propTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionText = ({ setOptionValue, currentValue }) => (


  <div className={styles.component}>
    <input className={styles.input}

      type="text"
      placeholder={currentValue}
      onChange={(event) => setOptionValue(event.currentTarget.value)}
    />

  </div>

);

OrderOptionText.propTypes = {
  currentValue: propTypes.string,
  setOptionValue: propTypes.func,
};

export default OrderOptionText;
