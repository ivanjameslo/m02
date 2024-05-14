'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';
import Link from 'next/link';

const Payroll = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        payday: "",
        start_of_cutoff: "",
        end_of_cutoff: "",
    })
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/payroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Do something with 'data'...
        } catch (error) {
            console.error('Error creating payroll:', error);
        }
    };
    
    const handleDateChange = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }
        setFormData((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));
        console.log(date);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div>
            <div className="px-5 mt-5">
                <label className= "px-5 text-2xl font-bold text-blue-900">
                Payroll
                </label>
            </div>

            <div className= "pt-5 text-blue-900">
                <form onSubmit={handleSubmit} className="container mx-auto grid grid-cols-9 gap-2 items-center">
                    
                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-left self-center">Payday</label>
                    </div>

                    <div className="text-right col-start-4 col-end-6">
                        <label className="text-color-black text-left self-center">Payroll Start Period</label>
                    </div>
                    
                    <div className="text-right col-start-7 col-end-9">
                        <label className="text-color-black text-left self-center">Payroll End Payroll</label>
                    </div>

                        <div className="text-center col-start-1 col-end-3 border border-blue-300 rounded-md px-4 py-2 flex justify-center">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'payday')}
                            />
                        </div>

                        <div className="text-center col-start-4 col-end-6 border border-blue-300 rounded-md px-4 py-2 flex justify-center">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'start_of_cutoff')}
                            />
                        </div>

                        <div className="text-center col-start-7 col-end-9 border border-blue-300 rounded-md px-4 py-2 flex justify-center">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'end_of_cutoff')}
                            />
                        </div>

                        <div className="col-start-9 col-end-12 justify-end flex-auto">
                                <Button type="submit" text="Generate Payroll"/>

                                <br />
                            <ul className="mt-10 bg-blue-200 hover:bg-blue-300 text-blue-900 w-30 px-4 rounded">
                                <li><a href="/payrollTable" className="hover:text-blue-400">View Payroll</a></li>
                            </ul>
                        </div>
                </form>
            </div>
        </div>
    );
}
export default Payroll;