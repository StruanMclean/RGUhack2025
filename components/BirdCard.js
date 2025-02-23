'use client'
import { useState } from 'react';
import classes from './BirdCard.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';
import BirdCardDetail from './BirdCardDetail';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const BirdCard = ({ image, title, fact, date }) => {
  const [isHidden, setIsHidden] = useState(true);  // Initially hidden

  // Toggle visibility
  const toggleOverlay = () => setIsHidden(!isHidden);

  return (
    <Card className={classes.birdcard} onClick={toggleOverlay}>
      <div>
        <img src={image} alt={title} className={classes.cardimage} />
        <h4 className={classes.cardtitle}>{title}</h4>
        <p className={classes.cardfact}>{fact}</p>
        <p className={classes.carddate}>{date}</p>
      </div>

      {/* Pass both the isHidden state and setIsHidden function */}
      <BirdCardDetail
        title={title}
        fact={fact}
        date={date}
        image={image}
        isHidden={isHidden}  // Pass the state to control visibility
        setIsHidden={setIsHidden} // Function to toggle visibility
      />
    </Card>
  );
};

export default BirdCard;
