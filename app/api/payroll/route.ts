import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const empDeet = await prisma.employees.findMany({
        include: {
            assignment: true,
            addnlEarnings: true,
            deductions: true,
            govtContributions: true,
        }
    })
    
    console.log(empDeet);
    return new Response(JSON.stringify(empDeet))
}

export async function POST(request: Request) {
    const json = await request.json();

    // Fetch all employees
    const employees = await prisma.employees.findMany();

    // Create a payroll record for each employee
    const created = await Promise.all(employees.map(employee => 
        prisma.payroll.create({
            data: {
                ...json,
                emp_num: employee.emp_num, // Assuming 'employeeId' is the correct field name
            },
        })
    ));

    return new NextResponse(JSON.stringify(created), { status: 201 });
}

export async function emmanGET(request: Request) {
    const payroll = await prisma.employees.findMany({
        include: {
            assignment: true,
            addnlEarnings: true,
            deductions: true,
            govtContributions: true,
        }
    });
    return NextResponse.json(payroll);
}
