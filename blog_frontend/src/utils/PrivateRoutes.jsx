import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { getToken } from '../services'

const PrivateRoutes = () => {
    const { access } = getToken()
    return (
            access ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes