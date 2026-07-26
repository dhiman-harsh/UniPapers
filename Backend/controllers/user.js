import User from "../models/user.js"
import { generateToken } from "../services/auth.js"

export const handleCreateUser = async (req, res) => {
    const { fullName, email, password } = req.body
    console.log(fullName, email, password)
    try {
        const user = await User.create({ fullName, email, password })
        console.log(user)
        user.password = null
        const token = generateToken(user)
        console.log(token)
        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            token
        })
    } catch (err) {
        return res.status(409).json({
            success: false,
            message: 'Email address is already registered.'
        });
    }
}

export const handleLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email, password })
        user.password = null
        const token = generateToken(user)
        return res.status(200).json({
            success: true,
            message: "User logged in successfully.",
            token
        })
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password."
        })
    }
}

export const handleForgot = (req, res) => { }