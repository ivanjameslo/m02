'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
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
    basicPay: "",
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
          basicPay: Number(formData.basicPay),
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
      basicPay: "",
    });

    router.refresh();
  }

  return (
    <div>
      <div className="px-5 mt-5">
        <label className= "px-5 text-2xl font-bold text-blue-900">
        Create New Employee
        </label>
      </div>

      <div className= "pt-5  text-blue-900">
        <form onSubmit={handleSubmit} className="container mx-auto grid grid-cols-12 gap-2 items-center">
          
          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Employee Number</label>
          </div>

                <div className="col-start-3 col-end-12 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="emp_num" type="Int" placeholder="Employee Number" onChange={handleChange} className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3 ">
            <label className="text-color-black text-right self-center">Name</label>
          </div>
          
                <div className="col-start-3 col-end-6 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-6 col-end-9 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="middleName" type="text" placeholder="Middle Name" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-9 col-end-12 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Address</label>
          </div>


                <div className="col-start-3 col-end-9 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="address_line" type="text" placeholder="Address Line" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-9 col-end-12 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="brgy" type="text" placeholder="Barangay" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="province" type="text" placeholder="Province" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-7 col-end-10 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="country" type="text" placeholder="Country" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>
                <div className="col-start-10 col-end-12 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="zip_code" type="Int" placeholder="Zip Code" onChange={handleChange} className="w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Basic Pay</label>
          </div>

                <div className="col-start-3 col-end-12 border border-blue-300 rounded-md px-4 py-2 text-blue-800">
                  <input name="basicPay" type="float" placeholder="Basic Pay Amount" onChange={handleChange} className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="col-start-9 col-end-12 justify-end flex-auto">
            <Button type="submit" text="Add"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEmployee;