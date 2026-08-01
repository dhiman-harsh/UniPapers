import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import PaperCard from "../components/PaperCard"
import { Link } from "react-router-dom"

const Papers = () => {
    const [data, setData] = useState(null)
    const [papers, setPapers] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/paper`)
                const data = await res.json()
                setData(data)
                setPapers(data.papers)
            } catch (err) {
                console.error(err.message)
            }
        })()
    }, [])
    console.log(papers)

    return (
        <div className="mx-4 lg:mx-15 flex flex-col gap-4 flex-1">
            <h1 className="font-semibold text-3xl">Papers</h1>
            {data ?
                <div className="flex flex-col flex-1">
                    {data.success ?
                        <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                            {papers?.map((paper, idx) => {
                                return (
                                    <PaperCard paperId={paper._id} subjectName={paper.subjectName} program={paper.program} semester={paper.semester} course={paper.course} year={paper.year} createdBy={paper.createdBy} key={idx} />
                                )
                            })}
                        </div> : 
                        <div className="flex flex-col gap-4 justify-center items-center flex-1">
                            <div className="text-3xl mb-3 md:mb-4 lg:text-4xl lg:mb-6 font-medium">No papers available</div>
                            <Link to="/papers/upload">
                                <button className="rounded-md bg-sky-600 text-white font-medium px-6 py-2">Upload Papers</button>
                            </Link>
                            <Link to="/">
                                <button className="rounded-md bg-neutral-300 text-black font-medium px-6 py-2">Go back to Home</button>
                            </Link>
                        </div>}
                </div> :
                <div className="flex justify-center items-center flex-1">
                    <Spinner />
                </div>}
        </div>
    )
}

export default Papers

{/* <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {papers?.map((paper, idx) => {
                        return (
                            <PaperCard paperId={paper._id} subjectName={paper.subjectName} program={paper.program} semester={paper.semester} course={paper.course} year={paper.year} createdBy={paper.createdBy} key={idx} />
                        )
                    })}
                </div> */}