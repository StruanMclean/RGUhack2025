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
import { UploadButton } from '../../components/uploadthing';
import { getIdToken } from "firebase/auth"

export default function Upload() {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  const [fileURL, setFileURL] = useState("")
  const [fileName, setFileName] = useState("")

  const [loading, setLoading] = useState(false)

  const submit = () => {
    if ("geolocation" in navigator) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const docRef = await addDoc(collection(firestore, auth.currentUser.uid), {
              url: fileURL,
              fileName: fileName,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            console.log("Upload successful:", docRef);
            setLoading(false)
            window.location.replace("/dashboard")
          } catch (error) {
            setLoading(false)
            console.error("Error uploading data:", error);
            alert("Error during upload");
          }
        },
        (error) => {
          setLoading(false)
          console.error("Geolocation error:", error);
          toast.error("Could not access your location", {
            position: "top-center",
          });
        }
      );
    } else {
      toast.error("Could not access your location to add to the map", {
        position: "top-center",
      });
    }
  };
  

  return (
    <>
      <Toaster />
      <div className={classes.wrapper}>
        <Center mt={100}>
          <Title>
            Upload Photo
          </Title>              
        </Center>

        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            setFileURL(res[0].ufsUrl)
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      <Container maw={500}>
        <TextInput 
          value={fileName}
          onChange={(event) => setFileName(event.currentTarget.value)}
          label="File Name" 
          placeholder="File Name" 
          size="md" 
        />

        <Button loading={loading} size="md" fullWidth mt={25} onClick={() => submit()}>
          Submit
        </Button>
      </Container>

      <Navbar />
      <Footer />
    </>
  );
}