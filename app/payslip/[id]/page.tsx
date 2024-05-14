"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

        <div className="px-10 mt-5 text-blue-900">
            <div>
                <label className= "text-2xl font-bold">
                Payslip
                </label>
            </div>
            
            <div className="px-40" >
                {data && data.map((emp: Employee, id: number) => (
                    <div key={id}>
                            <div className="w-auto m-10 p-10 grid grid-cols-2 gap-2 border border-blue-500 rounded-md">
                                <div className="col-start-1 col-end-2">
                                <div className="text-3xl font-bold">SAI Incorporation</div>
                                <div className="text-lg pb-5">Roxas, Davao City</div>
    
                                <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    <div className="text-right col-start-1 col-end-1">Pay Day:</div>
                                    <div className="text-left col-start-2 col-end-2">
                                        {emp.payroll.payday.toString().split('T').shift()}
                                    </div>

                                    <div className="text-right col-start-1 col-end-1">Payroll Period Start:</div>
                                    <div className="text-left col-start-2 col-end-2">
                                        {emp.payroll.start_of_cutoff.toString().split('T').shift()}
                                    </div>

                                    <div className="text-right col-start-1 col-end-1">Payroll Period End:</div>
                                    <div className="text-left col-start-2 col-end-2">
                                        {emp.payroll.end_of_cutoff.toString().split('T').shift()}
                                    </div>
                                </div>
    
    
                                </div>
    
    
    
    
                                <br />
    
                                <div className="text-xl font-bold">Employee Details:</div>
                                
                                <div className="col-start-1 col-end-1">
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                        <div className="text-right col-start-1 col-end-1">Employee Name:</div>
                                        <div className="text-left col-start-2 col-end-2 font-bold">{emp.firstName} {emp.lastName}</div>
    
                                        <div className="text-right col-start-1 col-end-1">Department:</div>
                                        <div className="text-left col-start-2 col-end-2\">{emp.assignment.designation.designation_name}</div>
    
                                        <div className="text-right col-start-1 col-end-1">Basic Pay:</div>
                                        <div className="text-left col-start-2 col-end-2">{emp.basicPay}</div>
    
                                        
                                        <div className="text-right col-start-1 col-end-1">SSS Number:</div>
                                        <div className="text-left col-start-2 col-end-2">{emp.govtContributions.sss_number}</div>
                                </div></div>
    
                                <div className="col-start-2 col-end-2">
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                        
                                        <div className="text-right col-start-1 col-end-1">Pag-Ibig Number:</div>
                                        <div className="text-left col-start-2 col-end-2">{emp.govtContributions.pagibig_number}</div>
    
                                        <div className="text-right col-start-1 col-end-1">PhilHealth Number:</div>
                                        <div className="text-left col-start-2 col-end-2">{emp.govtContributions.philhealth_number}</div>
                                        
                                        <div className="text-right col-start-1 col-end-1">TIN Number:</div>
                                        <div className="text-left col-start-2 col-end-2">{emp.govtContributions.tin_number}</div>
    
                                    </div>
                                </div>
    
                                
                                
                                <div className="text-xl font-bold pt-5">Detailed Breakdown:</div>
                                <div className="col-start-1 col-end-1">
                                        <div className="pl-10 text-left font-semibold">Additional Earnings:</div>
                    
                                        <div className="pl-10 text-right font-semibold">
                                            <table>
                                                <tbody>
                                                    {emp.addnlEarnings.map((earnings, index) => (
                                                        <tr key={index} className="font-normal">
                                                            <td className="pr-10">{earnings.typeOfEarnings}</td>
                                                            <td>{earnings.amount}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
    
                                        <br />
    
                                        <div className="pl-10 text-left font-semibold">Deductions:</div>
    
                                        <div className="pl-10 text-right font-semibold">
                                            <table>
                                                <tbody>
                                                    {emp.deductions.map((deductions, index) => (
                                                        <tr key={index} className="font-normal">
                                                            <td className="pr-10">{deductions.typeOfDeductions}</td>
                                                            <td>{deductions.amount}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
    
                                <div className="col-start-2 col-end-2">
                                        <div className="pl-10 text-left font-semibold">Government Contributions:</div>
    
                                        <div className="pl-10">
                                            <table className="px-5">
                                                <tbody className="px-5">
                                                    <tr>
                                                        <td className="pr-20">SSS</td>
                                                        <td>{emp.govtContributions.sss_amount}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pr-20">Pagibig</td>
                                                        <td>{emp.govtContributions.pagibig_amount}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pr-20">PhilHealth</td>
                                                        <td>{emp.govtContributions.philhealth_amount}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pr-20">TIN</td>
                                                        <td>{emp.govtContributions.tin_amount}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                        
                                </div>
                                <br />

                                <div className="col-start-1 col-end-1">
                                    <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    <div  className=" text-left font-semibold col-start-1 col-end-1 text-xl">Net Pay:</div>
                                    <div className="col-start-2 col-end-2 pt-2 font-bold text-left">{emp.basicPay + emp.addnlEarnings.reduce((acc, curr) => acc + curr.amount, 0) 
                                    - emp.deductions.reduce((acc, curr) => acc + curr.amount, 0)
                                    - ((emp.govtContributions.sss_amount
                                        + emp.govtContributions.pagibig_amount
                                        + emp.govtContributions.philhealth_amount
                                        + emp.govtContributions.tin_amount))}</div>
                                </div>

                                <br />
                            
                                <div className="pt-10 col-start-2 col-end-2 flex justify-left">
                                    <Link href={`/payrollTable`}>
                                    <button className="bg-blue-200 hover:bg-blue-200 text-blue-900 w-30 px-4 rounded">
                                        Back to Payroll
                                    </button>
                                    </Link>
                                </div>
                            
                                </div>
                                </div>
                                <div>
                                
                                </div>
                        
    
                    </div>
                ))} 
    
        </div></div>
    
    )
    };

    {/* -------------------------------------------------------------------------------------------------- */}
        
//         <div className="px-10 mt-5 text-blue-900">
//             <div>
//                 <label className= "text-2xl font-bold">Payslip</label>
//             </div>

//             <div>
//                 <h1>SAI Incoporation</h1>
//                 <h2>Roxas, Davao City</h2>
//             </div>

//             <div>
//                 {data && data.map((emp: Employee, id: number) => (
//                     <div key={id}>
                        
//                         <div>
//                             <p>
//                                 <span>
//                                     <h3>Payday: </h3>
//                                     <h3>{emp.payroll.payday.toString().split('T').shift()}</h3>
//                                 </span>
//                             </p>
//                             <p>
//                                 <span>
//                                     <h3>Payroll Start Period: </h3>
//                                     <h3>{emp.payroll.start_of_cutoff.toString().split('T').shift()}</h3>
//                                 </span>
//                             </p>
//                             <p>
//                                 <span>
//                                     <h3>Payroll End Period: </h3>
//                                     <h3>{emp.payroll.end_of_cutoff.toString().split('T').shift()}</h3>
//                                 </span>
//                             </p>
//                         </div>
//                         <div>
//                             <div>
//                                 <h2>Basic Information</h2>
//                             </div>
//                             <div>
//                                 <p>
//                                     <span>
//                                         <h3>Employee Name: </h3>
//                                         <h3>{emp.firstName} {emp.lastName}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>Designation: </h3>
//                                         <h3>{emp.assignment.designation.designation_name}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>Department: </h3>
//                                         <h3>{emp.assignment.designation.departments.dept_name}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>Employee Type: </h3>
//                                         <h3>{emp.assignment.employee_type}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>Basic Pay: </h3>
//                                         <h3>{emp.basicPay}</h3>
//                                     </span>
//                                 </p>
//                             </div>

//                             <div>
//                                 <p>
//                                     <span>
//                                         <h3>SSS Number: </h3>
//                                         <h3>{emp.govtContributions.sss_number}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>Pagibig Number: </h3>
//                                         <h3>{emp.govtContributions.pagibig_number}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>PhilHealth Number: </h3>
//                                         <h3>{emp.govtContributions.philhealth_number}</h3>
//                                     </span>
//                                 </p>
//                                 <p>
//                                     <span>
//                                         <h3>TIN Number: </h3>
//                                         <h3>{emp.govtContributions.tin_number}</h3>
//                                     </span>
//                                 </p>
//                             </div>

//                             <div>
//                                 <div>
//                                     <h2>Detailed Breakdowns</h2>
//                                 </div>

//                                 <div>
//                                     <table>
//                                         <thead>
//                                             <tr>
//                                                 <th>Earnings</th>
//                                                 <th>Amount</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {emp.addnlEarnings.map((earnings, index) => (
//                                                 <tr key={index}>
//                                                     <td>{earnings.typeOfEarnings}</td>
//                                                     <td>{earnings.amount}</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     <table>
//                                         <thead>
//                                             <tr>
//                                                 <th>Deductions</th>
//                                                 <th>Amount</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {emp.deductions.map((deductions, index) => (
//                                                 <tr key={index}>
//                                                     <td>{deductions.typeOfDeductions}</td>
//                                                     <td>{deductions.amount}</td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                     <table>
//                                         <thead>
//                                             <tr>
//                                                 <th>Government Contributions</th>
//                                                 <th>Amount</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>SSS</td>
//                                                 <td>{emp.govtContributions.sss_amount}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Pagibig</td>
//                                                 <td>{emp.govtContributions.pagibig_amount}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>PhilHealth</td>
//                                                 <td>{emp.govtContributions.philhealth_amount}</td>
//                                             </tr>
//                                             <tr>
//                                                 <td>TIN</td>
//                                                 <td>{emp.govtContributions.tin_amount}</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 ))}                
//             </div>
//         </div>
//     )
// }

export default Payslip



{/* <div className="px-10 mt-5 text-blue-900">
        <div>
            <label className= "text-2xl font-bold">
            Payslip
            </label>
        </div>
        
        <div className="px-40" >
            {data && data.map((emp: Employee, id: number) => (
                <div key={id}>
                        <div className="w-auto m-10 p-10 grid grid-cols-2 gap-2 border border-blue-500 rounded-md">
                            <div className="col-start-1 col-end-2">
                            <div className="text-3xl font-bold">SAI incorporation</div>
                            <div className="text-lg pb-5">Roxas, Davao City</div>

                            <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                <div className="text-right col-start-1 col-end-1">Pay Day:</div>
                                <div className="text-left col-start-2 col-end-2">
                                    {emp.payroll.payday.toString().split('T').shift()}
                                </div>

                                <div className="text-right col-start-1 col-end-1">Payroll Period Start:</div>
                                <div className="text-left col-start-2 col-end-2">
                                    {emp.payroll.start_of_cutoff.toString().split('T').shift()}
                                </div>

                                <div className="text-right col-start-1 col-end-1">Payroll Period End:</div>
                                <div className="text-left col-start-2 col-end-2">
                                    {emp.payroll.end_of_cutoff.toString().split('T').shift()}
                                </div>
                            </div>


                            </div>

                            <br />

                            <div className="text-xl font-bold">Employee Details:</div>
                            
                            <div className="col-start-1 col-end-1">
                                <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    <div className="text-right col-start-1 col-end-1">Employee Name:</div>
                                    <div className="text-left col-start-2 col-end-2= font-bold">{emp.firstName} {emp.lastName}</div>

                                    <div className="text-right col-start-1 col-end-1">Department:</div>
                                    <div className="text-left col-start-2 col-end-2= font-bold">{emp.assignment.designation.designation_name}</div>

                                    <div className="text-right col-start-1 col-end-1">Basic Pay:</div>
                                    <div className="text-left col-start-2 col-end-2">000000000000</div>

                                    
                                    <div className="text-right col-start-1 col-end-1">SSS Number:</div>
                                    <div className="text-left col-start-2 col-end-2">000000000000</div>
                            </div></div>

                            <div className="col-start-2 col-end-2">
                                <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    
                                    <div className="text-right col-start-1 col-end-1">Pag-Ibig Number:</div>
                                    <div className="text-left col-start-2 col-end-2">000000000000</div>

                                    <div className="text-right col-start-1 col-end-1">PhilHealth Number:</div>
                                    <div className="text-left col-start-2 col-end-2">000000000000</div>
                                    
                                    <div className="text-right col-start-1 col-end-1">TIN Number:</div>
                                    <div className="text-left col-start-2 col-end-2">000000000000</div>

                                </div>
                            </div>

                            
                            
                            <div className="text-xl font-bold pt-5">Detailed Breakdown:</div>
                            
                            <div className="col-start-1 col-end-1">
                                <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    <div className="pl-10 text-left col-start-1 col-end-1 font-semibold">Additional Earnings:</div>

                                    <div className="text-right col-start-1 col-end-1 font-semibold">Overtime Pay:</div>
                                    <div className="text-left col-start-2 col-end-2">0000000000000</div>

                                    <br />

                                    <div className="pl-10 text-left col-start-1 col-end-1 font-semibold">Deductions:</div>

                                    <div className="text-right col-start-1 col-end-1 font-semibold">Late:</div>
                                    <div className="text-left col-start-2 col-end-2">0000000000000</div>
                            </div></div>

                            <div className="col-start-2 col-end-2">
                                <div className="grid grid-cols-2 gap-y-2 gap-x-5">
                                    
                                    <div className="pl-10 text-left col-start-1 col-end-1 font-semibold">Governemnt Contributions:</div>

                                    <div className="text-right col-start-1 col-end-1 font-semibold">SSS:</div>
                                    <div className="text-left col-start-2 col-end-2">0000000000000</div>

                                    <div className="text-right col-start-1 col-end-1 font-semibold">Pag-Ibig:</div>
                                    <div className="text-left col-start-2 col-end-2">0000000000000</div>

                                    <div className="text-right col-start-1 col-end-1 font-semibold">PhilHealth:</div>
                                    <div className="text-left col-start-2 col-end-2">0000000000000</div>

                                </div>
                            </div>

                </div>
            ))} 

    </div>
    </div>

)
};
 */}
