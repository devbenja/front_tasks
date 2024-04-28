import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import Cookie from "js-cookie";


const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const signup = async (data) => {

        try {

            const response = await axios.post('/register', data);

            setUser(response.data);
            setIsAuth(true);

            return response.data;

        } catch (error) {

            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            setErrors([error.response.data.message]);
        }

    };

    const login = async (data) => {

        try {
            const response = await axios.post('/login', data);

            setUser(response.data);
            setIsAuth(true);

            return response.data;

        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }

            setErrors([error.response.data.message]);
        }

    }

    useEffect(() => {
        if (Cookie.get('jwt_token')){

            axios.get('/profile')
            .then((response) => {
                console.log(response.data)
                setUser(response.data);
                setIsAuth(true);
            })
            .catch((err) => {
                toast.error(err);
                setUser(null);
                setIsAuth(false);
            })
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, isAuth, errors, signup, login }}
        >
            {children}
        </AuthContext.Provider>
    )

}

