import { prisma } from "@/utils/prisma";

const newEmployeeTable = () => {
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
                emp_num: 'asc'
            }
        })
      
        return employeeData;
      }
}

export default newEmployeeTable