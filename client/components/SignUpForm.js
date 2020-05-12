import React, { useState } from 'react'

const SignUpForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // send a post request to the server to register the user
    // if the username is taken, have the user try again, otherwise redirect to login page
    const signUp = async (e) => {
        e.preventDefault()

        // post request to server backend
        const response = await fetch('/account/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username, password: password}),
        })
    }

    return (
        <form onSubmit={e => signUp(e)}>
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

