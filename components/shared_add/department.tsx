'use client';

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createDepartment } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';

const department = () => {
  return (
    <div className= "pt-5  text-blue-900">
      <Form action={createDepartment} className="mt-5 px-5 grid grid-cols-13 gap-2">
        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Department Name</label>
        </div>
        <div className="col-start-3 col-end-13">
          <Input name="dept_name" type="text" placeholder="Department Name" />
        </div>

        <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Status</label>
        </div>
        <div className="col-start-3 col-end-13">
          <Input name="status" type="text" placeholder="Status" />
        </div>

        <div className="col-start-3 col-end-6">
          <Button type="submit" text="Add"/>
        </div>
      </Form>
    </div>
  );
};

export default department;