import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import Dashboard from 'pages/Dashboard'
import VideoDetail from 'pages/VideoDetail'
import PublicRoute from './PublicRoute'
import AuthedRoute from './AuthedRoute'

const routes = () => (
  <Router>
    <div>
      <Switch>
        <AuthedRoute exact path="/" component={Dashboard} />
        <PublicRoute path="/login" component={Login} />
        <Route path="/video/:id" component={VideoDetail} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  </Router>
)

export default (routes)
