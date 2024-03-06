'use client'

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createAssignDesignation } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';

const assignDesignation = () => {
    return (
        <Form action={createAssignDesignation} className="mt-5">
            {/* <Input name="id" type="Int" value={assign_designation.id} /> */}
            <Input name="emp_num" type="Int" placeholder="Employee Number" />
            <Input name="designation_id" type="Int" placeholder="Designation ID" />
            <Input name="employee_type" type="text" placeholder="Employee Type" />
            <Input name="status" type="text" placeholder="Status" />
            <Button type="submit" text="Add"/>
        </Form>
      );
}

export default assignDesignation