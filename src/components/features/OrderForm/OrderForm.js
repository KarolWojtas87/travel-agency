import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import setOrderOption from '../../../redux/orderRedux';




const OrderForm = (props) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        < Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={option.id} setOrderOption={setOrderOption} />
        </Col>
      ))}
      < Col xs={12} >
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  </Grid >
);

OrderForm.propTypes = {
  tripCost: propTypes.node,
  options: propTypes.object,
  setOrderOption: propTypes.func,
};

export default OrderForm;
