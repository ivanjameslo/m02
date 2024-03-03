// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
import NewEmployeeUpdate from '../shared_update/NewEmployeeUpdate';
import NewEmployeeDelete from '../shared_delete/newEmployeeDelete';


const prisma = new PrismaClient();

async function getEmployeeData(){

    const employeeData = await prisma.employees.findMany({
        select:{
            emp_num: true,
            firstName: true,
            middleName: true,
            lastName: true,
            address_line: true,
            brgy: true,
            province: true,
            country: true,
            zip_code: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return employeeData;
}

const newEmployeeTable = async () => {
    const employeeData = await getEmployeeData()
    return (
        <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
            <tbody>
            {employeeData.map((employees, id) => (
                <tr key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <td> {employees.emp_num} </td>
                    <td> {employees.firstName} </td>
                    <td> {employees.middleName} </td>
                    <td> {employees.lastName} </td>
                    <td> {employees.address_line} </td>
                    <td> {employees.brgy} </td>
                    <td> {employees.province} </td>
                    <td> {employees.country} </td>
                    <td> {employees.zip_code} </td>
                    <td>
                        <div className="flex items-center gap-5">
                            <NewEmployeeUpdate employees={employees} />
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-5">
                           <NewEmployeeDelete />
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default newEmployeeTable
