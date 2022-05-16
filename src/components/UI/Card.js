import React from 'react';
import PropTypes from 'prop-types';
import classes from './Card.module.css';

const Card = props => {
  return <div className={classes.card}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Card;
