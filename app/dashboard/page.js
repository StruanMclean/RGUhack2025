'use client'
import {
    Anchor,
    Button,
    Checkbox,
    Paper,
    PasswordInput,
    Stack,
    Text,
    TextInput,
    Title,
    Flex,
    Center,
  } from '@mantine/core';
  import classes from './page.module.css';
import BirdCard from '../../components/BirdCard';
import Navbar from '../../components/Navbar';

import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
  
  export default function Dashboard() {
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    return (
      <div  className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <h1 order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Dashboard
          </h1>

          <Center>
          <h2 className = {classes.subtitle}>Recents</h2>
          </Center>

          <Center>
            <Flex>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 1"} fact={"Fact 1"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 2"} fact={"Fact 2"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 3"} fact={"Fact 3"} date={"22/02/2025"}></BirdCard>
            </Flex>
          </Center>

          <Center>
            <h2 className = {classes.subtitle}>World Map</h2>
          </Center>

          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{width: 600, height: 400}}
            initialViewState={{ latitude: 57.1499, longitude: -2.0938, zoom: 10 }}
            maxZoom={20}
            minZoom={3}
          ></Map>

        </Paper>

        <Navbar />
      </div>
    );
  }