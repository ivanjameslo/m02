'use client';

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createDepartment } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';


const department = () => {

  // const [status, setStatus] = useState('')

  const router = useRouter();

  const [formData, setFormData] = useState({
    dept_name: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
    e.preventDefault();
    try{
      await fetch('/api/departments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dept_name: formData.dept_name,
          status: formData.status,
        })
      });
      router.refresh();
    } catch (error) {
        console.log(error);
    }

    setFormData({
      dept_name: "",
      status: "",
    });
  };

  return (
    <div className= "px-5 pt-5 text-blue-900 justify-center w-screen items-center">
      <div>
        <label className= "px-5 text-2xl font-bold text-blue-900">
        Create New Department
        </label>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-7 gap-2  items-center">
        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-blue-800 text-right self-center">Department Name</label>
        </div>
        <div className="col-start-3 col-end-6 border border-blue-300 rounded-md px-4 py-2">
          <input name="dept_name" type="text" placeholder="Enter Department Name" onChange={handleChange}
            className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
        </div>

        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Status</label>
        </div>
        <div className="col-start-3 col-end-6 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
          <select name="status" value={formData.status} onChange={handleChange}
            className={`w-full focus:outline-none focus:border-none ${
              formData.status ? 'text-blue-800' : 'text-gray-400'
          }`}>
            <option value="" disabled hidden>Select Status</option>
            <option value="Active"   className="text-blue-800">Active</option>
            <option value="Inactive" className="text-blue-800">Inactive</option>
          </select>
        </div>

        <div className="col-start-1 col-end-7">
          <p><br /></p>
        </div>

        <div className="col-start-5 col-end-7">
            <div className="grid grid-cols-5">
                <div className="col-start-2 col-end-6">
                    <Button type="submit" text="Add"/>
            </div></div>
        </div>
      </form>
    </div>
  );
};

export default department;