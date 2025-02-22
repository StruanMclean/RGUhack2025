'use client'
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useEffect } from "react"

export default function useAuth() {
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

  const onAuthStateChanged = (cb) => {
      return _onAuthStateChanged(auth, cb);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    signInWithGoogle
  };
}