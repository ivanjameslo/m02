import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const assign_designation = await prisma.assign_designation.findMany()
    console.log(assign_designation);
    return NextResponse.json(assign_designation)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, designation_id, employee_type, status } = res;
        const created = await prisma.assign_designation.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                designation: {
                    connect: { id: parseInt(designation_id) }
                },
                employee_type,
                status
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating assign designation", error);
        return NextResponse.json(error, {status: 500});
    }
    
}