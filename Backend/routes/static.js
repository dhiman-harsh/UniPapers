import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    if (!req.user) {
        return res.json({
            success: false,
            message: "User not logged in"
        })
    }
    return res.json({
        success: false,
        message: "User logged in",
        user
    })
})

export default router