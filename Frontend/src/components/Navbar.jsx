import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { authContext } from "../../context/Auth"

const Navbar = () => {
    const { isLoggedIn } = useContext(authContext)

    return (
        <nav className="bg-neutral-primary w-full border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Flowbite</span>
                </Link>
                <ul className="flex font-medium items-center gap-4 md:gap-6">
                    <li>
                        <Link to="/" className="hidden md:block">Home</Link>
                    </li>
                    <li>
                        <Link to="/papers" className="">Papers</Link>
                    </li>
                    <li>
                        {isLoggedIn ? <Link to="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M17.925 20.056a6 6 0 0 0-11.851.001"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                        </Link> :
                            <Link to="/login" className="block py-1 px-3 text-white bg-sky-600 rounded-md">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar