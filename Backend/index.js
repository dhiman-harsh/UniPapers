import 'dotenv/config'

import express from "express"
import staticRouter from "./routes/static.js"
import userRouter from "./routes/user.js"
import paperRouter from "./routes/paper.js"
import { connectDB } from "./services/connection.js"
import { checkAuth, restrictToLoggedIn } from './middlewares/auth.js'
import cors from "cors"
import path from "path"

const app = express()
const PORT = process.env.PORT || 3000

connectDB(`${process.env.MONGO_DB_URL}`)

app.use(cors())
app.use(express.static(path.resolve("public")));
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

app.use("/", checkAuth, staticRouter)
app.use("/user", userRouter)
app.use("/paper", paperRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at Port ${PORT}`)
})