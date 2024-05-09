// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
import DesignationDelete from '../shared_delete/designationDelete';


const prisma = new PrismaClient();

async function getDesignationData(){

    const designationData = await prisma.designation.findMany({
        select:{
            id: true,
            designation_name: true,
            department_id: true,
            status: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return designationData;
}

//not yet implemented
const fetchDepartments = async (data: any) => {
    const response = await fetch('/api/departments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseData = await response.json();
    const department_name = responseData.map((departments: { department_name: any; }) => departments.department_name);
    fetchDepartments(responseData);
};
//-----------------------------------------------------------------------------------------------

const designationTable = async () => {
    const designationData = await getDesignationData()
    return (

            <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
                <tbody>
                {designationData.map((designation, id) => (
                    <tr key={id}>
                        <td className= "px-5 py-5"> {designation.id} </td>
                        <td className= "px-5 py-5"> {designation.designation_name} </td>
                        <td className= "px-5 py-5"> {designation.department_id} </td>
                        <td className= "px-5 py-5"> {designation.status} </td>
                        <td>
                            <div className="flex items-center gap-5">
                            <DesignationDelete id={designation.id}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default designationTable
