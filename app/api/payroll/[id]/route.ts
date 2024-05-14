import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: Request, { params } : { params: {id: string}}){
    const id = params.id
    const payslip = await prisma.payroll.findUnique({
        where: {
            id: parseInt(id, 10)
        },
        include: {
            employees: {
                include: {
                    assignment: {
                        include: {
                            designation: true
                        }
                    },
                    addnlEarnings: true,
                    deductions: true,
                    govtContributions: true
                }
            }
        }
    });
    return NextResponse.json(payslip);
}