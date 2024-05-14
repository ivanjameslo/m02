"use client";

import React, { useEffect, useState } from 'react';

// interface PayslipData {
//     id: number,
//     employee: Employee,
//     payday: Date,
//     start_of_cutoff: Date,
//     end_of_cutoff: Date,
// }

interface Employee {
    emp_num: number;
    firstName: string;
    lastName: string;
    basicPay: number;
    assignment: AssignDesignation;
    addnlEarnings: AddnlEarnings[];
    deductions: Deductions[];
    govtContributions: GovtContributions;
    payroll: Payroll;
}

type AssignDesignation = {
    employee_type: string;
    designation: Designation;
}

type Designation = {
    designation_name: string;
    departments: Departments;
}

type Departments = {
    dept_name: string;
}

type AddnlEarnings = {
    typeOfEarnings: string,
    amount: number;
}

type Deductions = {
    typeOfDeductions: string,
    amount: number;
}

type GovtContributions = {
    sss_number: string;
    pagibig_number: string;
    philhealth_number: string;
    tin_number: string;
    sss_amount: number;
    pagibig_amount: number;
    philhealth_amount: number;
    tin_amount: number;
}

type Payroll = {
    payday: Date;
    start_of_cutoff: Date;
    end_of_cutoff: Date;
}

const Payslip = ({ params }: { params: { id: string } }) => {
    const [data, setData] = useState<Employee[]>([]);

    const fetchPayslipData = async () => {
        const response = await fetch(`/api/employees/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(Array.isArray(data) ? data : [data]);
    }
    
    useEffect(() => {
        fetchPayslipData().catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div>
                <label>Payslip</label>
            </div>

            <div>
                <h1>SAI Incoporation</h1>
                <h2>Roxas, Davao City</h2>
            </div>

            <div>
                {data && data.map((emp: Employee, id: number) => (
                    <div key={id}>
                        <div>
                            <p>
                                <span>
                                    <h3>Payday: </h3>
                                    <h3>{emp.payroll.payday.toString().split('T').shift()}</h3>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <h3>Payroll Start Period: </h3>
                                    <h3>{emp.payroll.start_of_cutoff.toString().split('T').shift()}</h3>
                                </span>
                            </p>
                            <p>
                                <span>
                                    <h3>Payroll End Period: </h3>
                                    <h3>{emp.payroll.end_of_cutoff.toString().split('T').shift()}</h3>
                                </span>
                            </p>
                        </div>
                        <div>
                            <div>
                                <h2>Basic Information</h2>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        <h3>Employee Name: </h3>
                                        <h3>{emp.firstName} {emp.lastName}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>Designation: </h3>
                                        <h3>{emp.assignment.designation.designation_name}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>Department: </h3>
                                        <h3>{emp.assignment.designation.departments.dept_name}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>Employee Type: </h3>
                                        <h3>{emp.assignment.employee_type}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>Basic Pay: </h3>
                                        <h3>{emp.basicPay}</h3>
                                    </span>
                                </p>
                            </div>

                            <div>
                                <p>
                                    <span>
                                        <h3>SSS Number: </h3>
                                        <h3>{emp.govtContributions.sss_number}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>Pagibig Number: </h3>
                                        <h3>{emp.govtContributions.pagibig_number}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>PhilHealth Number: </h3>
                                        <h3>{emp.govtContributions.philhealth_number}</h3>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <h3>TIN Number: </h3>
                                        <h3>{emp.govtContributions.tin_number}</h3>
                                    </span>
                                </p>
                            </div>

                            <div>
                                <div>
                                    <h2>Detailed Breakdowns</h2>
                                </div>

                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Earnings</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {emp.addnlEarnings.map((earnings, index) => (
                                                <tr key={index}>
                                                    <td>{earnings.typeOfEarnings}</td>
                                                    <td>{earnings.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Deductions</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {emp.deductions.map((deductions, index) => (
                                                <tr key={index}>
                                                    <td>{deductions.typeOfDeductions}</td>
                                                    <td>{deductions.amount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Government Contributions</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>SSS</td>
                                                <td>{emp.govtContributions.sss_amount}</td>
                                            </tr>
                                            <tr>
                                                <td>Pagibig</td>
                                                <td>{emp.govtContributions.pagibig_amount}</td>
                                            </tr>
                                            <tr>
                                                <td>PhilHealth</td>
                                                <td>{emp.govtContributions.philhealth_amount}</td>
                                            </tr>
                                            <tr>
                                                <td>TIN</td>
                                                <td>{emp.govtContributions.tin_amount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}                
            </div>
        </div>
    )
}
export default Payslip