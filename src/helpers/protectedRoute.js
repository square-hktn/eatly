import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = (props) => {
  if (!localStorage.getItem('token')) {
    return <Redirect to="/" />
  }

  return <Route {...props} />
}
export default ProtectedRoute;