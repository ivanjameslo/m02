import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const addnlEarnings = await prisma.addnlEarnings.findMany()
    console.log(addnlEarnings);
    return NextResponse.json(addnlEarnings)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, typeOfEarnings, amount, date } = res;
        const created = await prisma.addnlEarnings.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                typeOfEarnings,
                amount: Number(amount),
                date
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating addnlEarnings", error);
        return NextResponse.json(error, {status: 500});
    }
    
}