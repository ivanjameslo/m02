'use client'

import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createAssignDesignation } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const assignDesignation = () => {


    const router = useRouter();

    const [formData, setFormData] = useState({
        emp_num: "",
        designation_id: "",
        employee_type: "",
        basicPay: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/assign_designation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_num: formData.emp_num,
                    designation_id: formData.designation_id,
                    employee_type: formData.employee_type,
                    basicPay: Number(formData.basicPay),
                    status: formData.status,
                })
            });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
        setFormData({
            emp_num: "",
            designation_id: "",
            employee_type: "",
            basicPay: "",
            status: "",
        });
    };

    //fetching for dropdowns
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

    const [designation, setDesignation] = useState([]);
    const fetchDesignation = async () => {
        const response = await fetch('/api/designation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        setDesignation(data);
    }

    useEffect(() => {
        fetchDesignation().catch(error => console.log(error));
    }, []);


    return (
        <div className="px-5 pt-5 text-blue-900 justify-center w-screen">
            <div>
                <label className= "px-5 text-2xl font-bold text-blue-900">
                Assign Designation
                </label>
            </div>
            
            <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-7 gap-2 items-center">
                {/* <Input name="id" type="Int" value={assign_designation.id} /> */}
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Employee Number</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    {/* <Input name="emp_num" type="Int" placeholder="Employee Number" /> */}
                    <select name="emp_num" value={formData.emp_num} onChange={handleChange}
                    className={`w-full focus:outline-none focus:border-none ${
                        formData.emp_num ? 'text-blue-800' : 'text-gray-400'
                    }`}>
                        <option value="" disabled hidden>Select Employee</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num} className="text-blue-800">
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Designation ID</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    {/* <Input name="designation_id" type="Int" placeholder="Designation ID" /> */}
                    <select name="designation_id" value={formData.designation_id} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.designation_id ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                            <option value="" disabled hidden>Select Designation</option>
                                {designation.map((designation: any) => (
                                    <option key={designation.id} value={designation.id} className="text-blue-800">
                                        {designation.designation_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Employee Type</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    <select name="employee_type" value={formData.employee_type} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.status ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                            <option value="" disabled hidden>Select Employee Type</option>
                            <option value="Regular"     className="text-blue-800">Regular</option>
                            <option value="Irregular"   className="text-blue-800">Irregular</option>
                            <option value="PartTime"    className="text-blue-800">PartTime</option>
                            <option value="Intern"      className="text-blue-800">Intern</option>
                            <option value="Remote"      className="text-blue-800">Remote</option>
                            <option value="Contractual" className="text-blue-800">Contractual</option>
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Basic Pay</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    <input name="basicPay" type="Float" placeholder="Amount" onChange={handleChange} className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>


                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                <select name="status" value={formData.status} onChange={handleChange}
                    className={`w-full focus:outline-none focus:border-none ${
                        formData.status ? 'text-blue-800' : 'text-gray-400'
                    }`}>
                        <option value="" disabled hidden>Select Status</option>
                        <option value="Active"   className="text-blue-800">Active</option>
                        <option value="Resigned" className="text-blue-800">Resigned</option>
                        <option value="AWOL"     className="text-blue-800">AWOL</option>
                    </select>
                </div>
                
                <div className="col-start-5 col-end-7">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
      );
}

export default assignDesignation