import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const leaves = await prisma.leaves.findMany()
    console.log(leaves);
    return NextResponse.json(leaves)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, start_leave_date, end_leave_date, leave_type, status } = res;
        const created = await prisma.leaves.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                start_leave_date,
                end_leave_date,
                leave_type,
                status
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating leaves", error);
        return NextResponse.json(error, {status: 500});
    }
    
}