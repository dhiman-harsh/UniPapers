import { Link } from "react-router-dom"

const PaperCard = ({paperId, subjectName, program, semester, course, year, createdBy}) => {
    return (
        <Link to={`/papers/${paperId}`} className="rounded-md px-4 py-3 flex flex-col gap-1 bg-neutral-100 border border-gray-300 hover:border-gray-400">
            <div className="font-semibold text-lg capitalize">{subjectName}</div>
            <div className="tags flex flex-wrap gap-2 text-xs">
                <div className="rounded-full px-1.5 uppercase bg-neutral-200 text-neutral-700">{program}</div>
                <div className="rounded-full px-1.5 bg-neutral-200 text-neutral-700">Sem {semester}</div>
                <div className="rounded-full px-1.5 capitalize bg-neutral-200 text-neutral-700">{course}</div>
                <div className="rounded-full px-1.5 bg-neutral-200 text-neutral-700">{year}</div>
            </div>
            {
                createdBy ? <Link to={`/user/${JSON.parse(createdBy)._id}`} className="text-sm text-neutral-700">by <span className="font-medium">{JSON.parse(createdBy).fullName}</span></Link> :
                <div className="text-sm">by Anonymous</div>
            }
        </Link>
    )
}

export default PaperCard