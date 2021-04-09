import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { useState } from 'react';
import propTypes from 'prop-types';
// import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';


const OrderOptionDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

OrderOptionDate.propTypes = {
  date: propTypes.any,
};

export default OrderOptionDate;
