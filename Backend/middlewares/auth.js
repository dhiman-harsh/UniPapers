import { verifyToken } from "../services/auth.js"

export const restrictToLoggedIn = (req, res, next) => {
    req.user = null
    const authHeader = req.headers?.authorization;
    if (!authHeader) {
        return res.json({ msg: "login required" })
    }
    if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.split('Bearer ')[1]
        const user = verifyToken(token)
        if (!user) {
            return res.json({ msg: "login required" })
        }
        req.user = user
        next()
    }
}

export const checkAuth = (req, res, next) => {
    req.user = null
    const authHeader = req.headers?.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        const user = verifyToken(token)
        if(user) {
            req.user = user
        }
    }
    next()
}