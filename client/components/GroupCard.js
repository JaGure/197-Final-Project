import React, { useState } from 'react'
import s from 'styled-components'
import { useHistory } from 'react-router-dom'

const CardBody = s.div`
    margin: 10px;
`

const GroupCard = props => {
    const { groupName, index } = props
    const history = useHistory()

    const goToGroup = e => {
        e.preventDefault()

        // redirect to this specific group
        const path = '/group/' + index
        history.push(path)
    }

    return (
        <CardBody className="card col-3">
            <div className="card-body">
                <h5 className="card-title">{groupName}</h5>
                <button type='button' className="btn btn-primary" onClick={e => goToGroup(e)}>Enter Group</button>
            </div>
        </CardBody>
    )
}

export default GroupCard