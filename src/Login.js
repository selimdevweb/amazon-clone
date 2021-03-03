import React, {useState} from 'react'

import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'
import './Login.css'

export default function Login() {
    const history = useHistory()

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const login = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e =>{
            alert(e.message)
        })
    }
    const register = event => {
        event.preventDefault()
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e =>{
            alert(e.message)
        })
    }

    return (
        <div className="login">
            <Link>
            <img
            className="login__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG6.png" 
            alt="amazon logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form >
                    <h5>Email</h5>
                    <input
                    value={email}
                    onChange={event => setemail(event.target.value)}
                    type="email"/>
                    <h5>Password</h5>
                    <input
                    value={password}
                    onChange={event => setpassword(event.target.value)}
                    type="password"/>

                    <button
                    
                    onClick={login}
                    type="submit" 
                    className="login__sing">
                        Sign In
                    </button>
                    <p> <strong>Tapez votre adresse mail et votre mot de passe et cliquez sur créer un compte</strong> <br/>
                        En vous connectant ou en créant un compte vous acceptez les conditions génerales de vente de amazon</p>
                    <button
                    onClick={register} 
                    type="submit"  
                    className="login__register">
                        Créer un compte
                    </button>
                </form>
            </div>
        </div>
    )
}
