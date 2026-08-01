import { createContext, useEffect, useState } from "react";

export const authContext = createContext(null)

const Auth = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const saveToken = (t) => {
        if (!t) {
            localStorage.removeItem("token")
            setToken(null)
            setUser(null)
        } else {
            localStorage.setItem("token", t)
            setToken(t)
        }
    }
    useEffect(() => {
        const run = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json()
                setIsLoggedIn(data.success)
                if (data.success) {
                    setUser(data.user.data)
                }
            } catch (error) {
                console.error("Error verifying token:", error.message)
                setIsLoggedIn(false)
            }
        };

        run();

    }, [token])
    return (
        <authContext.Provider value={{ isLoggedIn, token, saveToken, user }}>
            {children}
        </authContext.Provider>
    )
}

export default Auth