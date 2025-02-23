'use client'
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Image
} from '@mantine/core';
import classes from './page.module.css';
import useAuth from '../auth/auth';
import { GoogleButton } from '../components/GoogleButton';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '../components/Header';

export default function Home() {
  const auth = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [login, setLogin] = useState(true)
  
  return (
    <div className={classes.wrapper}>
      <Header/>
      <Toaster />
      <Paper className={classes.form} radius={0} p={30}>
        <Paper className={classes.formcontent}>
          <Title order={2} className={classes.title} ta="center" mt="md">
            Welcome to Phoenix
          </Title>

          <Text size="md" mb={50} mt="sm" ta="center">Welcome to our project.</Text>

          <GoogleButton onClick={() => auth.signInWithGoogle()} >SignIn with Google</GoogleButton>

          <Divider style={{margin: 20}} />

          <TextInput 
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            label="Email address" 
            placeholder="YourEmail@gmail.com" 
            size="md" 
          />
          <PasswordInput 
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            label="Password" 
            placeholder="Your Password"
            mt="md" 
            size="md" 
          />

          {
            login ?
              <>
                <Button loading={auth.loading} fullWidth mt="xl" size="md" onClick={() => auth.signInWithEmailAndPassword(email, password)}>
                  Login
                </Button>

                <Text onClick={() => setLogin(false)} ta="center" mt="md">
                  Don&apos;t have an account?{' '}
                </Text>
              </>
            :
              <>
                <Button loading={auth.loading} fullWidth mt="xl" size="md" onClick={() => auth.createUserWithEmailAndPassword(email, password)}>
                  Create Account
                </Button>

                <Text clickable="true" onClick={() => setLogin(true)} ta="center" mt="md">
                  Have an account?{' '}
                </Text>              
              </>

          }
        </Paper>
      </Paper>
      
    </div>
  );
}