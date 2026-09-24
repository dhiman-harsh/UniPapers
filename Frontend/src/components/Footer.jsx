import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-body sm:text-center">© 2026 <Link to="/" className="hover:underline">unipapers</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0 gap-4">
                    <li>
                        <a href="mailto:harshdhiman.dev@gmail.com" className="hover:underline">Email</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dhiman-harsh" target="_blank" className="hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/dhiman-harsh" target="_blank" className="hover:underline">Developer</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer