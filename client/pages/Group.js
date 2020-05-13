import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import s from 'styled-components'

import CreateCharacterForm from '../components/CreateCharacterForm'

const Container = s.div`
    height: 100vh;
`

const Title = s.h1`
    text-align: center;
`

const Group = () => {
    // gets the group index in the users array from the url (for db lookup)
    const location = useLocation()
    const index = location.pathname.slice(7)

    const [groupName, setGroupName] = useState('')
    const [users, setUsers] = useState([])
    const [characters, setCharacters] = useState([])
    const [DM, setDM] = useState('')
    const [characterCreated, setCharacterCreated] = useState(false)
    const [groupID, setGroupID] = useState('')

    // called on first render; gets the current user's groups[index] (current user tracked by the backend)
    useEffect(() => {
        // assumes the user is logged in
        async function getUserGroups() {
            // get request to server backend
            const response = await fetch('/user/group/' + index, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })

            const resBody = await response.json()

            const group = resBody.group

            setGroupName(group.groupName)
            setUsers(group.users)
            setCharacters(group.characters)
            setDM(group.DM)
            setGroupID(resBody.id)

            // if a character has already been created before in this group
            if (typeof group.characters[0]._id !== 'undefined') {
                setCharacterCreated(true)
            }
        }

        getUserGroups()
    }, [characterCreated])

    return (
        <Container className='container-fluid'>
            <div className='row'>
                <div className='col align-self-center'>
                    <Title>{groupName}</Title>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                    {!characterCreated ?
                        <>
                            <h3>Create New Character</h3>
                            <CreateCharacterForm setCharacterCreated={setCharacterCreated} groupID={groupID} />
                        </>
                        :
                        <>
                            <p>Character Name: {characters[0].name}</p>
                            <p>Character Class: {characters[0].class}</p>
                            <p>Character Race: {characters[0].race}</p>
                            <p>Character Skill: {characters[0].skill}</p>
                        </>}
                </div>
            </div>
        </Container>
    )
}

export default Group