import React from 'react'
import { /*Redirect,*/ Route } from 'react-router'

const ProtectedRoute = (props) => {
  // if (!localStorage.getItem('token')) {
  //   return <Redirect to="/login" />
  // }

  return <Route {...props} />
}
export default ProtectedRoute;