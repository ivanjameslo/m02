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
        <Form action={createEmployee} className="px-5 grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <label className="text-color-black text-right self-center">Employee Number</label>
            <Input name="emp_num" type="Int" placeholder="Employee Number" />
          </div>

          <div className="col-span-3">
            <label className="text-color-black text-right self-center">First Name</label>
            <Input name="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="col-span-3">
            <label className="text-color-black text-right self-center">Middle Name</label>
            <Input name="middleName" type="text" placeholder="Middle Name" />
          </div>
          <div className="col-span-3">
            <label className="text-color-black text-right self-center">Last Name</label>
            <Input name="lastName" type="text" placeholder="Last Name" />
          </div>

          <div className="col-span-3">
            <label className="text-color-black text-right self-center">Address Line</label>
            <Input name="address_line" type="text" placeholder="Address Line" />
          </div>
          <div className="col-span-2">
            <label className="text-color-black text-right self-center">Barangay</label>
            <Input name="brgy" type="text" placeholder="Barangay" />
          </div>
          <div className="col-span-3">
            <label className="text-color-black text-right self-center">Province</label>
            <Input name="province" type="text" placeholder="Province" />
          </div>
          <div className="col-span-3">
            <label className="text-color-black text-right self-center">Country</label>
            <Input name="country" type="text" placeholder="Country" />
          </div>
          <div className="col-span-1">
            <label className="text-color-black text-right self-center">Zip Code</label>
            <Input name="zip_code" type="Int" placeholder="Zip Code" />
          </div>

          <div className="col-span-12 justify-end flex-auto">
            <Button type="submit" text="Add" />
          </div>
        </Form>

      </div>
    </div>
  );
};

export default NewEmployee;