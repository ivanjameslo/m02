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
        <div className= "px-5 pt-5 text-blue-900 justify-center w-screen items-center">
            <div>
                <label className= "px-5 text-2xl font-bold text-blue-900">
                Create New Designation
                </label>
            </div>

            <div className= "pt-5 ">
                <form onSubmit={handleSubmit} className="mt-5 text-blue-900 px-5 grid grid-cols-7 gap-2 items-center">
                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-blue-800 text-right self-center">Designation Name</label>
                    </div>
                    <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                        <input name="designation_name" type="text" placeholder="Enter Designation Name" onChange={handleChange} 
                        className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                    </div>

                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">Department ID</label>
                    </div>
                    <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                        <select name="department_id" value={formData.department_id} onChange={handleChange}
                            className={`w-full focus:outline-none focus:border-none ${
                                formData.department_id ? 'text-blue-800' : 'text-gray-400'
                            }`}>
                            <option value="" disabled hidden>Select Department</option>
                            {departments.map((departments: any) => (
                                <option key={departments.department_id} value={departments.id} className="text-blue-800">
                                    {departments.dept_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">Status</label>
                    </div>
                    <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                        <select name="status" value={formData.status} onChange={handleChange}
                            className={`w-full focus:outline-none focus:border-none ${
                                formData.status ? 'text-blue-800' : 'text-gray-400'
                            }`}>
                            <option value="" disabled hidden>Select Status</option>
                            <option value="Active"   className="text-blue-800">Active</option>
                            <option value="Inactive" className="text-blue-800">Inactive</option>
                        </select>
                    </div>

                    <div className="col-start-5 col-end-7">
                    <Button type="submit" text="Add"/>
                    </div>
                </form>
            </div>
        </div>
      );
}

export default designation