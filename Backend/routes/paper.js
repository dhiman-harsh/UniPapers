import express from "express"
import { restrictToLoggedIn } from "../middlewares/auth.js"
import Paper from "../models/paper.js"
import { handleCreatePaper, handleFindAllPapers } from "../controllers/paper.js"
import multer from "multer"
import path from "path"

const router = express.Router()

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve('public/uploads'))
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    })

    const upload = multer({ storage: storage })

router.get("/", handleFindAllPapers)

router.post("/upload", restrictToLoggedIn, upload.array('files', 12), handleCreatePaper)

router.get("/:id", async (req, res) => {
    const paper = await Paper.findOne({ _id: req.params.id })
    if (!paper) {
        return res.json({
            success: false,
            message: "Papers not found"
        })
    }
    return res.json({
        success: true,
        message: "Papers found",
        paper
    })
})


export default router