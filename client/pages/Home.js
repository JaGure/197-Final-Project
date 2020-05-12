import React from 'react'
import { useHistory} from 'react-router-dom'

const Home = () => {
    let history = useHistory()

    const goHome = () => {
        console.log('asdfasdfasdf')
        history.push('/signup')
        console.log('adfasdf')
    }

    return (
        <button type="button" onClick={goHome}>?????</button>
    )
}

export default Home