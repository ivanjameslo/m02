// import { prisma } from "@/utils/prisma";
import { PrismaClient } from '@prisma/client';
// import DesignationDelete from '../shared_delete/designationDelete';


const prisma = new PrismaClient();

async function getSignatoriesData(){

    const signatoriesData = await prisma.signatories.findMany({
        select:{
            id: true,
            emp_num: true,
            highersuperior: true,
            status: true
        },
        orderBy: {
            id: 'asc'
        }
    })
  
    return signatoriesData;
}

const signatoriesTable = async () => {
    const signatoriesData = await getSignatoriesData()
    return (
            <table className="flex flex-col gap-5 items-center justify-center mt-10 w-full table-auto">
                <tbody>
                {signatoriesData.map((signatories, id) => (
                    <tr key={id}>
                        <td className= "px-5 py-5"> {signatories.id} </td>
                        <td className= "px-5 py-5"> {signatories.emp_num} </td>
                        <td className= "px-5 py-5"> {signatories.highersuperior} </td>
                        <td className= "px-5 py-5"> {signatories.status} </td>
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

export default signatoriesTable
