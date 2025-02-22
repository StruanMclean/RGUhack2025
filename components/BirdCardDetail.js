import React from 'react';
import classes from './BirdCardDetail.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';

const BirdCardDetail = ({ image, title, fact, date, callback }) => {
  return (
    <div className={classes.birdcardcontainer}>
      <Card className={classes.birdcarddetail}>
        <div>
          <img src={image} alt={title} className={classes.cardimage} />
          <h4 className={classes.cardtitle}>{title}</h4>
          <p className={classes.cardfact}>{fact}</p>
          <p className={classes.carddate}>{date}</p>
          
          {/* Button to close the overlay */}
          <button onClick={() => callback(false)}>Close</button>
        </div>
      </Card>
    </div>
  );
};

export default BirdCardDetail;
