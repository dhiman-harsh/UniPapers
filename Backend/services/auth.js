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
    const actualToken = token.startsWith('Bearer ') ? token.split(' ')[1] : token
    if (!process.env.JWT_SECRET) {
        console.error("CRITICAL: process.env.JWT_SECRET is undefined");
        return null; 
    }
    try {
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET)
        return decoded
    } catch (err) {
        console.error("JWT Verification Failed:", err.name, err.message);
        return null
    }
}