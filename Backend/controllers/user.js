import User from "../models/user.js"
import { generateToken, getHash, verifyHash } from "../services/auth.js"

export const handleCreateUser = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        const finduser = await User.findOne({ email })

        if (finduser) {
            return res.status(409).json({
                success: false,
                message: 'Email address is already registered.',
            })
        }

        const hashedPassword = await getHash(password)
        const user = await User.create({ fullName, email, password: hashedPassword })
        user.password = null
        try {
            // generate jwt
            const token = generateToken(user)
            return res.status(201).json({
                token,
                success: true,
                message: "User created successfully.",
            })
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        return res.status(409).json({
            success: false,
            message: 'Something broken',
            error: err
        })
    }
}

export const handleLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        const isMatch = verifyHash(password, user.password)
        if (user === null || !isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            })
        }

        user.password = null

        try {
            const token = generateToken(user)
            return res.status(200).json({
                token,
                success: true,
                message: "User logged in successfully.",
            })
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: "something broken.",
            error: err
        })
    }
}

export const handleForgot = (req, res) => { }