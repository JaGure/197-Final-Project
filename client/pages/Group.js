import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Group = () => {
    // gets the group index in the users array from the url (for db lookup)
    const location = useLocation()
    const index = location.pathname.slice(7)
    const [group, setGroup] = useState(null)

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

            setGroup(resBody.group)
        }

        getUserGroups()
    }, [])

    return (
        <div>Da grupes payje</div>
    )
}

export default Group