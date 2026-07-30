import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(null)
    (async () => {
        const token = localStorage.getItem("token")
        const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        // setIsLoggedIn(data.success)
    })()

    return (
        <nav className="bg-neutral-primary w-full border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <Link to="/" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Home</Link>
                        </li>
                        <li>
                            <Link to="/papers" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Papers</Link>
                        </li>
                        <li>
                            {/* {isLoggedIn ? <Link to="/profile" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Profile</Link> : */}
                                {/* <Link to="/login" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0">Login</Link>} */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar