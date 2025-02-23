'use client'
import {
  Grid,
  Paper,
  Flex,
  Center,
  Title,
  Button,
  } from '@mantine/core';
  import classes from './page.module.css';
import BirdCard from '../../components/BirdCard';
import Navbar from '../../components/Navbar';

import Map, {Source, Layer} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { auth, firestore } from '../../auth/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf'
  }
};
  
export default function Dashboard() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const [items, setItems] = useState([]);
  const [geojson, setgeojson] = useState([]);
  const [userID, setUserID] = useState(null)

  const handleDelete = async (id) => {
    alert(id)
    const itemRef = doc(firestore, userID, id)
    try {
      await deleteDoc(itemRef)
      fetchItems()
    } catch (error) {
      console.error("Error deleting document: ", error)
      alert("Error deleting item")
    }
  }

  const fetchItems = async (uid) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, uid));
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setgeojson(
        querySnapshot.docs.map((doc) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [doc.data().longitude, doc.data().latitude]
          },
          properties: {title: 'data'}
        }))
      );

      console.log(querySnapshot);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserID(user.uid)
        fetchItems(user.uid)
      } else {
        setUserID(null);
      }
    })
  }, []);

  return (
    <div  className={classes.wrapper}>
      <Grid>
        <Grid.Col span={6}>
          <Paper className={classes.form} radius={0} p={30}>
            <Center>
              <Title>
                Welcome Back
              </Title>              
            </Center>

            <Center>
            <h2 className = {classes.subtitle}>Recents</h2>
            </Center>

            <Center>
              <Flex>
                {items.map((item) => (
                  <li key={item.id} className="border-t-2 p-2">
                    <BirdCard image={"wood-flight-bird-326900.jpg"} title={item.fileName} fact={"Fact 3"} date={"22/02/2025"}></BirdCard>
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                  </li>
                ))}
              </Flex>
            </Center>

            <Navbar />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{width: "50vw", height: "100vh"}}
            initialViewState={{ latitude: 57.1499, longitude: -2.0938, zoom: 10 }}
            maxZoom={20}
            minZoom={3}
          >
            <Source id="my-data" type="geojson" data={
              {
                type: 'FeatureCollection',
                features: geojson
              }
            }>
              <Layer {...layerStyle} />
            </Source>
          </Map>
        </Grid.Col>
      </Grid>
    </div>
  );
}