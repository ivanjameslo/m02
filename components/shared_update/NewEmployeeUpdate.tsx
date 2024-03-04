"use client"

import { updateEmployee } from "@/app/actions/todoActions"
import Form from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useState } from "react"
// import {BiEdit} from 'react-icons/bi'


//Edit Layout
const newEmployeeUpdate = (employees: any) => {
  const [newEmployeeUpdate, setNewEmployeeUpdate] = useState(false);
  const [formData, setFormData] = useState({
    new_emp_num: "",
    new_firstName: "",
    new_middleName: "",
    new_lastName: "",
    new_address_line: "",
    new_brgy: "",
    new_province: "",
    new_country: "",
    new_zip_code: "",
  });

  const handleEdit = () => {
    setNewEmployeeUpdate(!newEmployeeUpdate);
  }
  const handleSubmit = () => {
    setNewEmployeeUpdate(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="flex flex-col gap-5 items-center">
        <Button onClick={handleEdit} text="Update" actionButton />

        {newEmployeeUpdate ? (
          <div className="flex flex-col">
            <Form action={updateEmployee} onSubmit={handleSubmit}>
                <div className="">
                  <Input name="emp_num" value={employees.id} type="hidden" />
                  <Input name="firstName" value={employees.id} type="hidden" />
                  <Input name="middleName" value={employees.id} type="hidden" />
                  <Input name="lastName" value={employees.id} type="hidden" />
                  <Input name="address_line" value={employees.id} type="hidden" />
                  <Input name="brgy" value={employees.id} type="hidden" />
                  <Input name="province" value={employees.id} type="hidden" />
                  <Input name="country" value={employees.id} type="hidden" />
                  <Input name="zip_code" value={employees.id} type="hidden" />
                </div>
                <div className=" justify-center">
                  <Input name="new_emp_num" type="Int" placeholder="New Employee Number" value={formData.new_emp_num} onChange={handleChange} />
                  <Input name="new_firstName" type="text" placeholder="New First Name" value={formData.new_firstName} onChange={handleChange} />
                  <Input name="new_middleName" type="text" placeholder="New Middle Name" value={formData.new_middleName} onChange={handleChange} />
                  <Input name="new_lastName" type="text" placeholder="New Last Name" value={formData.new_lastName} onChange={handleChange} />
                  <Input name="new_address_line" type="text" placeholder="New Address Line" value={formData.new_address_line} onChange={handleChange} />
                  <Input name="new_brgy" type="text" placeholder="New Barangay" value={formData.new_brgy} onChange={handleChange} />
                  <Input name="new_province" type="text" placeholder="New Province" value={formData.new_province} onChange={handleChange} />
                  <Input name="new_country" type="text" placeholder="New Country" value={formData.new_country} onChange={handleChange} />
                  <Input name="new_zip_code" type="Int" placeholder="New Zip Code" value={formData.new_zip_code} onChange={handleChange} />
                  <Button type="submit" text="Save" />
                </div>
            </Form>
            </div>
            ) : (null
        )}
    </div>
  )
}

export default newEmployeeUpdate