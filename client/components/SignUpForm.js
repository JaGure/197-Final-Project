import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayWarning, setDisplayWarning] = useState(false)

    const history = useHistory()

    // send a post request to the server to register the user
    // if the username is taken, have the user try again, otherwise redirect to login page
    const signUp = async (e) => {
        e.preventDefault()

        // post request to server backend
        const response = await fetch('/account/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password }),
        })

        const resBody = await response.json()

        // if user was alreay in db
        if (resBody.containedUser) {
            setDisplayWarning(true)
        } else {
            history.push('/login') // redirects to the log in page
        }
    }

    return (
        <form onSubmit={e => signUp(e)}>
            {displayWarning ?
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Username already taken! Please try a new one.
                <button type="button" className="close" data-dismiss="alert" onClick={e => setDisplayWarning(false)}>
                        <span>&times;</span>
                    </button>
                </div> 
                : null
            }
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUpForm