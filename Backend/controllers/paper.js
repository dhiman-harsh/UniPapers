import Paper from "../models/paper.js"
import multer from "multer"

export const handleFindAllPapers = async (req, res) => {
    try {
        const queryParams = req.query
        let papers = null
        if (queryParams) {
            papers = await Paper.find({ ...queryParams })
        } else {
            papers = await Paper.find({})
        }
        if (!papers || papers.length <= 0) {
            return res.json({
                success: false,
                message: "Papers not found"
            })
        }
        return res.json({
            success: true,
            message: "Papers found",
            papers
        })
    } catch (err) {
        console.log(err)
        return res.json({
            success: false,
            message: "Internal server error."
        })
    }
}

export const handleCreatePaper = async (req, res) => {
    const body = req.body
    const files = req.files
    const filesPath = []
    files.forEach((file) => {
        filesPath.push(`/uploads/${file.filename}`)
    })
    try {
        const paper = await Paper.create({ ...body, createdBy: body.createdBy, "paperUrl": JSON.stringify(filesPath) })
        return res.status(201).json({
            success: true,
            message: "Paper created successfully.",
            paper
        })
    } catch (err) {
        console.error("network error:", err)
        return res.status(201).json({
            success: false,
            message: "Something went wrong.",
        })
    }
}