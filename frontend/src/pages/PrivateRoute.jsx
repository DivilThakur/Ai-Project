import React, { useContext, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';




const PrivateRoute = () => {

    const { setShowLogin } = useContext(AppContext);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);

    if (!localStorage.getItem('token')) {
        window.location.href = '/';
        toast.error("login required");
    }
    if (localStorage.getItem('token')) {
        return <Outlet />;
    }

    return <Spinner/>

  
}

export default PrivateRoute