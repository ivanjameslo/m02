import { prisma } from "@/utils/prisma"
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Not yet verified
// Working but with different function 
// Last Prio
export async function GET(request: NextRequest){
    const govtContributions = await prisma.govtContributions.findMany()
    console.log(govtContributions);
    return NextResponse.json(govtContributions)
}

export async function POST(request: NextRequest){
    try{
        const res = await request.json();
        const { emp_num, sss_number, pagibig_number, philhealth_number, tin_number, date} = res;

        // Fetch the basicPay for the given emp_num
        const employee = await prisma.assign_designation.findUnique({
            where: { emp_num: parseInt(emp_num) },
            select: { basicPay: true }
        });

        if (!employee) {
            throw new Error('Employee not found');
        }

        const basicPay = employee.basicPay;

        // Compute the amounts based on your business logic
        const sss_amount = computeSSSAmount(basicPay);
        const pagibig_amount = computePagibigAmount(basicPay);
        const philhealth_amount = computePhilhealthAmount(basicPay);
        const tin_amount = computeTinAmount(basicPay);

        const created = await prisma.govtContributions.create({
            data: {
                employees: {
                    connect: { emp_num: parseInt(emp_num) }
                },
                sss_number,
                pagibig_number,
                philhealth_number,
                tin_number,
                sss_amount: Number(sss_amount),
                pagibig_amount: Number(pagibig_amount),
                philhealth_amount: Number(philhealth_amount),
                tin_amount: Number(tin_amount),
                date: new Date(date.date)
            }
        });

        // console.log(created);
        return NextResponse.json(created, {status: 201})
    } catch (error) {
        console.log("Error creating deductions", error);
        return NextResponse.json(error, {status: 500});
    }
}

function computeSSSAmount(basicPay: number): number {
    const sssTable = [
        [1000, 3249.99, 135],
        [3250, 3749.99, 157.50],
        [3750, 4249.99, 180],
        [4250, 4749.99, 202.5],
        [4750, 5249.99, 225],
        [5250, 5749.99, 247.5],
        [5750, 6249.99, 270],
        [6250, 6749.99, 292.5],
        [6750, 7249.99, 315],
        [7250, 7749.99, 337.5],
        [7750, 8249.99, 360],
        [8250, 8749.99, 382.5],
        [8750, 9249.99, 405],
        [9250, 9749.99, 427.5],
        [9750, 10249.99, 450],
        [10250, 10749.99, 472.5],
        [10750, 11249.99, 495],
        [11250, 11749.99, 517.5],
        [11750, 12249.99, 540],
        [12250, 12749.99, 562.5],
        [12750, 13249.99, 585],
        [13250, 13749.99, 607.5],
        [13750, 14249.99, 630],
        [14250, 14749.99, 652.5],
        [14750, 15249.99, 675],
        [15250, 15749.99, 697.5],
        [15750, 16249.99, 720],
        [16250, 16749.99, 742.5],
        [16750, 17249.99, 765],
        [17250, 17749.99, 787.5],
        [17750, 18249.99, 810],
        [18250, 18749.99, 832.5],
        [18750, 19249.99, 855],
        [19250, 19749.99, 877.5],
        [19750, 20249.99, 900],
        [20250, 20749.99, 922.5],
        [20750, 21249.99, 945],
        [21250, 21749.99, 967.5],
        [21750, 22249.99, 990],
        [22250, 22749.99, 1012.5],
        [22270, 23249.99, 1035],
        [23250, 23749.99, 1057.5],
        [23750, 24249.99, 1080],
        [24250, 24279.99, 1102.5],
        [24750, 1125],
    ];

    let sssContribution = 0;

    for (let i = 0; i < sssTable.length; i++) {
        if (i === sssTable.length - 1 && basicPay >= sssTable[i][0]) {
            sssContribution = sssTable[i][1];
            break;
        }
        if (basicPay >= sssTable[i][0] && basicPay <= sssTable[i][1]) {
            sssContribution = sssTable[i][2];
            break;
        }
    }

    return sssContribution; // This is just an example
}

function computePagibigAmount(basicPay: number): number {
    
    let pagIbigContribution = 0;

    if (basicPay <= 1500) {
        pagIbigContribution = basicPay * 0.01;
    } else if (basicPay > 1500 && basicPay < 5000) {
        pagIbigContribution = basicPay * 0.02;
    } else if (basicPay >= 5000) {
        pagIbigContribution = 100;
    }

    return pagIbigContribution; // This is just an example
}

function computePhilhealthAmount(basicPay: number): number {
    
    let philHealthContribution = 0;
    
    if (basicPay <= 10000) {
        philHealthContribution = 450 / 2;
    } else if (basicPay >= 10000.01 && basicPay <= 89999.99) {
        philHealthContribution = (basicPay * 0.05) / 2;
    } else if (basicPay >= 90000) {
        philHealthContribution = 4050;
    }
    return philHealthContribution * 0.1; // This is just an example
}

function computeTinAmount(basicPay: number): number {
    
    let taxAmount = 0;
        if (basicPay <= 20833) {
            // Tax exempted
            taxAmount = 0;
        } else if (basicPay > 20833 && basicPay <= 33332) {
            // Tax rate 15% for income between 20833 and 33332
            taxAmount = (basicPay - 20833) * 0.15;
        } else if (basicPay > 33332 && basicPay <= 66666) {
            // Tax rate 20% for income between 33333 and 66666
            taxAmount = ((basicPay - 33332) * 0.20) + 1875;
        } else if (basicPay > 66666 && basicPay <= 166666) {
            // Tax rate 25% for income between 66667 and 166666
            taxAmount = ((basicPay - 66666) * 0.25) + 8541.8;
        } else if (basicPay > 166666 && basicPay <= 666666) {
            // Tax rate 30% for income between 166667 and 666666
            taxAmount = ((basicPay - 166666) * 0.30) + 33541.8;
        } else if (basicPay > 666666) {
            // Tax rate 35% for income above 666666
            taxAmount = ((basicPay - 666666) * 0.35) + 183541.8;
        }

    return taxAmount; // This is just an example
}