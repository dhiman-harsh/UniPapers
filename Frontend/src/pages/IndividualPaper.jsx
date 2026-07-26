import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const IndividualPaper = () => {
    const { id } = useParams()
    const [paper, setPaper] = useState(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/paper/${id}`)
            const data = await res.json()
            if (data.success) {
                setPaper(data.paper)
            }
        })()
    }, [])
    return (
        <div className="flex-1 border mx-15">
            {paper ? <div className="border rounded-md px-4 py-3 flex flex-col gap-1">
                <h1 className="font-medium text-2xl">{paper.subjectName}</h1>
                <div className="tags flex flex-wrap gap-2 text-xs">
                    <span className="border rounded-full px-1.5 uppercase">{paper.program}</span>
                    <span className="border rounded-full px-1.5">{paper.semester}</span>
                    <span className="border rounded-full px-1.5 capitalize">{paper.course}</span>
                    <span className="border rounded-full px-1.5">{paper.year}</span>
                </div>
                <div>{paper.createdBy ? paper.createdBy.fullName : "Anonymous"}</div>
            </div> : <div>Paper not found</div>}
        </div>
    )
}

export default IndividualPaper