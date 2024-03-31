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

const RdesignationTable = async () => {
    const designationData = await getDesignationData()
    return (
        <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
            <tbody>
            {designationData.map((designation, id) => (
                <tr key={id} className="flex flex-row items-center justify-center w-full">
                    <td className="px-5 py-5"> {designation.id} </td>
                    <td className="px-5 py-5"> {designation.designation_name} </td>
                    <td className="px-5 py-5"> {designation.department_id} </td>
                    <td className="px-5 py-5"> {designation.status} </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default RdesignationTable