import User from "../models/user.js"

export const handleCreateUser = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        const user = await User.createOne({ fullName, email, password })
        return res.json({ msg: "user created successfully", id: user._id })
    } catch (e) {
        return res.json({ err: "something went wrong!" })
    }
}

export const handleLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email, password })
        return res.json({ msg: "user logged in successfully", id: user._id })
    } catch (e) {
        return res.json({ err: "something went wrong!" })
    }
}

export const handleForgot = (req, res) => { }