// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
// import DesignationDelete from '../shared_delete/designationDelete';


const prisma = new PrismaClient();

async function getLeaveData(){

    const leaveData = await prisma.leaves.findMany({
        select:{
            id: true,
            emp_num: true,
            start_leave_date: true,
            end_leave_date: true,
            leave_type: true,
            status: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return leaveData;
}

const leaveTable = async () => {
    const leaveData = await getLeaveData()
    return (

            <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
                <tbody>
                {leaveData.map((leaves, id) => (
                    <tr key={id}>
                        <td className= "px-5 py-5"> {leaves.id} </td>
                        <td className= "px-5 py-5"> {leaves.emp_num} </td>
                        <td className= "px-5 py-5"> {leaves.start_leave_date} </td>
                        <td className= "px-5 py-5"> {leaves.end_leave_date} </td>
                        <td className= "px-5 py-5"> {leaves.leave_type} </td>
                        <td className= "px-5 py-5"> {leaves.status} </td>
                        {/* <td>
                            <div className="flex items-center gap-5">
                            <DesignationDelete id={designation.id}/>
                            </div>
                        </td> */}
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default designationTable
