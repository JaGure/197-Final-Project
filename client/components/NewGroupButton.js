import React from 'react'

const NewGroupButton = props => {
    const { toggleShowButton } = props

    return (
        <button type='button' className='btn btn-primary rounded-pill' onClick={e => toggleShowButton()}>Create New Group</button>
    )
}

export default NewGroupButton