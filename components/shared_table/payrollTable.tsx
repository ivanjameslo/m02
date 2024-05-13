"use client"
// import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// import DeletePayroll from '../ui/DeletePayroll';
import { useRouter } from 'next/navigation';

interface Employee {
    emp_num: number,
    basicPay: number,
    addnlEarnings: AddnlEarnings[];
    deductions: Deductions[];
    govtContributions: GovtContributions[];
}

type Assignment = {
    basicPay: number;
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

const PayrollMap = () => {

    const [EmpDeets, setEmpDeets] = useState<Employee[]>([]);
    const fetchEmpData = async () => {
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
        setEmpDeets(data);  
    }
    useEffect(() => {
        fetchEmpData().catch(error => console.log(error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Employee Number</th>
                    <th>Basic Pay</th>
                    <th>Total Earnings</th>
                    <th>Total Deductions</th>
                    <th>SSS</th>
                    <th>Pagibig</th>
                    <th>PhilHealth</th>
                    <th>Withholding Tax</th>
                    <th>Net Pay</th>
                </tr>
            </thead>
            <tbody>
                {EmpDeets.map((emp: Employee) => (
                    <tr key={emp.emp_num}>
                        <td>{emp.emp_num}</td>
                        <td>{emp.basicPay}</td>
                        <td>{emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        <td>{emp.deductions.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        {/* <td>{emp.govtContributions.}</td>
                        <td>{emp.govtContributions.pagibig_amount}</td>
                        <td>{emp.govtContributions.philhealth_amount}</td>
                        <td>{emp.govtContributions.tin_amount}</td>
                        <td>{emp.assignment.basic_pay + emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0) - emp.deductions.reduce((acc, curr) => acc + curr.amount, 0) - emp.govtContributions.sss_amount - emp.govtContributions.pagibig_amount - emp.govtContributions.philhealth_amount - emp.govtContributions.tin_amount}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PayrollMap