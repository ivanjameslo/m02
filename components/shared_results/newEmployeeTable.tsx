// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
import NewEmployeeUpdate from '../shared_update/NewEmployeeUpdate';

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
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
            {employeeData.map((employees, id) => (
                <div key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>{employees.id}</p>
                        <p>{employees.emp_num}</p>
                        <p>{employees.firstName}</p>
                        <p>{employees.middleName}</p>
                        <p>{employees.lastName}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <p>{employees.address_line}</p>
                        <p>{employees.brgy}</p>
                        <p>{employees.province}</p>
                        <p>{employees.country}</p>
                        <p>{employees.zip_code}</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <NewEmployeeUpdate employees={employees} />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default newEmployeeTable

// import { useEffect, useState } from 'react';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function getEmployeeData(){
//     const employeeData = await prisma.employees.findMany({
//         select:{
//             emp_num: true,
//             firstName: true,
//             middleName: true,
//             lastName: true,
//             address_line: true,
//             brgy: true,
//             province: true,
//             country: true,
//             zip_code: true
//         },
//         orderBy: {
//             emp_num: 'asc'
//         }
//     })
  
//     return employeeData;
// }

// const NewEmployeeTable = () => {
// const [employeeData, setEmployeeData] = useState<{ emp_num: number; firstName: string; middleName: string; lastName: string; address_line: string; brgy: string; province: string; country: string; zip_code: number; }[]>([]);

// useEffect(() => {
//     getEmployeeData().then(data => setEmployeeData(data));
// }, [getEmployeeData]);

//   return (
//     <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
//         {employeeData.map((employees, id) => (
//             <div key={id} className="flex flex-row gap-5 items-center justify-center w-full">
//                 <div className="flex flex-col gap-2 items-center justify-center">
//                     <p>{employees.emp_num}</p>
//                     <p>{employees.firstName}</p>
//                     <p>{employees.middleName}</p>
//                     <p>{employees.lastName}</p>
//                 </div>
//                 <div className="flex flex-col gap-2 items-center justify-center">
//                     <p>{employees.address_line}</p>
//                     <p>{employees.brgy}</p>
//                     <p>{employees.province}</p>
//                     <p>{employees.country}</p>
//                     <p>{employees.zip_code}</p>
//                 </div>
//             </div>
//         ))}
//     </div>
//   );
// };

// export default NewEmployeeTable;
