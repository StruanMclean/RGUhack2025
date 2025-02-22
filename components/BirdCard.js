'use client'
import { useState } from 'react';
import classes from './BirdCard.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';
import BirdCardDetail from './BirdCardDetail';

const BirdCard = ({ image, title, fact, date }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <Card className={classes.birdcard} onClick={() => setShowOverlay(true)}>
      <div>
        <img src={image} alt={title} className={classes.cardimage} />
        <h4 className={classes.cardtitle}>{title}</h4>
        <p className={classes.cardfact}>{fact}</p>
        <p className={classes.carddate}>{date}</p>
      </div>

      {
        showOverlay ?
          <BirdCardDetail />
        :
          <></>
      }
    </Card>
  );
};

export default BirdCard;
