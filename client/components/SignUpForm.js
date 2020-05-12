import React from 'react'

const SignUpForm = () => {
    return (
        <form>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUpForm

