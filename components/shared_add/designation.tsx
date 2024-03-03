'use client'

import React from 'react'
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { createDesignation } from '@/app/actions/todoActions';

const designation = () => {
    return (
        <Form action={createDesignation} className="mt-5">
            <Input name="designation_name" type="text" placeholder="Designation Name" />
            <Input name="department_id" type="Int" placeholder="Department ID" />
            <Input name="status" type="text" placeholder="Status" />
            <Button type="submit" text="Add"/>
        </Form>
      );
}

export default designation