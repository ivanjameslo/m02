"use client"

import React from 'react';
import { updateAssign } from "@/app/actions/todoActions"
import Form from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useState } from "react"
import { CustomModal } from "../ui/customModal"

const AssignUpdate = ({ assignDesignation }: { assignDesignation: any }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    new_emp_num: "",
    new_designation_id: "",
    new_employee_type: "",
    new_status: "",
  });

  const handleEdit = () => {
    setIsPopupOpen(true);
  }
  
  const [new_emp_num, setNewEmpNum] = useState('');
  const [new_designation_id, setNewDesignationId] = useState('');
  const [new_employee_type, setNewEmployeeType] = useState('');
  const [new_status, setNewStatus] = useState('');

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("new_emp_num", new_emp_num);
    formData.append("new_designation_id", new_designation_id);
    formData.append("new_employee_type", new_employee_type);
    formData.append("new_status", new_status);
    
    // Call the updateAssign action here passing formData
    updateAssign(formData);
    setIsPopupOpen(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="flex flex-col gap-5 items-center">
        <Button onClick={handleEdit} text="Update" actionButton />
        <CustomModal
          title="Update Employee Designation"
          isOpen={isPopupOpen}
          onCancel={() => setIsPopupOpen(false)}
          footer={null}
          children={<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center item-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Details</h2>
              <form onSubmit={handleSubmit}>
                {/* <input name="emp-num" value={assignDesignation.id} type="hidden" />
                <input name="designation_id" value={assignDesignation.id} type="hidden" />
                <input name="employee_type" value={assignDesignation.id} type="hidden" />
                <input name="status" value={assignDesignation.id} type="hidden" /> */}
                {assignDesignation && (
                  <>
                      <input name="emp-num" value={assignDesignation.id} type="hidden" />
                      <input name="designation_id" value={assignDesignation.id} type="hidden" />
                      <input name="employee_type" value={assignDesignation.id} type="hidden" />
                      <input name="status" value={assignDesignation.id} type="hidden" />
                  </>
                )}
                <input name="new_emp_num" type="Int" placeholder="New Employee Number" value={formData.new_emp_num} onChange={handleChange} />
                <input name="new_designation_id" type="Int" placeholder="New Designation ID" value={formData.new_designation_id} onChange={handleChange} />
                <input name="new_employee_type" type="text" placeholder="New Employee Type" value={formData.new_employee_type} onChange={handleChange} />
                <input name="new_status" type="text" placeholder="New Status" value={formData.new_status} onChange={handleChange} />
                <Button type="submit" text="Save" />
              </form>
             </div> 
          </div>}
        />
    </div>
  )
  }
export default AssignUpdate;