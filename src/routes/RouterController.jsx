import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Profile from './Profile/Profile'

import { useSelector } from 'react-redux'
import Register from './Register/Register'

const RouterController = () => {
    const token = useSelector(state => state.token)
  return useRoutes([
      {
        path: '/',
        element : <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/profile',
        element: token ? <Profile/> : <Navigate to='/login'/>
      }
  ])
}

export default RouterController