'use client'
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut, onAuthStateChanged, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

export default function useAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      setLoading(false);
      console.error("Error deleting account:", error);
      toast.error("Error deleting account", {
        position: "top-center",
      });
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      setLoading(true);
      await _signInWithEmailAndPassword(auth, email, password);      
    } catch (error) {
      setLoading(false);
      console.error("Error deleting account:", error);
      toast.error("Error logging in invalid email or password. Please create an account or try again.", {
        position: "top-center",
      });
    }
  }

  const createUserWithEmailAndPassword = async (email, password) => {
    try {
      setLoading(true);
      await _createUserWithEmailAndPassword(auth, email, password);      
    } catch (error) {
      setLoading(false);
      console.error("Error deleting account:", error);
      toast.error("There was an error try again", {
        position: "top-center",
      });
    }
  }

  const signOut = () =>
    _signOut(auth).then(clear);

  const deleteAccount = async (password) => {
    const user = auth.currentUser;

    setLoading(true);

    if (user) {
      try {
        const credential = EmailAuthProvider.credential(user.email, password); 
        await reauthenticateWithCredential(user, credential);

        await deleteUser(user);
        toast.error("Account deleted successfully", {
          position: "top-center",
          icon: "error"
        });

        await signOut();
        Router.replace("/");
      } catch (error) {
        setLoading(false);
        console.error("Error deleting account:", error);
        toast.error("Error deleting account", {
          position: "top-center",
        });
      }
    } else {
      setLoading(false);
      toast.error("No user is currently logged in.", {
        position: "top-center",
      });
    }
  };

  // This effect listens to authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setLoading(false);

        if (window.location.pathname === "/") {
          window.location.replace("/dashboard");
        }
      } else {
        setAuthUser(null);
        setLoading(false);

        if (window.location.pathname !== "/") {
          window.location.replace("/");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    deleteAccount,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithGoogle
  };
}
