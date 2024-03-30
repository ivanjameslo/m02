import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const departments = await prisma.departments.findMany()
    console.log(departments);
    return NextResponse.json(departments)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const created = await prisma.departments.create({
            data: res
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating departments", error);
        return NextResponse.json(error, {status: 500});
    }
    
}