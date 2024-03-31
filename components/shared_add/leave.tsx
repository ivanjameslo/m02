'use client'

import React, { ChangeEvent, SelectHTMLAttributes, useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createLeaves } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';

const leave = () => {

    const router = useRouter();
    
    const [formData, setFormData] = useState({
        emp_num: "",
        start_leave_date: "",
        end_leave_date: "",
        leave_type: "",
        status: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/leaves', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_num: formData.emp_num,
                    start_leave_date: formData.start_leave_date,
                    end_leave_date: formData.end_leave_date,
                    leave_type: formData.leave_type,
                    status: formData.status,
                })
            });
            router.refresh();
        }catch (error) {
            console.log(error);
        }

        setFormData({
            emp_num: "",
            start_leave_date: "",
            end_leave_date: "",
            leave_type: "",
            status: "",
        });
    };

    const handleDateChange = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }

        setFormData((prevData) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));

        console.log(formData);
    }

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
                        <option value="">Select Employee Number</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}>
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Start Leave</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <input name="start_leave_date" type="Date" placeholder="Start Leave" onChange={handleChange} /> */}
                    <ReactDateTimeClass
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm:ss.SSS"
                            onChange={(date) => handleDateChange(date, 'start_leave_date')}
                    />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">End Leave</label>
                </div>
                <div className="col-start-3 col-end-13">
                    {/* <input name="end_leave_date" type="Date" placeholder="End Leave" onChange={handleChange} /> */}
                    <ReactDateTimeClass
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm:ss.SSS"
                            isValidDate={(currentDate) => {
                                return currentDate.isAfter(new Date(formData.start_leave_date));
                            }}
                            onChange={(date) => handleDateChange(date, 'end_leave_date')}
                            className=''
                    />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Leave Type</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <select name="leave_type" value={formData.leave_type} onChange={handleChange}>
                        <option value="">Select Leave Type</option>
                        <option value="Vacation">Vacation</option>
                        <option value="Sick">Sick</option>
                        <option value="Maternity">Maternity</option>
                        <option value="Paternity">Paternity</option>
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Status</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Denied">Denied</option>
                    </select>
                </div>

                <div className="col-start-3 col-end-6">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
      );
}

export default leave