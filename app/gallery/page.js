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
import Footer from '../../components/Footer';
import Header from '../../components/header';

  
  export default function Gallery() {
    return (
      
      <div  className={classes.wrapper}>
        <Header/>
        <Paper className={classes.form} radius={0} p={30}>
          <h1 order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Gallery
          </h1>
          <Center>
            <Flex className={classes.flex}>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 1"} fact={"Fact 1"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 2"} fact={"Fact 2"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 3"} fact={"Fact 3"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 1"} fact={"Fact 1"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 2"} fact={"Fact 2"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 3"} fact={"Fact 3"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 1"} fact={"Fact 1"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 2"} fact={"Fact 2"} date={"22/02/2025"}></BirdCard>
              <BirdCard image={"wood-flight-bird-326900.jpg"} title={"Bird 3"} fact={"Fact 3"} date={"22/02/2025"}></BirdCard>
            </Flex>
          </Center>
        </Paper>

        <Navbar />
        <Footer/>
      </div>
    );
  }