'use client'

import React, { useState } from 'react';
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import { createSignatories } from '@/app/actions/todoActions';
import Button from '@/components/ui/Button';

const signatories = () => {
    return (
        <div className="pt-5 text-blue-900">
            <Form action={createSignatories} className="mt-5 px-5 grid grid-cols-13 gap-2">
                {/* <Input name="id" type="Int" value={assign_designation.id} /> */}
                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Employee Number</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <Input name="emp_num" type="Int" placeholder="Employee Number" />
                </div>

                <div className="text-right col-start-1 col-end-3">
                    <label className="text-color-black text-right self-center">Higher Superior</label>
                </div>
                <div className="col-start-3 col-end-13">
                    <Input name="highersuperior" type="Int" placeholder="Superior ID" />
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

export default signatories