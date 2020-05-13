import React from 'react'

const NewGroupForm = props => {
    const { toggleShowButton } = props

    const createNewGroup = e => {
        e.preventDefault()
        
        toggleShowButton(true)
    }

    return (
        <form className='form-inline' onSubmit={e => createNewGroup(e)}>
            <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Group Name" />
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default NewGroupForm