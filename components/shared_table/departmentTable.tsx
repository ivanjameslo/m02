// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
// import DepartmentUpdate from '../shared_update/DepartmentUpdate';
import DepartmentDelete from '../shared_delete/departmentDelete';



const prisma = new PrismaClient();

async function getDepartmentData(){

    const departmentData = await prisma.departments.findMany({
        select:{
            id: true,
            dept_name: true,
            status: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return departmentData;
}

const departmentTable = async () => {
    const departmentData = await getDepartmentData()
    return (
        <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
            <tbody>
            {departmentData.map((departments, id) => (
                <tr key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <td> {departments.id} </td>
                    <td> {departments.dept_name} </td>
                    <td> {departments.status} </td>
                    {/* <td>
                        <div className="flex items-center gap-5">
                            <DepartmentUpdate departments={departments} />
                        </div>
                    </td> */}
                    <td>
                        <div className="flex items-center gap-5">
                           <DepartmentDelete id={departments.id}/>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default departmentTable
