// import { prisma } from "@/utils/prisma";
// import React from 'react';
import { PrismaClient } from '@prisma/client';
import NewEmployeeUpdate from '../shared_update/NewEmployeeUpdate';
import NewEmployeeDelete from '../shared_delete/newEmployeeDelete';
import { deleteEmployee } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';



const prisma = new PrismaClient();

async function getEmployeeData(){

    const employeeData = await prisma.employees.findMany({
        select:{
            id: true,
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
                <tr key={id}>
                    <td className= "px-5 py-5"> {employees.id} </td>
                    <td className= "px-5 py-5"> {employees.emp_num} </td>
                    <td className= "px-5 py-5"> {employees.firstName} </td>
                    <td className= "px-5 py-5"> {employees.middleName} </td>
                    <td className= "px-5 py-5"> {employees.lastName} </td>
                    <td className= "px-5 py-5"> {employees.address_line} </td>
                    <td className= "px-5 py-5"> {employees.brgy} </td>
                    <td className= "px-5 py-5"> {employees.province} </td>
                    <td className= "px-5 py-5"> {employees.country} </td>
                    <td className= "px-5 py-5"> {employees.zip_code} </td>
                    <td>
                        <div className="flex items-center gap-5">
                            <NewEmployeeUpdate employees={employees} />
                        </div>
                    </td>
                    <td>
                        <div className="flex items-center gap-5">
                            <NewEmployeeDelete emp_num={employees.emp_num} />
                        </div> 
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default newEmployeeTable
