import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="flex-1 grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-blue-600">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/papers"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs flex gap-2 items-center"
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                        </span>
                        Papers
                    </Link>
                    <Link to="/" className="text-sm font-semibold text-white">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound