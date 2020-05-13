import React from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

const Wrapper = s.div`
    overflow: hidden;
    position: fixed;
    bottom: 25px;
    right: 20px;
    padding: 5px;
`


const CreateGroupButton = () => {
    const history = useHistory()

    return (
        <Wrapper>
            <button type='button' className='btn btn-primary rounded-pill' onClick={e => history.push('/group/create')}>Create New Group</button>
        </Wrapper>
    )
}

export default CreateGroupButton