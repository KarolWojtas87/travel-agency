import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import propTypes from 'prop-types';



const OrderForm = (props) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options} />
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: propTypes.node,
  options: propTypes.object,
};

export default OrderForm;
