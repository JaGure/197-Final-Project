import React from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

import SignUpForm from './SignUpForm'

const Wrapper = s.div`
    padding: 15px;
`

// wrapper for the login message at the bottom
const LogInMessageBox = s.div`
    display: flex;
    flexflow: row nowrap;
    padding-top: 10px;
`

// the text of the login message at the bottom
const GoToLogInMessage = s.p`
    padding: 0px;
    margin: 0px;
    margin-right: 3px;
`

// the button to redirect to the log in page
const GoToLogInButon = s.button`
    padding: 0px;
    margin: 0px;
    line-height: 2px;
`

const SignUpBox = props => {
    const { classString } = props
    const fullClassString = classString + ' shadow-sm rounded bg-white'

    const history = useHistory()

    return (
        <Wrapper className={fullClassString}>
            <h1>Sign Up</h1>
            <SignUpForm />
            <LogInMessageBox>
                <GoToLogInMessage>Already have an account?</GoToLogInMessage>
                <GoToLogInButon className='btn btn-link' onClick={e => history.push('/login')}>Log in here.</GoToLogInButon>
            </LogInMessageBox>
        </Wrapper>
    )
}

export default SignUpBox