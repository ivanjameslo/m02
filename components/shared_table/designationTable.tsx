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

const designationTable = async () => {
    const designationData = await getDesignationData()
    return (
        <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
            <tbody>
            {designationData.map((designation, id) => (
                <tr key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <td> {designation.id} </td>
                    <td> {designation.designation_name} </td>
                    <td> {designation.department_id} </td>
                    <td> {designation.status} </td>
                    {/* <td>
                        <div className="flex items-center gap-5">
                            <NewEmployeeUpdate employees={employees} />
                        </div>
                    </td>
                    */}
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
