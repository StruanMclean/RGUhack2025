// Card.js
import React from 'react';
import classes from './BirdCard.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';

const BirdCard = ({ image, title }) => {
  return (
    <Card className={classes.birdcard}>
      <div>
        <img src={image} alt={title} className="card-image" />
        <h3 className={classes}>{title}</h3>
      </div>
    </Card>
  );
};

export default BirdCard;
