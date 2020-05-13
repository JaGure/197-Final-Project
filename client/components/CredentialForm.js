import React, { useState } from 'react'

const CredentialForm = props => {
    const { onSubmitFunc, warningMessage, buttonText } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayWarning, setDisplayWarning] = useState(false)

    // the on submit function attempts to submit with the current username and password
    // if the submit fails, the warning is displayed
    const handleOnSubmitFunc = async (e) => {
        e.preventDefault()

        let responseSuccess = await onSubmitFunc(username, password)
        setDisplayWarning(!responseSuccess)
    }

    return (
        <form onSubmit={e => handleOnSubmitFunc(e)}>
            {displayWarning ?
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {warningMessage}
                    <button type="button" className="close" data-dismiss="alert" onClick={e => setDisplayWarning(false)}>
                        <span>&times;</span>
                    </button>
                </div>
                : null}
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
        </form>
    )
}

export default CredentialForm