import '../App.css'
import { useEffect } from 'react';
import { gapi } from "gapi-script";
import {  useNavigate } from "react-router-dom"
import googleImg from '../asserts/google.png';

export default function GoogleBtn({setError}){

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
     const navigate = useNavigate();

    useEffect(() => {
        const start = () => {
          gapi.auth2.init({
            client_id: CLIENT_ID,
            scope: "",
          });
        };
    
        gapi.load("client:auth2", start);
      }, []);

      const handleLogin = async () => {
        try {
          const googleAuth = gapi.auth2.getAuthInstance();
          const googleUser = await googleAuth.signIn();
          const id_token = googleUser.getAuthResponse().id_token;
          navigate('/Welcome');
        }catch(err){
            setError('Error logging with google');
        }
      };


    return(
        <div className='google-container'  onClick={handleLogin}>
        <span><img className="pb-1" src={googleImg} alt="google" /> continue with google</span>
      </div>
    )
}