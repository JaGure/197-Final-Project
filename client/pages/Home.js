import React, { useState, useEffect } from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

import Header from '../components/Header'
import CreateGroupMenu from '../components/CreateGroupMenu'
import GroupCard from '../components/GroupCard'

const BodyWrapper = s.div`
    margin: 50px auto 0;
`

const Home = () => {
    const [currentUser, setCurrentUser] = useState('')
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [groups, setGroups] = useState([])
    const history = useHistory()

    // called on when groups updates
    // checks to see if a user is currently logged in, if so, sets the current user and gets their groups
    // if no user is logged in, redirects to the sign up page
    useEffect(() => {
        // assumes the user is logged in
        async function getUserGroups() {
            // get request to server backend
            const response = await fetch('/user/groups', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            const resBody = await response.json()

            setGroups(resBody.groups)
        }

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
                getUserGroups()
            } else {
                history.push('/signup') // redirects to the sign up page
            }
        }
        checkIfUserLoggedIn()
    }, [groups])

    return (
        <>
            {userIsLoggedIn ? // only shows the home page if the user is logged in so that
                // a user getting redirected doesn't accidentally see the home page
                // if redirection takes a sec
                <>
                    <Header />
                    <BodyWrapper className='container-fluid'>
                        <div className='row'>
                            {groups.map(function (groupName, index) {
                                return <GroupCard groupName={groupName} index={index} />
                            })}
                        </div>
                    </BodyWrapper>
                    <CreateGroupMenu />
                </> : null}
        </>
    )
}

export default Home