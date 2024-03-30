import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const designation = await prisma.designation.findMany()
    console.log(designation);
    return NextResponse.json(designation)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { designation_name, department_id, status } = res;
        const created = await prisma.designation.create({
            data: {
                designation_name: designation_name,
                departments: {
                    connect: { id: parseInt(department_id) }
                },
                status: status
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating departments", error);
        return NextResponse.json(error, {status: 500});
    }
    
}