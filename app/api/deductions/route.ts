import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const deductions = await prisma.deductions.findMany()
    console.log(deductions);
    return NextResponse.json(deductions)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, typeOfDeductions, amount, date } = res;
        const created = await prisma.deductions.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                typeOfDeductions,
                amount: Number(amount),
                date
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating deductions", error);
        return NextResponse.json(error, {status: 500});
    }
    
}