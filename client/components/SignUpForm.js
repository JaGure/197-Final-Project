import React from 'react'
import { useHistory } from 'react-router-dom'

import CredentialForm from './CredentialForm'

const SignUpForm = () => {
    const history = useHistory()

    // send a post request to the server to register the user
    // if the username is not taken, redirect to login page
    // returns a boolean representing if the sign up succeeded
    const signUp = async (username, password) => {
        // post request to server backend
        const response = await fetch('/account/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        })

        const resBody = await response.json()

        // if user was alreay in db
        if (resBody.containedUser) {
            return false
        } else {
            history.push('/login') // redirects to the log in page
            return true
        }
    }

    return (
        <CredentialForm onSubmitFunc={signUp} warningMessage='Username already taken! Please try a new one.' buttonText='Sign Up!' />
    )
}

export default SignUpForm