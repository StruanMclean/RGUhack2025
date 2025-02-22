'use client'
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword as _createUserWithEmailAndPassword, signInWithEmailAndPassword as _signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth";
import { useEffect, useState } from "react"

export default function useAuth() {
  const [authUser, setAuthUser] = useState()
  const [loading, setLoading] = useState(true)

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      alert(error);
    }
  };

  const signInWithEmailAndPassword = (email, password) =>
    _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    _createUserWithEmailAndPassword(auth, email, password);

  const signOut = () =>
    _signOut(auth).then(clear);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithGoogle
  };
}