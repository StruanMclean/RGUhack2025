import React from 'react';
import classes from './BirdCardDetail.module.css';  // Optional, for styling the card
import { Card, Center, Flex } from '@mantine/core';

const BirdCardDetail = ({ image, title, fact, date, isHidden, setIsHidden, xcoordinate, yicoordinate }) => {
  return (
    <div className={`${classes.birdcardcontainer} ${isHidden ? '' : classes.visible}`}>
      <Card className={classes.birdcarddetail}>
        <div>
          <img src={image} alt={title} className={classes.cardimage} />
          <h4 className={classes.cardtitle}>{title}</h4>
          <p className={classes.cardfact}>{fact}</p>
          <p className={classes.carddate}>{date}</p>

          <Flex className={classes.cardlocation}>
            <p className={classes.cardlocation}>{xcoordinate}</p>
            <p className={classes.cardlocation}>{yicoordinate}</p>
          </Flex>
          
          {/* Button to close the overlay */}
          <Center>
          <button className={classes.button}  onClick={() => setIsHidden(true)}>Close</button>
          </Center>
        </div>
      </Card>
    </div>
  );
};

export default BirdCardDetail;
