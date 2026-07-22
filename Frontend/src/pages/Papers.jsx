import { useEffect, useState } from "react"

const Papers = () => {
    const [papers, setPapers] = useState(null)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3000/paper`)
            const data = await res.json()
            setPapers(data.papers)
        })()
    }, [])
    console.log(papers)

    return (
        <div className="mx-4 lg:mx-15 flex flex-col gap-4">
            <h1 className="font-semibold text-3xl">Papers</h1>
            <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {papers?.map((paper, idx) => {
                    return (
                        <div className="border rounded-md px-4 py-3 flex flex-col gap-1">
                            <div className="font-semibold text-lg capitalize">{paper.subjectName}</div>
                            <div className="tags flex flex-wrap gap-2 text-xs">
                                <div className="border rounded-full px-1.5 uppercase">{paper.program}</div>
                                <div className="border rounded-full px-1.5">Sem {paper.semester}</div>
                                <div className="border rounded-full px-1.5 capitalize">{paper.course}</div>
                                <div className="border rounded-full px-1.5">{paper.year}</div>
                            </div>
                            <div className="text-sm">by Harsh Dhiman</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Papers