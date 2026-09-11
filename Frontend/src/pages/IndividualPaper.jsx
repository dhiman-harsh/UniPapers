import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Spinner from "../components/Spinner"

const IndividualPaper = () => {
    const { id } = useParams()
    const [paper, setPaper] = useState(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/paper/${id}`)
            const data = await res.json()
            if (data.success) {
                setPaper(data.paper)
                console.log(paper)
            }
        })()
    }, [])
    return (
        <div className="flex-1 mx-4 md:mx-15 flex flex-col">
            {paper ? <div className="rounded-md pb-3 flex flex-col gap-1">
                <h1 className="font-medium text-3xl capitalize">{paper.subjectName}</h1>
                <div className="tags flex flex-wrap gap-2 text-xs">
                    <span className="border rounded-full px-1.5 uppercase">{paper.program}</span>
                    <span className="border rounded-full px-1.5">{paper.semester}</span>
                    <span className="border rounded-full px-1.5 capitalize">{paper.course}</span>
                    <span className="border rounded-full px-1.5">{paper.year}</span>
                </div>
                <div>{paper.createdBy ? paper.createdBy.fullName : "Anonymous"}</div>
                <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {JSON.parse(paper.paperUrl).map((url, idx) => {
                        console.log(url)
                        return (
                            <img className="border rounded-md" key={idx} src={`${import.meta.env.VITE_API_URL}/${url}`} alt={`paper image`} />
                        )
                    })}
                </div>
                <hr className="my-4" />
                <ul className="list-disc mx-4">
                    {JSON.parse(paper.paperUrl).map((url, idx) => {
                        console.log(url)
                        return (
                            <li>
                                <Link className="font-medium hover:underline" key={idx} to={`${import.meta.env.VITE_API_URL}/${url}`}>{url.split("uploads/")[1]}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div> :
                <div className="h-full w-full flex justify-center items-center flex-1">
                    <Spinner />
                </div>}
        </div>
    )
}

export default IndividualPaper