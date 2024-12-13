import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookie from 'js-cookie'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { use } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(null);
    const [credit, setCredit] = useState(false);
    const navigate = useNavigate();

    const loadUserCredits = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { withCredentials: true });
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }


    const logout = async () => {
        await axios.post(backendUrl + "/api/user/logout", {}, { withCredentials: true });
        setToken(null);
        setUser(null);
    }


    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(backendUrl + "/api/image/generate-image", { prompt }, { withCredentials: true })
            if (data.success) {
                loadUserCredits();
                return data.resultImage;
            } else {
                toast.error(data.message);
                if (data.creditBalance === 0) {
                    navigate("/pricing");
                }
            }
        } catch (error) {
            console.log("ye error ha", error.message);
        }
    }


    useEffect(() => { 
        const StoredToken = Cookies.get('token');
        console.log("stored token",StoredToken);
        if (StoredToken) {
            setToken(StoredToken);
        }
        if (token) {
            loadUserCredits();
        }
    }, [token])

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, credit, setCredit, loadUserCredits, logout,
        generateImage
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;