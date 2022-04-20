import {useState,useEffect} from "react"
import Axios from "axios"


const StudentList = () => {
    const [listOfStudents, setListOfStudents] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/api/getStudents").then((response)=>{
            setListOfStudents(response.data.output);
            console.log(response.data.output)
        })
    }, [])
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <h1 class="px-4 py-2 font-medium text-3xl">Students</h1>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Level
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only"></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                 {listOfStudents.map((student) => {
                     return(
                        <tr key={student._id} class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                           {student.studentID}
                        </th>
                        <td class="px-6 py-4">
                            {(student.firstName +" "+ student.lastName)}
                        </td>
                        <td class="px-6 py-4">
                            {student.email}
                        </td>
                        <td class="px-6 py-4">
                            {student.level}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View More</a>
                        </td>
                    </tr>

                     )      
                 })}
                
            </tbody>
        </table>
    </div> 
    )
}

export default StudentList