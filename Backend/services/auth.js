import jwt from "jsonwebtoken"

export const generateToken = (user) => {
    const token = jwt.sign({
        data: user
    }, process.env.JWT_SECRET);
    return token
}

export const verifyToken = (token) => {
    if (!token) {
        return null
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded
    } catch (err) {
        return null
    }
}