'use client'
import {
  Grid,
  Paper,
  Flex,
  Center,
  Title,
  Button,
  Skeleton,
  Modal
  } from '@mantine/core';
  import classes from './page.module.css';
import BirdCard from '../../components/BirdCard';
import Navbar from '../../components/Navbar';


import Map, {Source, Layer} from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { auth, firestore } from '../../auth/firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore"
import { useDisclosure } from '@mantine/hooks';
import toast, { Toaster } from 'react-hot-toast';
import predict from '../../lib/predict';

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

  const [opened, { open, close }] = useDisclosure(false);

  const [items, setItems] = useState([]);
  const [geojson, setgeojson] = useState([]);
  const [userID, setUserID] = useState(null)
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    const itemRef = doc(firestore, userID, id)
    try {
      await deleteDoc(itemRef)
      fetchItems(userID)
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

      setLoading(false)

      console.log(querySnapshot);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    setLoading(true)
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
      <Toaster />
      <Modal opened={opened} onClose={close} title="Prediction">

      </Modal>

      <Grid>
        <Grid.Col span={6}>
          <Paper className={classes.form} radius={0} p={30}>
            <div style={{ overflowY: "auto", maxHeight: "100vh", padding: "1rem" }}>
              <Flex justify="space-evenly" wrap="wrap" maw="50vw">
                {
                  loading ? 
                    <>
                    <Skeleton w={350} h={400}></Skeleton>
                    <Skeleton w={350} h={400}></Skeleton>
                    <Skeleton w={350} h={400} mt={25}></Skeleton>
                    <Skeleton w={350} h={400} mt={25}></Skeleton>
                    </>
                  :
                    items.length > 0 ?
                      items.map((item) => (
                        <li key={item.id} className="border-t-2 p-2" style={{ listStyle: "none", gap: 10}}>
                          <BirdCard
                            image={item.url}
                            title={item.fileName}
                            fact={"Fact 3"}
                            date={"22/02/2025"}
                            long={item.longitude}
                            lat={item.latitude}
                            callback={() => handleDelete(item.id)}
                            open={() => {
                              // toast.loading("Predicting Image", {
                              //   position: "top-center",
                              // });

                              // open()
                              predict(item.url)
                            }}
                          />
                        </li>    
                      ))         
                    :
                      <Paper mt={"35vh"}>
                        <Title>Click + Bellow To Add Data!</Title>

                        <Center mt={50}>
                          <a href="/upload">
                            <li style={{
                              backgroundColor: 'white',
                              borderRadius: '50%',
                              width: '70px',
                              height: '70px',
                              display: 'flex', 
                              justifyContent: 'center', 
                              alignItems: 'center',
                              outline: '10px solid white',
                              backgroundColor: 'Black',
                              color: 'white',
                              textDecoration: 'none',
                              fontSize: '19px',
                              marginLeft: -10,
                            }}>
                              <span>+</span>
                            </li>                              
                          </a>
                        </Center>
                      </Paper>                     
                }
              </Flex>
            </div>

            <Navbar />
          </Paper>
        </Grid.Col>
        <Grid.Col span={4}>
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            style={{width: "50vw", height: "100vh", borderTopLeftRadius: 25, borderBottomLeftRadius: 25}}
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