import { createContext, useState, useContext } from "react";
import axios from "axios";

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

            const response = await axios.post('http://localhost:3000/api/v1/register', data, {
                withCredentials: true
            });

            setUser(response.data);
            setIsAuth(true);

            toast.success('LOG')

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
            const response = await axios.post('http://localhost:3000/api/v1/login', data, {
                withCredentials: true
            });

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

    return (
        <AuthContext.Provider
            value={{ user, isAuth, errors, signup, login, errors }}
        >
            {children}
        </AuthContext.Provider>
    )

}

