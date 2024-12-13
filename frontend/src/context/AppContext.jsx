import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(null);
    const [credit, setCredit] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const presentToken = localStorage.getItem('token');
        if (presentToken) {
            setToken(presentToken);
        }
        if (token) {
            loadUserCredits();
        }
    }, [token])

    const loadUserCredits = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/credits', { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
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
        try {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        } catch (error) {
            console.log("error in logout ",error);
        }
    }

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(backendUrl + "/api/image/generate-image", { prompt }, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
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