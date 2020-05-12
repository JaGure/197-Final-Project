import React from 'react'
import s from 'styled-components'

import SignUpBox from '../components/SignUpBox'

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

const SignUp = () => {
    return (
        <Wrapper>
            <Container className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-md-2 col-lg-4'></div>
                    <div className='col-md-8 col-lg-4'>
                        <SignUpBox />
                    </div>
                    <div className='col-md-2 col-lg-4'></div>
                </div>
            </Container>
        </Wrapper>
    )
}

export default SignUp