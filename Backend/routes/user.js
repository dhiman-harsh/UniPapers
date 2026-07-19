import express from "express"

const router = express.Router()

router.post("/", handleCreateUser)

router.post("/login", handleLogin)

router.post("/forgot", handleForgot)

export default router