import 'dotenv/config'

import express from "express"
import staticRouter from "./routes/static.js"
import userRouter from "./routes/user.js"
import paperRouter from "./routes/paper.js"
import { connectDB } from "./services/connection.js"
import { checkAuth } from './middlewares/auth.js'
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

connectDB(`${process.env.MONGO_DB_URL}`)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", checkAuth, staticRouter)
app.use("/user", userRouter)
app.use("/paper", paperRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at Port ${PORT}`)
})