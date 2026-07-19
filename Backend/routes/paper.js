import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    return res.json({msg: "all papers"})
})

router.get("/:id", (req, res) => {
    return res.json({msg: "paper by id"})
})

router.post("/upload", (req, res) => {
    return res.json({msg: "upload paper"})
})

export default router