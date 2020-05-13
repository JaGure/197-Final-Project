import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import InputCredentials from './pages/InputCredentials'
import Group from './pages/Group'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/signup', '/login']}>
                    <InputCredentials />
                </Route>
                <Route path='/group/:index'>
                    <Group />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App