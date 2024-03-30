import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const signatories = await prisma.signatories.findMany()
    console.log(signatories);
    return NextResponse.json(signatories)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, highersuperior, status } = res;
        const created = await prisma.signatories.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                superior: {
                    connect: { emp_num: parseInt(highersuperior) }
                },
                status: status
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating signatories", error);
        return NextResponse.json(error, {status: 500});
    }
    
}