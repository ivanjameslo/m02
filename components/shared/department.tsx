'use client';

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createDepartment } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';

const NewDepartment = () => {
  return (
    <Form action={createDepartment} className="mt-5">
        <Input name="dept_name" type="text" placeholder="Department Name" />
        <Input name="status" type="text" placeholder="Status" />
        <Button type="submit" text="Add"/>
    </Form>
  );
};

export default NewDepartment;