import { useParams } from "react-router-dom"

const IndividualPaper = () => {
    const params = useParams()
    return (
        <div>{params.id}</div>
    )
}

export default IndividualPaper