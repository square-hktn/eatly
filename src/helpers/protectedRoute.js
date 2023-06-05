import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { axiosInstance, handleLogout } from '../api'
import { baseUrl } from '../config';

const ProtectedRoute = (props) => {
  if (!localStorage.getItem('token')) {
    handleLogout();
    return <Redirect to="/" />
  }

  return <Route {...props} />
}
export default ProtectedRoute;