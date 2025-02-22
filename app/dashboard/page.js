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
  
  export default function Dashboard() {
    return (
      <div  className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Dashboard
          </Title>

          <Center>
          <h3>Recents</h3>
          </Center>

          <Center>
            <Flex>
              <BirdCard image={"components\wood-flight-bird-326900.jpg"} title={"Test"}></BirdCard>
            </Flex>
          </Center>

          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
          </Text>
        </Paper>
      </div>
    );
  }