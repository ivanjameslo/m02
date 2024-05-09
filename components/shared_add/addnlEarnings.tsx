'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';

const addnlEarning = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        emp_num: "",
        typeOfEarnings: "",
        amount: "",
        date: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
            await fetch('/api/addnlEarnings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_num: formData.emp_num,
                    typeOfEarnings: formData.typeOfEarnings,
                    amount: formData.amount,
                    date: formData.date,
                })
            });
            router.refresh();
        } catch (error) {
            console.log(error);
        }
        setFormData({
            emp_num: "",
            typeOfEarnings: "",
            amount: "",
            date: "",
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
    }

    useEffect(() => {
        fetchEmployees().catch(error => console.log(error));
    }, []);

    return (
        <div className="px-5 pt-5 text-blue-900 justify-center w-screen">
            <div>
                <label className= "px-5 text-2xl font-bold text-blue-900">
                Additional Earnings
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
                    <label className="text-color-black text-right self-center">Type of Earnings</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    <select name="typeOfEarnings" value={formData.typeOfEarnings} onChange={handleChange}
                    className={`w-full focus:outline-none focus:border-none ${
                        formData.typeOfEarnings ? 'text-blue-800' : 'text-gray-400'
                    }`}>
                        <option value="" disabled hidden>Select Earnings</option>
                        <option value="Overtime" className="text-blue-800">Overtime</option>
                        <option value="Night Differential" className="text-blue-800">Night Differential</option>
                        <option value="Holiday Pay" className="text-blue-800">Holiday Pay</option>
                        <option value="Rest Day Pay" className="text-blue-800">Rest Day Pay</option>
                        <option value="Rest Day Pay" className="text-blue-800">Rest Day Pay</option>
                        <option value="Bonuses" className="text-blue-800">Bonuses</option>
                        <option value="13th Month Pay" className="text-blue-800">13th Month Pay</option>
                        <option value="Allowances" className="text-blue-800">Allowances</option>
                    </select>
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Amount</label>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                    <input name="amount" type="Int" placeholder="Amount" onChange={handleChange} className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>


                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-blue-800 text-right self-center">Date</label>
                </div>
                <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                  <ReactDateTimeClass
                    dateFormat="YYYY-MM-DD"
                    timeFormat="HH:mm:ss.SSS"
                    onChange={(date) => handleDateChange(date, 'date')}
                  />
                </div>
                
                <div className="col-start-5 col-end-7">
                    <Button type="submit" text="Add"/>
                </div>
            </form>
        </div>
      );
}

export default addnlEarning