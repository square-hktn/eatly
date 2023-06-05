import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { axiosInstance, handleLogout } from '../api'
import { baseUrl } from '../config';

const ProtectedRoute = (props) => {
  useEffect(() => {
    axiosInstance.post(`${baseUrl}/user/verifyToken`)
      .catch((e) => {
        handleLogout();
        return <Redirect to="/" />
      })
  });

  if (!localStorage.getItem('token')) {
    handleLogout();
    return <Redirect to="/" />
  }

  return <Route {...props} />
}
export default ProtectedRoute;