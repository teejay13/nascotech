import { useState } from "react"
import Axios from "axios"

const AddStudent = () => {

    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [studentID,setStudentID] = useState("")
    const [email,setEmail] = useState("")
    const [telephone,setTelephone] = useState("")
    const [dob,setDOB] = useState("")
    const [level,setLevel] = useState("")


    const createStudent = (event) => {
        event.preventDefault();

        Axios.post("http://localhost:5000/api/getStudents",{
            studentID,
            firstName,
            lastName,
            email,
            telephone,
            dob,
            level,
        }).then((response) => {
            alert("Student Created")
            setFirstName('')
            setLastName('')
            setStudentID('')
            setEmail('')
            setTelephone('')
            setDOB('')
            setLevel('')
        })
    }


    return (
        <div className="p-8 rounded border border-gray-200">
            <h1 className="font-medium text-3xl">Add Student</h1>
            <p className="text-gray-600 mt-6">Online student registration system.</p>

            <form onSubmit={createStudent}>
                <div className="mt-8 grid lg:grid-cols-3 gap-4">

                <div>
                    <label htmlFor="studentID" className="text-sm text-gray-700 block mb-1 font-medium">Student Number</label>
                    <input type="text" name="studentID" id="studentID" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="eg. MK2578725" onChange={(event) => {setStudentID(event.target.value)}} />
                </div>

                <div>
                    <label htmlFor="firstName" className="text-sm text-gray-700 block mb-1 font-medium">First Name</label>
                    <input type="text" name="firstName" id="firstName" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your first name" onChange={(event) => {setFirstName(event.target.value)}} />
                </div>

                <div>
                    <label htmlFor="lastName" className="text-sm text-gray-700 block mb-1 font-medium">Last Name</label>
                    <input type="text" name="lastName" id="lastName" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your last name" onChange={(event) => {setLastName(event.target.value)}} />
                </div>

                <div>
                    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Address</label>
                    <input type="text" name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" onChange={(event) => {setEmail(event.target.value)}} />
                </div>

                <div>
                    <label htmlFor="telephone" className="text-sm text-gray-700 block mb-1 font-medium">Phone Number</label>
                    <input type="text" name="telephone" id="telephone" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="### ### ####" onChange={(event) => {setTelephone(event.target.value)}} />
                </div>

                <div>
                    <label htmlFor="dob" className="text-sm text-gray-700 block mb-1 font-medium">Date of birth</label>
                    <input type="date" name="dob" id="dob" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(01/01/1993)" onChange={(event) => {setDOB(event.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="level" className="text-sm text-gray-700 block mb-1 font-medium">Year Level</label>
                    <select name="level" id="level" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" onChange={(event) => {setLevel(event.target.value)}}>
                        <option>select a group</option>
                        <option>100</option>
                        <option>200</option>
                        <option>300</option>
                        <option>400</option>
                    </select>
                </div>

                </div>

                <div className="space-x-4 mt-8">
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Create</button>
            
                </div>
            </form>
        </div>
    )
}

export default AddStudent