import React from 'react'
import { Redirect, Route } from 'react-router'
import { handleLogout } from '../api'

const ProtectedRoute = (props) => {
  if (!localStorage.getItem('token')) {
    handleLogout();
    return <Redirect to="/" />
  }

  return <Route {...props} />
}
export default ProtectedRoute;