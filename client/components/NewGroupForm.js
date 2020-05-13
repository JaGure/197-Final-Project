import React from 'react'

const NewGroupForm = () => {
    return (
        <form className='form-inline'>
            <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Group Name" />
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default NewGroupForm