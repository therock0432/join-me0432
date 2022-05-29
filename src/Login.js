import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = (e) => {
       auth.signInWithPopup(provider)
    }
    return (
        <div className = "login">
            <div className = "login__logo">
                <img 
                    src = "https://content.nexus.support.com/5b557b9559124044bb566bfc31a09c80/8e2c9590767111ea8cb4a19e5d16052b.svg"
                    alt = "This is login LOGO "
                />
               
                
            </div>
            <Button 
                onClick = {signIn}
                className = "login__button">Sign In</Button>

<h2>Design and Developed with 💕 by NARCOS</h2>
        </div>
    )
}

export default Login
