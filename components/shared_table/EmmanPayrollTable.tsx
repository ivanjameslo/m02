"use client"
// import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface EmployeeData {
    emp_num: number,

    assignment: {
        basic_pay: number;
    };
    addnlEarnings: {
        amount: number;
    }[];
    deductions: {
        amount: number;
    }[];
    govtContributions: {
        sss_amount: number;
        pagibig_amount: number;
        philhealth_amount: number;
        tin_amount: number;
    };
}
const EmmanPayrollTable = () => {
    
    const [data, setData] = useState<EmployeeData[]>([]);
    const fetchEmpData = async () => {
        const response = await fetch('/api/payroll', {
            method: 'emmanGET',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        const rawData = await response.json();
        console.log(rawData);
    }
    useEffect(() => {
        fetchEmpData().catch(error => console.log(error));
    }, []);

  return (
    <main>
        <div>
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
                      {data.map((employees, id) => (
                        <tr key={id}>
                        <td>{employees.emp_num}</td>
                        <td>{employees.assignment.basic_pay}</td>
                        <td>{employees.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        <td>{employees.deductions.reduce((acc, curr) => acc + curr.amount, 0)}</td>
                        <td>{employees.govtContributions.sss_amount}</td>
                        <td>{employees.govtContributions.pagibig_amount}</td>
                        <td>{employees.govtContributions.philhealth_amount}</td>
                        <td>{employees.govtContributions.tin_amount}</td>
                        {/* <td>{employees.assignment.basic_pay + emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0) - emp.deductions.reduce((acc, curr) => acc + curr.amount, 0) - emp.govtContributions.sss_amount - emp.govtContributions.pagibig_amount - emp.govtContributions.philhealth_amount - emp.govtContributions.tin_amount}</td> */}
                        </tr>
                      ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default EmmanPayrollTable