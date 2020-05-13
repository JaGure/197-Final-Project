import React, { useState } from 'react'

import CharacterFormItem from './CharacterFormItem'

const CreateCharacterForm = props => {
    const { setCharacterCreated, groupID } = props
    const [characterNameString, setCharacterNameString] = useState('')
    const [classString, setClassString] = useState('')
    const [raceString, setRaceString] = useState('')
    const [skillString, setSkillString] = useState('')

    const baseRequestString = 'https://www.dnd5eapi.co/api/'

    const createCharacter = async (e) => {
        e.preventDefault()

        // if all form fields have been filled, create a new character
        if (characterNameString !== '' && classString !== '' && raceString !== '' && skillString !== '') {
            const character = {
                name: characterNameString,
                class: classString,
                race: raceString,
                skill: skillString
            }

            // post request to backend to create character
            const response = await fetch('/group/add-character', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ groupID: groupID, character: character })
            })
            
            setCharacterCreated(true)
        }


    }

    return (
        <form onSubmit={e => createCharacter(e)}>
            <CharacterFormItem labelText='Character Name' setOutputString={setCharacterNameString} />
            <CharacterFormItem labelText='Class' setOutputString={setClassString} reqString={baseRequestString + 'classes/'} />
            <CharacterFormItem labelText='Race' setOutputString={setRaceString} reqString={baseRequestString + 'races/'} />
            <CharacterFormItem labelText='Skill' setOutputString={setSkillString} reqString={baseRequestString + 'skills/'} />
            <button type="submit" className="btn btn-primary">Create!</button>
        </form>
    )
}

export default CreateCharacterForm