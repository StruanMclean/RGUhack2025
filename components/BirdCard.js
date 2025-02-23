'use client'
import { useState } from 'react';
import classes from './BirdCard.module.css';  // Optional, for styling the card
import { Card } from '@mantine/core';
import BirdCardDetail from './BirdCardDetail';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const BirdCard = ({ image, title, fact, date }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Card className={classes.birdcard} onClick={open}>
      <div>
        <img src={image} alt={title} className={classes.cardimage} />
        <h4 className={classes.cardtitle}>{title}</h4>
        <p className={classes.cardfact}>{fact}</p>
        <p className={classes.carddate}>{date}</p>
      </div>

      <Modal opened={opened} onClose={close} title="Authentication">
        <BirdCardDetail />
      </Modal>
    </Card>
  );
};

export default BirdCard;
