import { Link } from "react-router-dom"

const PaperCard = ({paperId, subjectName, program, semester, course, year, createdBy}) => {
    return (
        <Link to={`/papers/${paperId}`} className="border rounded-md px-4 py-3 flex flex-col gap-1">
            <div className="font-semibold text-lg capitalize">{subjectName}</div>
            <div className="tags flex flex-wrap gap-2 text-xs">
                <div className="border rounded-full px-1.5 uppercase">{program}</div>
                <div className="border rounded-full px-1.5">Sem {semester}</div>
                <div className="border rounded-full px-1.5 capitalize">{course}</div>
                <div className="border rounded-full px-1.5">{year}</div>
            </div>
            <div className="text-sm">by {createdBy ? createdBy.fullName : "Anonymous"}</div>
        </Link>
    )
}

export default PaperCard