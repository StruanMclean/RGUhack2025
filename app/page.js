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
import useAuth, { signInWithGoogle } from '../auth/auth';
import { GoogleButton } from '@/components/GoogleButton';
import { useState } from 'react';

export default function Home() {
  const auth = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Paper className={classes.formcontent}>
          <Title order={2} className={classes.title} ta="center" mt="md">
            Welcome to RGUHack2025
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
          <Button fullWidth mt="xl" size="md" onClick={() => auth.signInWithEmailAndPassword(email, password)}>
            Login
          </Button>

          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
          </Text>
        </Paper>
      </Paper>
    </div>
  );
}