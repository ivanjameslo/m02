'use client'

import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createSignatories } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const signatories = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        emp_num: "",
        highersuperior: "",
        status: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/signatories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_num: formData.emp_num,
                    highersuperior: formData.highersuperior,
                    status: formData.status,
                })
            });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
        setFormData({
            emp_num: "",
            highersuperior: "",
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
    };

    useEffect(() => {
        fetchEmployees().catch(error => console.log(error));
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
                    <label className="text-color-black text-right self-center">Higher Superior</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <Input name="highersuperior" type="Int" placeholder="Superior ID" /> */}
                    <select name="highersuperior" value={formData.highersuperior} onChange={handleChange}>
                        <option value="">Select Superior</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}>
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <Input name="status" type="text" placeholder="Status" /> */}
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div className="col-start-3 col-end-6">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
      );
}

export default signatories