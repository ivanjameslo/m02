import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const employees = await prisma.employees.findMany()
    console.log(employees);
    return NextResponse.json(employees)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const created = await prisma.employees.create({
            data: res
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating employee", error);
        return NextResponse.json(error, {status: 500});
    }
    
}