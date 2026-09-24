import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { authContext } from "../../context/Auth"
import logo from "../../public/unipapers-ulogo.png"

const Navbar = () => {
    const { isLoggedIn } = useContext(authContext)

    return (
        <nav className="bg-neutral-primary w-full border-default sticky top-0 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-7" alt="Flowbite Logo" />
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">unipapers</span>
                </Link>
                <ul className="flex font-[500] items-center gap-4 md:gap-6">
                    <li className="hidden md:block">
                        <Link to="/" className="">Home</Link>
                    </li>
                    <li>
                        <Link to="/papers" className="">Papers</Link>
                    </li>
                    <li className="hidden md:block">
                        <Link to="/papers/upload" className="py-1 px-3 bg-neutral-200 rounded-md flex items-center gap-2">Upload
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload preview-icon"><path d="M12 13v8" /><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="m8 17 4-4 4 4" /></svg>
                        </Link>
                    </li>
                    <li>
                        {isLoggedIn ? <Link to="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M17.925 20.056a6 6 0 0 0-11.851.001" /><circle cx="12" cy="11" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                        </Link> :
                            <Link to="/login" className="block py-1 px-3 text-white bg-blue-600 rounded-md">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar