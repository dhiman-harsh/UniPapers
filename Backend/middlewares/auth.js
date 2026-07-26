import { verifyToken } from "../services/auth.js"

export const restrictToLoggedIn = (req, res, next) => {
    req.user = null
    const authHeader = req?.headers?.authorization;
    if (!authHeader) {
        return res.json({ msg: "login required" })
    }
    console.log(authHeader)
    if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.split('Bearer ')[1]
        console.log("token:", token)
        const user = verifyToken(token)
        console.log("user:", user)
        if (!user) {
            return res.json({ msg: "login required" })
        }
        req.user = user
        next()
    }
}

export const checkAuth = (req, res, next) => {
    req.user = null
    const codedToken = req?.headers?.token
    if (codedToken) {
        const token = codedToken.split(" ")[1]
        console.log(token)
        const user = verifyToken(token)
        req.user = user ? user : null
    }
    next()
}