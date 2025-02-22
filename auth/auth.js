'use client'
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut, onAuthStateChanged, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

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
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      alert(error);
    }
  };

  const signInWithEmailAndPassword = (email, password) => {
    setLoading(true);
    _signInWithEmailAndPassword(auth, email, password);
  }

  const createUserWithEmailAndPassword = (email, password) => {
    setLoading(true);
    _createUserWithEmailAndPassword(auth, email, password);
  }

  const signOut = () =>
    _signOut(auth).then(clear);

  const deleteAccount = async (password) => {
    const user = auth.currentUser;

    if (user) {
      try {
        const credential = EmailAuthProvider.credential(user.email, password); 
        await reauthenticateWithCredential(user, credential);

        await deleteUser(user);
        alert("Account deleted successfully");

        await signOut();
        Router.replace("/");
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Error deleting account: " + error.message);
      }
    } else {
      alert("No user is currently logged in.");
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
