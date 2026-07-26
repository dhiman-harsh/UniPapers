import express from "express"
import { handleCreateUser, handleForgot, handleLogin } from "../controllers/user.js"

const router = express.Router()

router.post("/", handleCreateUser)

router.post("/login", handleLogin)

router.post("/forgot", handleForgot)

export default router