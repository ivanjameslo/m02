'use client'

import React from 'react'
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { createDesignation } from '@/app/actions/todoActions';

const designation = () => {
    return (
        <div className= "pt-5 ">
            <Form action={createDesignation} className="mt-5 text-blue-900 px-5 grid grid-cols-13 gap-2">
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Designation Name</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <Input name="designation_name" type="text" placeholder="Designation Name" />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Department ID</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <Input name="department_id" type="Int" placeholder="Department ID" />
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
}

export default designation