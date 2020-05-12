import React from 'react'
import s from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import GoToLogInMessage from './GoToLogInMessage'

const Wrapper = s.div`
    padding: 15px;
`

const InputCredentialsBox = props => {
    const { classString } = props
    const fullClassString = classString + ' shadow-sm rounded bg-white'

    return (
        <Wrapper className={fullClassString}>
            <Switch>
                <Route path='/signup'>
                    <h1>Sign Up</h1>
                    <SignUpForm />
                    <GoToLogInMessage />
                </Route>
                <Route path='/login'>
                    <h1>Log In</h1>
                    <LogInForm />
                </Route>
            </Switch>
        </Wrapper>
    )
}

export default InputCredentialsBox