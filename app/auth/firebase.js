import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../config/firebaseConfig';

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);