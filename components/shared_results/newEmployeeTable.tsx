import { prisma } from "@/utils/prisma";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

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

const newEmployeeTable = async () => {
    const employeeData = await getEmployeeData()
    return (
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
            {employeeData.map((employees: { emp_num: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; firstName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; middleName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; lastName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; address_line: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; brgy: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; province: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; country: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; zip_code: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }, id: Key | null | undefined) => (
                <div key={id} className="flex flex-row gap-5 items-center justify-center w-full">
                    <div className="flex flex-col gap-2 items-center justify-center">
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
                </div>
            ))}
        </div>
    )
}

export default newEmployeeTable