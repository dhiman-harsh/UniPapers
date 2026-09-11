import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { authContext } from "../../context/Auth"

const Login = () => {
    const { saveToken } = useContext(authContext)

    const navigate = useNavigate()
    const [isSubmitted, setIsSubmitted] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleLogin = async (e) => {
        e.preventDefault()
        setIsSubmitted(false)
        if (email && password) {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                })
                const data = await response.json()
                if (response.ok && data.token) {
                    saveToken(data.token)
                    setEmail('')
                    setPassword('')
                    setIsSubmitted(true)
                    navigate("/")
                }
            } catch (error) {
                console.error(error)
                setEmail('')
                setPassword('')
                setIsSubmitted(true)
            }
        }
    }
    return (
        <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            <h1 className="text-2xl font-semibold">Welcome back!</h1>
            <form className="w-full px-8 md:px-0 max-w-md md:mx-auto" onSubmit={handleLogin}>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_text" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_text" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                </div>
                <button type="submit" className={`w-full mt-6 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none ${!isSubmitted ? 'disabled' : null}`}>{!isSubmitted ? 'Loading...' : 'Login'}</button>
                <p className="font-medium text-blue-600 mt-4 text-sm flex gap-1">New user?
                    <Link className="hover:underline" to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    )
}

export default Login