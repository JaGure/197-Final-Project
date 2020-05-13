import React from 'react'
import { useLocation } from 'react-router-dom'

const Group = () => {
    // gets the group index in the users array from the url (for db lookup)
    const location = useLocation()
    const index = location.pathname.slice(7)

    return (
        <div>Da grupes payje</div>
    )
}

export default Group