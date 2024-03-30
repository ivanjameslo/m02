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
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div className="pt-5 text-blue-900">
            <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-13 gap-2">
                {/* <Input name="id" type="Int" value={assign_designation.id} /> */}
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Employee Number</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <Input name="emp_num" type="Int" placeholder="Employee Number" /> */}
                    <select name="emp_num" value={formData.emp_num} onChange={handleChange}>
                        <option value="">Select Employee</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}>
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Designation ID</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <Input name="designation_id" type="Int" placeholder="Designation ID" /> */}
                    <select name="designation_id" value={formData.designation_id} onChange={handleChange}>
                        <option value="">Select Designation</option>
                        {designation.map((designation: any) => (
                            <option key={designation.id} value={designation.id}>
                                {designation.designation_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Employee Type</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <select name="employee_type" value={formData.employee_type} onChange={handleChange}>
                        <option value="">Select Employee Type</option>
                        <option value="Regular">Regular</option>
                        <option value="Irregular">Irregular</option>
                        <option value="PartTime">PartTime</option>
                        <option value="Intern">Intern</option>
                        <option value="Remote">Remote</option>
                        <option value="Contractual">Contractual</option>
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Resigned">Resigned</option>
                        <option value="AWOL">AWOL</option>
                    </select>
                </div>
                
                <div className="col-start-3 col-end-6">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
      );
}

export default assignDesignation