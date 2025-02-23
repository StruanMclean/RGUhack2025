'use client';

import { useRef, useState } from 'react';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { Button, Card, Group, Text, useMantineTheme, Center, Title, TextInput, Container } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import classes from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
import { auth, firestore } from '../../auth/firebase';
import { collection, addDoc } from "firebase/firestore"; 

export default function Upload() {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  const [fileName, setFileName] = useState("")

  const submit = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const docRef = await addDoc(collection(firestore, "Uploads"), {
              fileName: fileName,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            console.log("Upload successful:", docRef);
          } catch (error) {
            console.error("Error uploading data:", error);
            alert("Error during upload");
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.error("Could not access your location", {
            position: "top-center",
          });
        }
      );
    } else {
      alert("Error: Geolocation not available");
      toast.error("Could not access your location to add to the map", {
        position: "top-center",
      });
    }
  };
  

  return (
    <>
      <Toaster />
      <div className={classes.wrapper}>
        <Dropzone
          openRef={openRef}
          onDrop={() => {}}
          className={classes.dropzone}
          radius="md"
          accept={[MIME_TYPES.pdf]}
          maxSize={30 * 1024 ** 2}
        >
          <Center mt={100}>
            <Title>
              Upload Bird
            </Title>              
          </Center>

          <div style={{
            marginTop: "3cm",
            width: 500,
            padding: 50,
            borderRadius: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            webkitBackdropFilter: "blur(5px)",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}>
            <Group justify="center">
              <Dropzone.Accept>
                <IconDownload size={50} color={theme.colors.blue[6]} stroke={1.5} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload size={50} stroke={1.5} />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload resume</Dropzone.Idle>
            </Text>
            <Text ta="center" fz="sm" mt="xs">
              Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
              are less than 30mb in size.
            </Text>

            <Button className={classes.control} size="md" radius="xl" w={400} mt={50} onClick={() => openRef.current?.()}>
              Select files
            </Button>
          </div>
        </Dropzone>
      </div>

      <Container maw={500}>
        <TextInput 
          value={fileName}
          onChange={(event) => setFileName(event.currentTarget.value)}
          label="File Name" 
          placeholder="File Name" 
          size="md" 
        />

        <Button size="md" fullWidth mt={25} onClick={() => submit()}>
          Submit
        </Button>
      </Container>

      <Navbar />
      <Footer />
    </>
  );
}