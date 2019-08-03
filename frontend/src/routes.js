import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute path="/app" component={() => <h1>Hello App</h1>} />
      <Route path="*" component={() => <h1>Not found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes