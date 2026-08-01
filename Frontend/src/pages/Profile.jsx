import { useContext } from "react"
import { authContext } from "../../context/Auth"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const navigate = useNavigate()
    const { saveToken, user } = useContext(authContext)
    return (
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="relative px-6 pb-8">
                    <div className="flex justify-center -mt-16 mb-4">
                        <div className="relative">
                            <img
                                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md bg-white"
                                src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix&backgroundColor=f3f4f6"
                                alt="Profile photo"
                            />
                            <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900">{user ? user.fullName : "Guest user"}</h2>
                        <p className="text-sm text-gray-500 font-medium mt-1">
                            {user ? user.email : "guestuser@mail.com"}
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center gap-3">
                        <button className="flex-1 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Edit Profile
                        </button>
                        <button onClick={() => {
                            saveToken("")
                            navigate("/login")
                        }} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile