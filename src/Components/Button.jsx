
import React from 'react';
import { signInWithGoogle } from '../firebase'; 

export const Button = () => {
  const handleSignIn = async () => {
    try {
      await signInWithGoogle(); 
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <button onClick={handleSignIn} className="nav-link" style={{ color: 'black', backgroundColor: 'white', fontSize: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '2px solid black', padding: '10px', borderRadius: '5px', margin: '15px' }}>
      Sign In with Google
    </button>
  );
};







