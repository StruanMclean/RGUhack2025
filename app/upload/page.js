'use client';

import { useRef, useState } from 'react';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { Button, Card, Group, Text, useMantineTheme, Center, Title, TextInput, Container } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import classes from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
import { auth, firestore } from '../../auth/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { UploadButton, UploadDropzone } from '../../components/uploadthing';
import { getIdToken } from "firebase/auth"

export default function Upload() {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  const [fileURL, setFileURL] = useState(null)
  const [fileName, setFileName] = useState("")

  const [loading, setLoading] = useState(false)

  const submit = () => {
    if (fileURL !== null) {
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
              toast.success("Upload successful:", {
                position: "top-center",
              });
              setLoading(false)
              window.location.replace("/dashboard")
            } catch (error) {
              setLoading(false)
              toast.error("Error uploading data:", {
                position: "top-center",
              });
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
    } else {
      toast.error("Press upload to upload your image", {
        position: "top-center",
      });
    }
  };
  

  return (
    <>
      <Toaster />
    <div className={classes.Uploading}>
      <Center>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setFileURL(res[0].ufsUrl)
            toast.success("Upload Completed", {
              position: "top-center",
            });
          }}
          onUploadError={(error) => {
            toast.error("Error with your upload", {
              position: "top-center",
            });
          }}
        />
      </Center>
      
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
      </div>
      <Header />
      <Navbar />
      <Footer />
    </>
  );
}