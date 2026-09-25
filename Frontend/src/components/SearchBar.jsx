const SearchBar = () => {
    return (
        <form className="max-w-md mx-4 md:mx-auto">
            <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                </div>
                <input type="search" id="search" className="block w-full p-3 ps-9 bg-neutral-100 border border-gray-200 text-heading text-sm rounded-base placeholder:text-body" placeholder="Search" required />
                <button type="button" className="absolute end-1.5 bottom-1.5 text-white bg-blue-600 box-border shadow-xs font-medium rounded text-xs px-3 py-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right preview-icon"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
            </div>
        </form>
    )
}

export default SearchBar