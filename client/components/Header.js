import React from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

const Wrapper = s.div`
    overflow: hidden;
    position: fixed;
    top: 0;
    padding: 5px;
    display: flex;
    flexflow: row nowrap;
`

const Title = s.h2`
    padding: 0px;
    margin: 0px;
    flex: auto;
    font-family: Serif;
    font-weight: bold;
`

const Header = () => {
    const history = useHistory()

    // log the current user out and go back to the signup page
    const logout = async (e) => {
        e.preventDefault()

        await fetch('/account/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })

        history.push('/signup')
    }

    return (
        <Wrapper className='bg-secondary container-fluid'>
            <Title>DnD Online Character Tracker</Title>
            <button type='button' className='btn btn-primary' onClick={e => logout(e)}>Logout</button>
        </Wrapper>
    )
}

export default Header