import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import InputCredentials from './pages/InputCredentials'
import CreateGroup from './pages/CreateGroup'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={['/signup', '/login']}>
                    <InputCredentials />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App