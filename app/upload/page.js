'use client';

import { useState } from 'react';
import { Checkbox, Text, UnstyledButton } from '@mantine/core';
import classes from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Upload() {
  const [value, onChange] = useState(true);

  return (
    <div>
    
    <UnstyledButton onClick={() => onChange(!value)} className={classes.button}>
      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
        aria-hidden
      />

      <div  className={classes.abc}>
        <Text fw={500} mb={7} lh={1}>
          @mantine/core
        </Text>
        <Text fz="sm" c="dimmed">
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </div>
    </UnstyledButton>
    <Footer/>
    <Navbar />
    
    </div>
  );
}