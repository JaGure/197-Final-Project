import React, { useState } from 'react'

const NewGroupForm = props => {
    const { toggleShowButton } = props
    const [groupName, setGroupName] = useState('')

    const createNewGroup = async (e) => {
        e.preventDefault()

        // post request to server backend
        const response = await fetch('/user/create-group', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ groupName: groupName }),
        })
        
        toggleShowButton(true)
    }

    return (
        <form className='form-inline' onSubmit={e => createNewGroup(e)}>
            <input type="text" class="form-control mb-2 mr-sm-2" value={groupName} onChange={e => setGroupName(e.target.value)} placeholder="Group Name" />
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default NewGroupForm