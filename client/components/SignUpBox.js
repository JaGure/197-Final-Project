import React from 'react'
import s from 'styled-components'

import SignUpForm from './SignUpForm'

const Wrapper = s.div`
    padding: 15px;
`

const SignUpBox = () => {
    return (
        <Wrapper className='shadow-sm rounded bg-white'>
            <h1>Sign Up</h1>
            <SignUpForm />
        </Wrapper>
    )
}

export default SignUpBox