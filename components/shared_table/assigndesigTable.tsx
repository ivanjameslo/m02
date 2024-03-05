// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
import AssignDesigUpdate from '../shared_update/AssignDesigUpdate';
import AssignDesigDelete from '../shared_delete/assigndesigDelete';

const prisma = new PrismaClient();

async function getAssignData(){

    const assignData = await prisma.assign_designation.findMany({
        select:{
            id: true,
            emp_num: true,
            designation_id: true,
            employee_type: true,
            status: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return assignData;
}

const assignTable = async () => {
    const assignData = await getAssignData()
    return (
        <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
            <tbody>
            {assignData.map((assign_designation, id) => (
                <tr key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <td> {assign_designation.id} </td>
                    <td> {assign_designation.emp_num} </td>
                    <td> {assign_designation.designation_id} </td>
                    <td> {assign_designation.employee_type} </td>
                    <td> {assign_designation.status} </td>
                    <td>
                        <div className="flex items-center gap-5">
                            <AssignDesigUpdate assign_designation={assign_designation} />
                        </div>
                    </td> 
                    <td>
                        <div className="flex items-center gap-5">
                           <AssignDesigDelete id={assign_designation.id}/>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default assignTable
