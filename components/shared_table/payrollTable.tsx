"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

interface Employee {
    id: number;
    emp_num: number;
    basicPay: number;
    addnlEarnings: AddnlEarnings[];
    deductions: Deductions[];
    govtContributions: GovtContributions;
    payroll: Payroll;
}

type AddnlEarnings = {
    amount: number;
}

type Deductions = {
    amount: number;
}

type GovtContributions = {
    sss_amount: number;
    pagibig_amount: number;
    philhealth_amount: number;
    tin_amount: number;
}

type Payroll = {
    payday: Date;
}

const PayrollMap = () => {

    const [payrollDetails, setPayrollDetails] = useState<Employee[]>([]);
    const fetchPayrollDetails = async () => {
        const response = await fetch('/api/payroll', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        const data = await response.json();
        setPayrollDetails(data);  
    }
    useEffect(() => {
        fetchPayrollDetails().catch(error => console.log(error));
    }, []);

    return (
        <div className= "mx-10 pt-5 w-screen text-sm">
        <table>
            <thead>
                <tr >
                    <th className="w-60 py-2 text-left">Employee Number</th>
                    <th className="w-60 py-2 text-left">Payday</th>
                    <th className="w-60 py-2 text-right">Basic Pay</th>
                    <th className="w-60 py-2 text-right">Total Earnings</th>
                    <th className="w-60 py-2 text-right">Total Deductions</th>
                    <th className="w-60 py-2 text-right">SSS</th>
                    <th className="w-60 py-2 text-right">Pagibig</th>
                    <th className="w-60 py-2 text-right">PhilHealth</th>
                    <th className="w-60 py-2 text-right">Withholding Tax</th>
                    <th className="w-60 py-2 text-right pr-5">Net Pay</th>
                </tr>
            </thead>
            <tbody>
                {payrollDetails.map((emp: Employee) => (
                    <tr key={emp.id} className="mx-10 w-60 py-2 text-sm">
                        <td className="w-60 py-2 text-left">{emp.emp_num}</td>
                        <td className="w-60 py-2 text-left">{emp.payroll.payday.toString().split('T').shift()}</td>
                        <td className="w-60 py-2 text-right">{emp.basicPay}</td>
                        <td className="w-60 py-2 text-right">{emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        <td className="w-60 py-2 text-right">{emp.deductions.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        <td className="w-60 py-2 text-right">{emp.govtContributions.sss_amount}</td>
                        <td className="w-60 py-2 text-right">{emp.govtContributions.pagibig_amount}</td>
                        <td className="w-60 py-2 text-right">{emp.govtContributions.philhealth_amount}</td>
                        <td className="w-60 py-2 text-right">{emp.govtContributions.tin_amount}</td>
                        <td className="w-60 py-2 text-right pr-5">{emp.basicPay + (emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0))
                            - (emp.deductions.reduce((acc, curr) => acc + curr.amount, 0))
                            - (emp.govtContributions.sss_amount
                            + emp.govtContributions.pagibig_amount
                            + emp.govtContributions.philhealth_amount
                            + emp.govtContributions.tin_amount)}</td>
                        <td className="w-60 py-2">
                            <Link href={`/payslip/${emp.id}`}>
                                <button className="bg-blue-200 hover:bg-blue-300 text-blue-900 w-30 px-4 rounded">
                                    View
                                </button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default PayrollMap
