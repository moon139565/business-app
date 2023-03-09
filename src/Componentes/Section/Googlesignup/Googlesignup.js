import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import "./Googlesignup.css";

const Googlesignup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const messageDiv = document.getElementById("message-div");
    if (error) {
        messageDiv.innerHTML = error;
      }
      if (loading) {
        messageDiv.innerHTML = "Loading...";
      }
      if (user) {
        messageDiv.innerHTML = "User Registered";
      }

    return (
        <section className='google-area'>
            <div>
                <Button className='google-btn w-100 mb-5' onClick={() => signInWithGoogle()} type="submit">Continue With Google</Button>
                <div id="message-div"></div>
            </div>
        </section>
    );
};

export default Googlesignup;