import React from 'react'

const NewGroupButton = () => {
    return (
        <button type='button' className='btn btn-primary rounded-pill' onClick={e => history.push('/group/create')}>Create New Group</button>
    )
}

export default NewGroupButton