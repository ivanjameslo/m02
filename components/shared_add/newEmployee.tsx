'use client';

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createEmployee } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { prisma } from '@/utils/prisma';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';

// Use 'use client' if you want to make the page client side rendered
// It is client side rendered if you make changes within the browser
// which includes useRouter, useState, useEffect
// if you have forms in a specific file use 'use client'

const NewEmployee = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    emp_num: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address_line: "",
    brgy: "",
    province: "",
    country: "",
    zip_code: "",
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await fetch('/api/employees',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emp_num: Number(formData.emp_num),
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          address_line: formData.address_line,
          brgy: formData.brgy,
          province: formData.province,
          country: formData.country,
          zip_code: Number(formData.zip_code),
        })
      });
      
      // router.replace(router.asPath);
      router.refresh();
    }catch(error){
      console.log(error)
    }

    setFormData({
      emp_num: "",
      firstName: "",
      middleName: "",
      lastName: "",
      address_line: "",
      brgy: "",
      province: "",
      country: "",
      zip_code: "",
    });
  }

  return (
    <div>
      <div className="mt-5">
        <label className= "px-5 text-2xl font-bold text-blue-900">
          New Employee
        </label>
      </div>

      <div className= "pt-5  text-blue-900">
        <form onSubmit={handleSubmit} className="px-5 grid grid-cols-13 gap-2">
          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Employee Number</label>
          </div>
          <div className="col-start-3 col-end-13">
            <input name="emp_num" type="Int" placeholder="Employee Number" onChange={handleChange}/>
          </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Name</label>
          </div>
          <div className="col-start-3 col-end-6">
            <input name="firstName" type="text" placeholder="First Name" onChange={handleChange}/>
          </div>
          <div className="col-start-6 col-end-9">
            <input name="middleName" type="text" placeholder="Middle Name" onChange={handleChange} />
          </div>
          <div className="col-start-9 col-end-13">
            <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
          </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Address</label>
          </div>
          <div className="col-start-3 col-end-9">
            <input name="address_line" type="text" placeholder="Address Line" onChange={handleChange} />
          </div>
          <div className="col-start-9 col-end-13">
            <input name="brgy" type="text" placeholder="Barangay" onChange={handleChange} />
          </div>
          <div className="col-start-3 col-end-7">
            <input name="province" type="text" placeholder="Province" onChange={handleChange} />
          </div>
          <div className="col-start-7 col-end-10">
            <input name="country" type="text" placeholder="Country" onChange={handleChange} />
          </div>
          <div className="col-start-10 col-end-13">
            <input name="zip_code" type="Int" placeholder="Zip Code" onChange={handleChange} />
          </div>

          <div className="col-start-9 col-end-13 justify-end flex-auto">
            <Button type="submit" text="Add"/>
          </div>
        </form>
    </div>

      {/* <div className= "pt-5  text-blue-900">
        <Form action={createEmployee} className="px-5 grid grid-cols-13 gap-2">
          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Employee Number</label>
          </div>
          <div className="col-start-3 col-end-13">
            <Input name="emp_num" type="Int" placeholder="Employee Number"/>
          </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Name</label>
          </div>
          <div className="col-start-3 col-end-6">
            <Input name="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="col-start-6 col-end-9">
            <Input name="middleName" type="text" placeholder="Middle Name" />
          </div>
          <div className="col-start-9 col-end-13">
            <Input name="lastName" type="text" placeholder="Last Name" />
          </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Address</label>
          </div>
          <div className="col-start-3 col-end-9">
            <Input name="address_line" type="text" placeholder="Address Line" />
          </div>
          <div className="col-start-9 col-end-13">
            <Input name="brgy" type="text" placeholder="Barangay" />
          </div>
          <div className="col-start-3 col-end-7">
            <Input name="province" type="text" placeholder="Province" />
          </div>
          <div className="col-start-7 col-end-10">
            <Input name="country" type="text" placeholder="Country" />
          </div>
          <div className="col-start-10 col-end-13">
            <Input name="zip_code" type="Int" placeholder="Zip Code" />
          </div>

          <div className="col-start-9 col-end-13 justify-end flex-auto">
            <Button type="submit" text="Add"/>
          </div>
        </Form>
    </div> */}
    </div>
  );
}

export default NewEmployee;