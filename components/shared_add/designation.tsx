'use client'

import React, { useState, useEffect } from 'react'
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { createDesignation } from '@/app/actions/todoActions';
import { useRouter } from 'next/navigation';

const designation = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        designation_name: "",
        department_id: "",
        status: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/designation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    designation_name: formData.designation_name,
                    department_id: formData.department_id,
                    status: formData.status,
                })
            });
            router.refresh();
        } catch (error) {
            console.log(error);
        }

        setFormData({
            designation_name: "",
            department_id: "",
            status: "",
        });
    };

    //fetching for department_id dropdown
    const [departments, setDepartments] = useState([]);

    const fetchDepartments = async () => {
        const response = await fetch('/api/departments', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        setDepartments(data);
        return data;
    };

    useEffect(() => {
        fetchDepartments().catch(error => console.log(error));
      }, []);
    
    return (
        <div className= "pt-5 ">
            <form onSubmit={handleSubmit} className="mt-5 text-blue-900 px-5 grid grid-cols-13 gap-2">
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Designation Name</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <input name="designation_name" type="text" placeholder="Designation Name" onChange={handleChange} />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Department ID</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <select name="department_id" value={formData.department_id} onChange={handleChange}>
                        <option value="">Select Department</option>
                        {departments.map((departments: any) => (
                            <option key={departments.department_id} value={departments.id}>
                                {departments.dept_name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-13">
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

export default designation