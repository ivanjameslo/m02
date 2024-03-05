"use client"

import { updateEmployee } from "@/app/actions/todoActions"
import Form from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useState } from "react"
// import {BiEdit} from 'react-icons/bi'


//Edit Layout
const assignUpdate = (assign_designation: any) => {
  const [assignUpdate, setAssignUpdate] = useState(false);
  const [formData, setFormData] = useState({
    new_emp_num: "",
    new_designation_id: "",
    new_employee_type: "",
    new_status: "",
  });

  const handleEdit = () => {
    setAssignUpdate(!assignUpdate);
  }
  const handleSubmit = () => {
    setAssignUpdate(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="flex flex-col gap-5 items-center">
        <Button onClick={handleEdit} text="Update" actionButton />

        {assignUpdate ? (
          <div className="flex flex-col">
            <Form action={updateEmployee} onSubmit={handleSubmit}>
                <div className="">
                  <Input name="emp_num" value={assign_designation.id} type="hidden" />
                  <Input name="designation_id" value={assign_designation.id} type="hidden" />
                  <Input name="employee_type" value={assign_designation.id} type="hidden" />
                  <Input name="status" value={assign_designation.id} type="hidden" />
                </div>
                <div className=" justify-center">
                  <Input name="new_emp_num" type="Int" placeholder="New Employee Number" value={formData.new_emp_num} onChange={handleChange} />
                  <Input name="new_designation_id" type="Int" placeholder="New Designation ID" value={formData.new_designation_id} onChange={handleChange} />
                  <Input name="new_employee_type" type="text" placeholder="New Employee Type" value={formData.new_employee_type} onChange={handleChange} />
                  <Input name="new_status" type="text" placeholder="New Status" value={formData.new_status} onChange={handleChange} />
                  <Button type="submit" text="Save" />
                </div>
            </Form>
            </div>
            ) : (null
        )}
    </div>
  )
}

export default assignUpdate