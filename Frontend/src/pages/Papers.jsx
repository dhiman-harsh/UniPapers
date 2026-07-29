import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"
import PaperCard from "../components/PaperCard"

const Papers = () => {
    const [papers, setPapers] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/paper`)
                const data = await res.json()
                setPapers(data.papers)
                console.log(data.papers)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    console.log(papers)

    return (
        <div className="mx-4 lg:mx-15 flex flex-col gap-4 flex-1">
            <h1 className="font-semibold text-3xl">Papers</h1>
            {papers ?
                <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {papers?.map((paper, idx) => {
                        return (
                            <PaperCard paperId={paper._id} subjectName={paper.subjectName} program={paper.program} semester={paper.semester} course={paper.course} year={paper.year} createdBy={paper.createdBy} key={idx} />
                        )
                    })}
                </div> :
                <div className="flex justify-center items-center flex-1">
                    <Spinner />
                </div>}
        </div>
    )
}

export default Papers