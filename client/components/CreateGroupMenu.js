import React, { useState } from 'react'
import s from 'styled-components'

import NewGroupButton from './NewGroupButton'
import NewGroupForm from './NewGroupForm'

const Wrapper = s.div`
    overflow: hidden;
    position: fixed;
    bottom: 25px;
    right: 20px;
    padding: 5px;
`

// toggles between the form to create a group and the create group button
const CreateGroupMenu = props => {
    const { initialShowButton } = props
    const [showButton, setShowButton] = useState(initialShowButton)

    return (
        <Wrapper>
            { showButton ? <NewGroupButton /> : <NewGroupForm /> }
        </Wrapper>
    )
}

export default CreateGroupMenu