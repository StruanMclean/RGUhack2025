// Card.js
import React from 'react';
import classes from './BirdCard.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';

const BirdCardDetail = ({ image, title, fact, date }) => {
  return (
    <Card className={classes.birdcard}>
      <div>
        <img src={image} alt={title} className={classes.cardimage} />
        <h4 className={classes.cardtitle}>{title}</h4>
        <p className={classes.cardfact}>{fact}</p>
        <p className={classes.carddate}>{date}</p>
      </div>
    </Card>
  );
};

export default BirdCardDetail;
