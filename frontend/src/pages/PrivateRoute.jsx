import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const PrivateRoute = () => {

    const { token, setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();

    if (token) {
        return <Outlet />
    } else {
        navigate("/")
        setShowLogin(true);
    }

}

export default PrivateRoute