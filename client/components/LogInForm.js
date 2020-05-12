import React from 'react'
import { useHistory } from 'react-router-dom'

import Form from './Form'

const LogInForm = () => {
    const history = useHistory()

    // send a post request to the server to log in
    // if the login suceeds, redirects the user to the home page
    // returns a boolean representing if the login was successful
    const logIn = async (username, password) => {
        // post request to server backend
        const response = await fetch('/account/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        })

        const resBody = await response.json()

        if (resBody.loginWasSuccessful) {
            history.push('/')
            return true
        } else {
            return false
        }
    }

    return (
        <Form onSubmitFunc={logIn} warningMessage='Login failed. Please try again.' buttonText='Log In'/>
    )
}

export default LogInForm