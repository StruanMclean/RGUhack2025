'use client'
import { Accordion, Container, Title, Paper, Center, Button, Divider, PasswordInput } from '@mantine/core';
import classes from './page.module.css';
import useAuth from '../../auth/auth';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

let placeholder = ""

export default function Settings() {
  const auth = useAuth()

  const [password, setPassword] = useState("")

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title} style={{marginTop: 100}}>
        Settings
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Can I create more that one account?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>The Danger Zone</Accordion.Control>
          <Accordion.Panel>
            <Title size="xl" style={{marginBottom: 15}}>Delete Account</Title>
            <PasswordInput 
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              label="Enter your password to delete account" 
              placeholder="Your Password"
              mt="md" 
              size="md" 
              style={{marginBottom: 15}}
            />
            <Button loading={auth.loading} onClick={() => auth.deleteAccount(password)}>Delete Account</Button>
            
            <Divider style={{marginTop: 15, marginBottom: 15}} />

            <Title size="xl" style={{marginBottom: 15}}>Sign Out Your Account</Title>
            <Button loading={auth.loading} onClick={() => auth.signOut()}>Sign Out</Button>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      
      <Navbar />
    </Container>
  );
}