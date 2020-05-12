import React from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

// wrapper for the login message at the bottom
const LogInMessageBox = s.div`
    display: flex;
    flexflow: row nowrap;
    padding-top: 10px;
`

// the text of the login message at the bottom
const GoToLogInText = s.p`
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

const GoToLogInMessage = () => {
    const history = useHistory()

    return (
        <LogInMessageBox>
            <GoToLogInText>Already have an account?</GoToLogInText>
            <GoToLogInButon className='btn btn-link' onClick={e => history.push('/login')}>Log in here.</GoToLogInButon>
        </LogInMessageBox>
    )
}

export default GoToLogInMessage
