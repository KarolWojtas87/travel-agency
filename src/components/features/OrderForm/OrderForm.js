import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';


const sendOrder = (options, tripCost, tripName, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (options.name === '' && options.contact === '') {
    alert('Fill your name and contact info!');
  }
  else {
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }

};


const OrderForm = ({ tripCost, options, setOrderOption, tripName, tripId, tripCountry }) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        < Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      < Col xs={12} >
        <OrderSummary tripCost={tripCost} options={options} />
      </Col>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCountry)}>Order now!</Button>
    </Row>
  </Grid >
);

OrderForm.propTypes = {
  tripCost: propTypes.node,
  options: propTypes.object,
  setOrderOption: propTypes.func,
  tripName: propTypes.string,
  tripId: propTypes.string,
  tripCountry: propTypes.string,
};

export default OrderForm;
