import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header'

const Home = () => {
    const [currentUser, setCurrentUser] = useState('')
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [groups, setGroups] = useState([])
    const history = useHistory()

    // called on first render
    // checks to see if a user is currently logged in, if so, sets the current user
    // if no user is logged in, redirects to the sign up page
    useEffect(() => {
        async function checkIfUserLoggedIn() {
            // get request to server backend
            const response = await fetch('/user/', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            const resBody = await response.json()

            // if there is a user logged in
            if (resBody.currentUser != null) {
                setCurrentUser(resBody.currentUser)
                setUserIsLoggedIn(true)
            } else {
                history.push('/signup') // redirects to the sign up page
            }
        }
        checkIfUserLoggedIn()
    }, [])

    return (
        <>
            {userIsLoggedIn ? // only shows the home page if the user is logged in so that
                              // a user getting redirected doesn't accidentally see the home page
                              // if redirection takes a sec
                <>
                    <Header />
                    <div>
                        {currentUser}
                    </div>
                </> : null}
        </>
    )
}

export default Home