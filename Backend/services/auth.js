import jwt from "jsonwebtoken"

export const generateToken = (user) => {
    const token = jwt.sign({
        data: user
    }, process.env.JWT_SECRET);
    return token
}

export const verifyToken = (token) => {
    if (!token || token === 'null' || token === 'undefined') {
        return null;
    }
    if (!process.env.JWT_SECRET) {
        console.error("CRITICAL: process.env.JWT_SECRET is undefined");
        return null; 
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        return decoded
    } catch (err) {
        console.error("JWT Verification Failed for input:", token, "Error:", err.name, err.message);
        return null
    }
}