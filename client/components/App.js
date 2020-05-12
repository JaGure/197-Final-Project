import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/login'>
                    <LogIn />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App