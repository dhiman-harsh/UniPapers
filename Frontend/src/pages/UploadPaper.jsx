import { useContext, useState } from "react"
import { authContext } from "../../context/Auth"

const UploadPaper = () => {
    const { token } = useContext(authContext)

    const [subjectName, setSubjectName] = useState()
    const [program, setProgram] = useState()
    const [course, setCourse] = useState()
    const [semester, setSemester] = useState()
    const [year, setYear] = useState()
    const [files, setFiles] = useState()

    const handleFile = (e) => {
        setFiles([...e.target.files])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        files.forEach(file => {
            formData.append("files", file)
        })
        formData.append("subjectName", subjectName.toLowerCase())
        formData.append("program", program.toLowerCase())
        formData.append("course", course.toLowerCase())
        formData.append("semester", semester)
        formData.append("year", year)

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/paper/upload`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            })
            console.log(response.body)
            if (response.ok) {
                alert('Files successfully uploaded!');
            } else {
                alert('Server error during upload.');
            }
        } catch (err) {
            console.error("network error:", err)
        }
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
            <h1 className="font-semibold text-3xl">Upload Paper</h1>
            <form className="w-full px-8 md:px-0 max-w-md md:mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={subjectName} onChange={e => setSubjectName(e.target.value)} type="text" name="subjectName" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_text" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={program} onChange={e => setProgram(e.target.value)} type="text" name="program" id="floating_text" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_text" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Program (Ex. BA, BCA etc.)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={course} onChange={e => setCourse(e.target.value)} type="text" name="Course" id="floating_repeat_text" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_text" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Course (Ex. AEC, VAC, Other etc.)</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={semester} onChange={e => setSemester(e.target.value)} type="number" name="semester" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Semester (Ex. 5)</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={year} onChange={e => setYear(e.target.value)} type="number" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Year (Ex. 2026)</label>
                    </div>
                </div>
                <div>
                    {/* <label class="block mb-2.5 text-sm font-medium text-heading" for="multiple_files">Upload multiple files</label> */}
                    <input class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body" id="multiple_files" type="file" multiple onChange={handleFile} />
                </div>
                <button type="submit" className="w-full mt-6 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>
        </div>
    )
}

export default UploadPaper