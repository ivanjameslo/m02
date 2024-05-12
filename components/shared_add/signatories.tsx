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
        <div className= "px-5 pt-5 text-blue-900 justify-center w-screen items-center">
        <div>
            <label className= "px-5 text-2xl font-bold text-blue-900">
            Assign Signatories
            </label>
        </div>

        <div className="pt-5 text-blue-900">
            <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-7 gap-2  items-center">
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Employee Number</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <select name="emp_num" value={formData.emp_num} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.emp_num ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value="" disabled hidden>Select Employee</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}  className="text-blue-800">
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Higher Superior</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <select name="highersuperior" value={formData.highersuperior} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.highersuperior ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value="" disabled hidden>Select Superior</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}  className="text-blue-800">
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                    <select name="status" value={formData.status} onChange={handleChange}
                        className={`w-full focus:outline-none focus:border-none ${
                            formData.status ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value=""          disabled hidden>Select Status</option>
                        <option value="Active"    className="text-blue-800">Active</option>
                        <option value="Inactive"  className="text-blue-800">Inactive</option>
                    </select>
                </div>

                <div className="col-start-5 col-end-7"></div>

                <div className="col-start-5 col-end-7">
                    <div className="grid grid-cols-5">
                        <div className="col-start-2 col-end-6">
                            <Button type="submit" text="Add"/>
                    </div></div>
                </div>
            </form>
        </div>
    </div>
      );
}

export default signatories