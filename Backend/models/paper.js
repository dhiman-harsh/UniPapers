import mongoose from "mongoose"

const paperSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        enum: ["aec", "sec", "vac", "mdc", "other"],
        default: "other"
    },
    year: {
        type: Number,
        required: true
    },
    paperUrl: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
}, { timestamps: true })

const Paper = mongoose.model("papers", paperSchema)

export default Paper