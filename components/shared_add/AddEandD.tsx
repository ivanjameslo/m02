"use client";

import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function EmpNumForm() {
    const [empNum, setEmpNum] = useState('');
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        router.push(`/addnlEarnings?emp_num=${empNum}`);
    };
    
    const [employees, setEmployees] = useState([]);
    const fetchEmployees = async () => {
        const response = await fetch('/api/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        setEmployees(data);
    }

    useEffect(() => {
        fetchEmployees().catch(error => console.log(error));
    }, []);

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmpNum(event.target.value);
    };

    return (
        <div className= "px-5 pt-5 text-blue-900 justify-center w-screen items-center">
            <div>
                <label className= "px-5 text-2xl font-bold text-blue-900">
                    Additional Earnings and Deduction
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="text-right col-start-1 col-end-3">
                    <label>Employee: </label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                <select name="emp_num" value={empNum} onChange={handleChange}
                    className={`w-full focus:outline-none focus:border-none ${
                        empNum ? 'text-blue-800' : 'text-gray-400'
                    }`}>
                        <option value="" disabled hidden>Select Employee</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num} className="text-blue-800">
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button onClick={() => router.push(`/addnlEarnings?emp_num=${empNum}`)}>
                        Additional Earnings
                    </button>
                    <button onClick={() => router.push(`/deductions?emp_num=${empNum}`)}>
                        Deductions
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmpNumForm;