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
            payroll: true
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
    const created = await Promise.all(employees.map(employee => {
        return prisma.payroll.create({
            data: {
                ...json,
                emp_num: employee.emp_num,
            },
        });
    }));

    return new NextResponse(JSON.stringify(created), { status: 201 });
}