import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const payroll  = await prisma.payroll.findMany()
    console.log(payroll);
    return NextResponse.json(payroll)
}

// export async function POST(request: NextRequest){
//     try{
//         const res = await request.json();
//         const { emp_num, payday, start_of_cutoff, end_of_cutoff } = res;

//         // Fetch basic pay for the employee
//         const assignDesignationRecord = await prisma.assign_designation.findUnique({
//             where: {
//                 emp_num: parseInt(emp_num),
//             },
//         });

//         const basicPay = assignDesignationRecord?.basicPay;

//         // Fetch additional earnings for the employee within the cutoff dates
//         const addnlEarningsRecords = await prisma.addnlEarnings.findMany({
//             where: {
//                 emp_num: parseInt(emp_num),
//                 date: {
//                     gte: new Date(start_of_cutoff),
//                     lte: new Date(end_of_cutoff),
//                 },
//             },
//         });

//         // Fetch deductions for the employee within the cutoff dates
//         const deductionsRecords = await prisma.deductions.findMany({
//             where: {
//                 emp_num: parseInt(emp_num),
//                 date: {
//                     gte: new Date(start_of_cutoff),
//                     lte: new Date(end_of_cutoff),
//                 },
//             },
//         });

//         // Fetch government contributions for the employee
//         const govtContributionsRecord = await prisma.govtContributions.findMany({
//             where: {
//                 emp_num: parseInt(emp_num),
//             },
//         });

//         // Fetch SSS, Pag-IBIG, PhilHealth, and tax for the employee
//         let sss, pagibig, philhealth, tax;

//         if (govtContributionsRecord && govtContributionsRecord.length > 0){
            
//             sss = computeSSS(govtContributionsRecord[0]?.sss_amount ?? 0, basicPay);
//             pagibig = computePagibig(govtContributionsRecord[0]?.pagibig_amount ?? 0, basicPay);
//             philhealth = computePhilhealth(govtContributionsRecord[0]?.philhealth_amount ?? 0, basicPay);
//             tax = computeTax(govtContributionsRecord[0]?.tin_amount ?? 0, basicPay);
//         }
        
//         // Calculate the total additional earnings and deductions
//         const totalAddnlEarnings = addnlEarningsRecords.reduce((sum, record) => sum + Number(record.amount), 0);
//         const totalDeductions = deductionsRecords.reduce((sum, record) => sum + Number(record.amount), 0);

//         // Compute the net pay
//         const netPay = Number(assignDesignationRecord?.basicPay) + totalAddnlEarnings - totalDeductions - Number(govtContributionsRecord[0]?.sss_amount) - Number(govtContributionsRecord[0]?.pagibig_amount) - Number(govtContributionsRecord[0]?.philhealth_amount) - Number(govtContributionsRecord[0]?.tin_amount);        
        
//         const created = await prisma.payroll.create({
//             data: {
//                 employees: {
//                     connect: { emp_num: parseInt(emp_num) }
//                 },
//             payday,
//             start_of_cutoff,
//             end_of_cutoff,
//             basicPay: Number(assignDesignationRecord?.basicPay),
//             addnlEarnings: totalAddnlEarnings,
//             deductions: totalDeductions,
//             sss: computeSSS(govtContributionsRecord[0]?.sss_amount, basicPay),
//             pagibig: computePagibig(govtContributionsRecord[0]?.pagibig_amount, basicPay),
//             philhealth: computePhilhealth(govtContributionsRecord[0]?.philhealth_amount, basicPay),
//             tax: computeTax(govtContributionsRecord[0]?.tin_amount, basicPay),
// }
//         });

//         return NextResponse.json(created, {status: 201})
//     } catch (error) {
//         console.log("Error creating payroll", error);
//         return NextResponse.json(error, {status: 500});
//     }
// }

// const sssTable = [
//     [1000, 3249.99, 135],
//     [3250, 3749.99, 157.50],
//     [3750, 4249.99, 180],
//     [4250, 4749.99, 202.5],
//     [4750, 5249.99, 225],
//     [5250, 5749.99, 247.5],
//     [5750, 6249.99, 270],
//     [6250, 6749.99, 292.5],
//     [6750, 7249.99, 315],
//     [7250, 7749.99, 337.5],
//     [7750, 8249.99, 360],
//     [8250, 8749.99, 382.5],
//     [8750, 9249.99, 405],
//     [9250, 9749.99, 427.5],
//     [9750, 10249.99, 450],
//     [10250, 10749.99, 472.5],
//     [10750, 11249.99, 495],
//     [11250, 11749.99, 517.5],
//     [11750, 12249.99, 540],
//     [12250, 12749.99, 562.5],
//     [12750, 13249.99, 585],
//     [13250, 13749.99, 607.5],
//     [13750, 14249.99, 630],
//     [14250, 14749.99, 652.5],
//     [14750, 15249.99, 675],
//     [15250, 15749.99, 697.5],
//     [15750, 16249.99, 720],
//     [16250, 16749.99, 742.5],
//     [16750, 17249.99, 765],
//     [17250, 17749.99, 787.5],
//     [17750, 18249.99, 810],
//     [18250, 18749.99, 832.5],
//     [18750, 19249.99, 855],
//     [19250, 19749.99, 877.5],
//     [19750, 20249.99, 900],
//     [20250, 20749.99, 922.5],
//     [20750, 21249.99, 945],
//     [21250, 21749.99, 967.5],
//     [21750, 22249.99, 990],
//     [22250, 22749.99, 1012.5],
//     [22270, 23249.99, 1035],
//     [23250, 23749.99, 1057.5],
//     [23750, 24249.99, 1080],
//     [24250, 24279.99, 1102.5],
//     [24750, 1125],
// ];

// function computeSSS(sss_amount: number, basicPay: number): number {
//     let sssContribution = 0;
//         for (let i = 0; i < sssTable.length; i++) {
//             if (i === sssTable.length - 1 && basicPay >= sssTable[i][0]) {
//                 sssContribution = sssTable[i][1];
//                 break;
//             }
//             if (basicPay >= sssTable[i][0] && basicPay <= sssTable[i][1]) {
//                 sssContribution = sssTable[i][2];
//                 break;
//             }
//         }
//     return sss_amount;
// }

// function computePagibig(pagibig_amount: number, basicPay: number): number {
//     return pagibig_amount;
// }

// function computePhilhealth(philhealth_amount: number, basicPay: number): number {
//     return philhealth_amount;
// }

// function computeTax(tin_amount: number, basicPay: number): number {
//     return tin_amount;
// }

// export async function POST(request: NextRequest){
//     try{
//         const res = await request.json();

//         const { payday, start_of_cutoff, end_of_cutoff } = res;
        
//         const created = await prisma.payroll.create({
//             data: {
//                 employees: {
//                     connect: employees.map(employee => ({emp_num: employee.emp_num}))
//                 },
//                 payday,
//                 start_of_cutoff,
//                 end_of_cutoff,
//                 basicPay: Number(basicPay),
//                 addnlEarnings: Number(addnlEarnings),
//                 deductions: Number(deductions),
//                 sss: Number(sss),
//                 pagibig: Number(pagibig),
//                 philhealth: Number(philhealth),
//                 tax: Number(tax)
//             }
//         });

//         // console.log(created);
//         return NextResponse.json(created, {status: 201})
//     } catch (error) {
//         console.log("Error creating deductions", error);
//         return NextResponse.json(error, {status: 500});
//     }
    
// }

export async function POST(request: NextRequest){
    try{
        const res = await request.json();

        const { payday, start_of_cutoff, end_of_cutoff } = res;
        
        const created = await prisma.payroll.create({
            data: {
                payday: new Date(payday),
                start_of_cutoff: new Date(start_of_cutoff),
                end_of_cutoff: new Date(end_of_cutoff),
            }
        });

        // Fetch all employees and their related data
        const employees = await prisma.employees.findMany({
            include: {
                assignment: true,
                addnlEarnings: {
                    where: {
                        date: {
                            gte: new Date(start_of_cutoff),
                            lte: new Date(end_of_cutoff),
                        },
                    },
                },
                deductions: {
                    where: {
                        date: {
                            gte: new Date(start_of_cutoff),
                            lte: new Date(end_of_cutoff),
                        },
                    },
                },
                govtContributions: true,
            },
        });

        // Prepare the data for the table
        const tableData = employees.map(employee => ({
            emp_num: employee.emp_num,
            basicPay: employee.assignment[0]?.basicPay,
            addnlEarnings: employee.addnlEarnings.reduce((sum, record) => sum + Number(record.amount), 0),
            deductions: employee.deductions.reduce((sum, record) => sum + Number(record.amount), 0),
            sss: employee.govtContributions[0]?.sss_amount,
            pagibig: employee.govtContributions[0]?.pagibig_amount,
            philhealth: employee.govtContributions[0]?.philhealth_amount,
            tax: employee.govtContributions[0]?.tin_amount,
        }));

        // Return the created payroll record and the table data
        return NextResponse.json({ created, tableData });
    } catch (error) {
        console.log("Error creating payroll", error);
        return NextResponse.json(error, {status: 500});
    }
}