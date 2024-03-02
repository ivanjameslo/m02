"use client"

import { updateEmployee } from "@/app/actions/todoActions"
import Form from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useState } from "react"
// import {BiEdit} from 'react-icons/bi'

const newEmployeeUpdate = ( {employees}: {employees: any} ) => {
  const [newEmployeeUpdate, setNewEmployee] = useState(false);
  
  const handleEdit = () => {
    setNewEmployee(!newEmployeeUpdate);
  }
  const handleSubmit = () => {
    setNewEmployee(false);
  }
  
  return (
    <div className="flex gap-5 items-center">
        <Button 
        onclick={handleEdit}
        text="Select"
        actionButton
        />

        {newEmployeeUpdate ? (
          <div>
            <Form 
            action={updateEmployee} 
            onSubmit={handleSubmit}>
                <Input name="emp_num" value={employees.id} type="hidden" />
                <Input name="firstName" value={employees.id} type="hidden" />
                <Input name="middleName" value={employees.id} type="hidden" />
                <Input name="lastName" value={employees.id} type="hidden" />
                <Input name="address_line" value={employees.id} type="hidden" />
                <Input name="brgy" value={employees.id} type="hidden" />
                <Input name="province" value={employees.id} type="hidden" />
                <Input name="country" value={employees.id} type="hidden" />
                <Input name="zip_code" value={employees.id} type="hidden" />
                <div className="flex justify-center flex-col">
                    <Input name="new_emp_num" type="Int" placeholder="New Employee Number"/>
                    <Input name="new_firstName" type="text" placeholder="New First Name" />
                    <Input name="new_middleName" type="text" placeholder="New Middle Name" />
                    <Input name="new_lastName" type="text" placeholder="New Last Name" />
                    <Input name="new_address_line" type="text" placeholder="New Address Line" />
                    <Input name="new_brgy" type="text" placeholder="New Barangay" />
                    <Input name="new_province" type="text" placeholder="New Province" />
                    <Input name="new_country" type="text" placeholder="New Country" />
                    <Input name="new_zip_code" type="Int" placeholder="New Zip Code" />
                    <Button type="submit" text="Save"/>
                </div>
            </Form>
            </div>
            ) : (null
        )}
    </div>
  )
}

export default newEmployeeUpdate