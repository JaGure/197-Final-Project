import React, { useState } from 'react'
import s from 'styled-components'

const CardBody = s.div`
    margin: 10px;
`

const GroupCard = props => {
    const { groupName, index } = props

    return (
        <CardBody className="card col">
            <div className="card-body">
                <h5 className="card-title">{groupName}</h5>
                <button type='button' className="btn btn-primary">Enter Group</button>
            </div>
        </CardBody>
    )
}

export default GroupCard