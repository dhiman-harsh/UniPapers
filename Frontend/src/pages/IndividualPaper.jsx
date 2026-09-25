import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Spinner from "../components/Spinner"

const IndividualPaper = () => {
    const { id } = useParams()
    const [paper, setPaper] = useState(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/paper/${id}`)
            const data = await res.json()
            if (data.success) {
                setPaper(data.paper)
            }
        })()
    }, [])
    return (
        <div className="flex-1 mx-4 md:mx-15 flex flex-col">
            {paper ? <div className="rounded-md pb-3 flex flex-col gap-1">
                <h1 className="font-medium text-3xl capitalize">{paper.subjectName}</h1>
                <div className="tags flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full px-1.5 uppercase bg-neutral-200 text-neutral-700">{paper.program}</span>
                    <span className="rounded-full px-1.5 bg-neutral-200 text-neutral-700">{paper.semester}</span>
                    <span className="rounded-full px-1.5 capitalize bg-neutral-200 text-neutral-700">{paper.course}</span>
                    <span className="rounded-full px-1.5 bg-neutral-200 text-neutral-700">{paper.year}</span>
                </div>
                {paper.uploadedBy ?
                <Link to={`/user/${JSON.parse(paper.uploadedBy)._id}`} className="text-neutral-700">{JSON.parse(paper.uploadedBy).fullName}</Link> :
                <div className="text-neutral-700">Anonymous</div>}
                <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {JSON.parse(paper.paperUrl).map((url, idx) => {
                        console.log(url)
                        return (
                            <img className="rounded-lg border border-gray-200" key={idx} src={`${import.meta.env.VITE_API_URL}/${url}`} alt={`paper image`} />
                        )
                    })}
                </div>
                <hr className="my-4" />
                <ul className="list-disc mx-4">
                    {JSON.parse(paper.paperUrl).map((url, idx) => {
                        console.log(url)
                        return (
                            <li>
                                <Link className="hover:underline" key={idx} to={`${import.meta.env.VITE_API_URL}/${url}`}>Page {idx+1}</Link>
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