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
} from '@mantine/core';
import classes from './page.module.css';
import { signInWithGoogle } from '../auth/auth';
import { GoogleButton } from '@/components/GoogleButton';

export default function Home() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md">
          Welcome to RGUHack2025
        </Title>

        <Text size="md" mb={50} mt="sm" ta="center">Welcome to our project.</Text>

        <GoogleButton onClick={() => signInWithGoogle()} >SignIn with Google</GoogleButton>

        <Divider style={{margin: 20}} />

        <TextInput label="Email address" placeholder="YourEmail@gmail.com" size="md" />
        <PasswordInput label="Password" placeholder="Your Password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
        </Text>
      </Paper>
    </div>
  );
}