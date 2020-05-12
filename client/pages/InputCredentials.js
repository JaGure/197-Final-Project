import React from 'react'
import s from 'styled-components'

import InputCredentialsBox from '../components/InputCredentialsBox'

// these two styled divs are for vertically centering our container
const Wrapper = s.div`
    height: 100vh;
    position: relative;
`

const Container = s.div`
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

const InputCredentials = () => {
    // bootstrap classes specific to the center box (whether it's a login box or sign up box)
    const centerBoxClasses = 'col-md-8 col-lg-4'
    // bootstrap classes for the side columns, so that the center column is centered
    const sideColClasses = 'col-md-2 col-lg-4'

    return (
        <Wrapper>
            <Container className='container-fluid'>
                <div className='row align-items-center'>
                    <div className={sideColClasses}></div>
                    <InputCredentialsBox classString={centerBoxClasses} />
                    <div className={sideColClasses}></div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default InputCredentials