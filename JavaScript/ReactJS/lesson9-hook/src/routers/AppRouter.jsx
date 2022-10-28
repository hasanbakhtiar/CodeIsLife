import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Usestate from '../components/Usestate'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Route exact component={LoginPage} path="/"></Route>
        <Route component={Usestate} path="/admin"></Route>
    </BrowserRouter>
  )
}

export default AppRouter