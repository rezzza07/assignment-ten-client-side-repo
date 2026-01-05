import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  const updateUser = async (name, photo) => {
  if (!auth.currentUser) return Promise.reject("No user is logged in");

  try {
    // 1. Update Firebase Backend
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });

    // 2. IMPORTANT: Manually update the local 'user' state 
    // This forces React to notice the change without a reload
    setUser({
      ...auth.currentUser,
      displayName: name,
      photoURL: photo
    });
    
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateUser, 
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
