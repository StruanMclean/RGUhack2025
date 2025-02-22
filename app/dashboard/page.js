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
  
  export default function Dashboard() {
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

          <Center>
            <Flex>
              
            </Flex>
          </Center>



        </Paper>

        <Navbar />
      </div>
    );
  }