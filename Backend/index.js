import express from "express"
import staticRouter from "./routes/static.js"
import userRouter from "./routes/user.js"
import paperRouter from "./routes/paper.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", staticRouter)
app.use("/user", userRouter)
app.use("/paper", paperRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at Port ${PORT}`)
})