import React, { useState } from 'react'

import CharacterFormItem from './CharacterFormItem'

const CreateCharacterForm = props => {
    const { setCharacterCreated } = props
    const [characterNameString, setCharacterNameString] = useState('')
    const [classString, setClassString] = useState('')
    const [raceString, setRaceString] = useState('')
    const [skillString, setSkillString] = useState('')

    const baseRequestString = 'http://www.dnd5eapi.co/api/'

    const createCharacter = e => {
        e.preventDefault()

        console.log(characterNameString)
        console.log(classString)
        console.log(raceString)
        console.log(skillString)

        setCharacterCreated(true)
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