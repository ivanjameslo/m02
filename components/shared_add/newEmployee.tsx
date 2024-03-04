'use client';

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createEmployee } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';
import { prisma } from '@/utils/prisma';

const NewEmployee = () => {
  return (
    <div>
      <div className="mt-5">
        <label className= "px-5 text-2xl font-bold text-blue-900">
          New Employee
        </label>
      </div>

      <div className= "pt-5  text-blue-900">
        <Form action={createEmployee} className="px-5 grid grid-cols-13 gap-2">
          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Employee Number</label>
          </div>
          <div className="col-start-3 col-end-13">
            <Input name="emp_num" type="Int" placeholder="Employee Number" />
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
            <Button type="submit" text="Add" />
          </div>
        </Form>
    </div>
    </div>
  );
};

export default NewEmployee;