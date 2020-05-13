import React, { useState } from 'react'

const CharacterFormItem = props => {
    const { labelText, setOutputString, reqString } = props
    const [inputText, setInputText] = useState('')
    const currentAttribute = reqString != null ? reqString.slice(28, reqString.length - 1) : 'name'
    const [displayWarning, setDisplayWarning] = useState(false)

    const onInputChange = e => {
        const currentInput = e.target.value

        setInputText(currentInput)

        if (reqString == null || typeof(reqString) === 'undefined') {
            setOutputString(currentInput)
        } else {
            lookupCurrentInput(currentInput)
        }
    }

    // checks and sees if the current input text yields a match in the api database
    // if it does, updates the output string (setOutputString)
    const lookupCurrentInput = async (currentInput) => {
        const path = reqString + currentInput.toLowerCase()

        // get request to api
        const response = await fetch(path, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })

        const resBody = await response.json()

        // if the lookup was successful, i.e. if what they've typed in exists in the api database
        if (!resBody.error) {
            let output = resBody.name
            switch(currentAttribute) {
                case 'classes':
                    output += ' (Hit Dice: 1d' + resBody.hit_die + ')'
                    break;
                case 'races':
                    output += ' - ' + resBody.alignment
                    break;
                case 'skills': 
                    output += ' - ' + resBody.desc[0]
                    break;
            }
            
            setOutputString(output)
            setDisplayWarning(false)
        } else {
            setDisplayWarning(true)
        }
    }

    return (
        <div className="form-group">
            <label>{labelText}</label>
            <input type="text" className="form-control" value={inputText} onChange={e => onInputChange(e)} />
            { displayWarning ? 
                <small className='form-text text-danger'>Input Not Found In DnD Database</small> : null}
        </div>
    )
}

export default CharacterFormItem