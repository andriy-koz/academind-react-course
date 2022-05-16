import React from 'react';
import classes from './Checkout.module.css';

const Checkout = () => {
  return (
    <from>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <intut type='text' id='name' />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <intut type='text' id='street' />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <intut type='text' id='postal' />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <intut type='text' id='city' />
      </div>
      <button>Confirm</button>
    </from>
  );
};

export default Checkout;
