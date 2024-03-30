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
    <div className= "pt-5  text-blue-900">
      <form onSubmit={handleSubmit} className="mt-5 px-5 grid grid-cols-13 gap-2">
        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Department Name</label>
        </div>
        <div className="col-start-3 col-end-13">
          <input name="dept_name" type="text" placeholder="Department Name" onChange={handleChange} />
        </div>

        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Status</label>
        </div>
        <div className="col-start-3 col-end-13">
          {/* <Input name="status" type="text" placeholder="Status" /> onChange={(e) => setStatus(e.target.value)}*/}
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
};

export default department;