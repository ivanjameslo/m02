"use client"

import { updateAssign } from "@/app/actions/todoActions"
import Form from "@/components/ui/Form"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { useState } from "react"

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
  
  const handleSubmit = () => {
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

        {isPopupOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-lg font-bold mb-4">Edit Details</h2>
              <Form onSubmit={handleSubmit}>
                <Input name="emp_num" value={assignDesignation.id} type="hidden" />
                <Input name="designation_id" value={assignDesignation.id} type="hidden" />
                <Input name="employee_type" value={assignDesignation.id} type="hidden" />
                <Input name="status" value={assignDesignation.id} type="hidden" />
                <Input name="new_emp_num" type="Int" placeholder="New Employee Number" value={formData.new_emp_num} onChange={handleChange} />
                <Input name="new_designation_id" type="Int" placeholder="New Designation ID" value={formData.new_designation_id} onChange={handleChange} />
                <Input name="new_employee_type" type="text" placeholder="New Employee Type" value={formData.new_employee_type} onChange={handleChange} />
                <Input name="new_status" type="text" placeholder="New Status" value={formData.new_status} onChange={handleChange} />
                <Button type="submit" text="Save" />
              </Form>
            </div>
          </div>
        )}
    </div>
  )
}

export default AssignUpdate;

// "use client"

// import { updateAssign } from "@/app/actions/todoActions"
// import Form from "@/components/ui/Form"
// import Input from "@/components/ui/Input"
// import Button from "@/components/ui/Button"
// import { useState } from "react"

// const assignUpdate = (assign_designation: any) => {
//   const [assignUpdate, setAssignUpdate] = useState(false);
//   const [formData, setFormData] = useState({
//     new_emp_num: "",
//     new_designation_id: "",
//     new_employee_type: "",
//     new_status: "",
//   });

//   const handleEdit = () => {
//     setAssignUpdate(!assignUpdate);
//   }
  
//   const handleSubmit = () => {
//     setAssignUpdate(false);
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
  
//   return (
//     <div className="flex flex-col gap-5 items-center">
//         <Button onClick={handleEdit} text="Update" actionButton />

//         {assignUpdate ? (
//           <div className="flex flex-col">
//             <Form action={updateAssign} onSubmit={handleSubmit}>
//                 <div className="">
//                   <Input name="emp_num" value={assign_designation.id} type="hidden" />
//                   <Input name="designation_id" value={assign_designation.id} type="hidden" />
//                   <Input name="employee_type" value={assign_designation.id} type="hidden" />
//                   <Input name="status" value={assign_designation.id} type="hidden" />
//                 </div>
//                 <div className=" justify-center">
//                   <Input name="new_emp_num" type="Int" placeholder="New Employee Number" value={formData.new_emp_num} onChange={handleChange} />
//                   <Input name="new_designation_id" type="Int" placeholder="New Designation ID" value={formData.new_designation_id} onChange={handleChange} />
//                   <Input name="new_employee_type" type="text" placeholder="New Employee Type" value={formData.new_employee_type} onChange={handleChange} />
//                   <Input name="new_status" type="text" placeholder="New Status" value={formData.new_status} onChange={handleChange} />
//                   <Button type="submit" text="Save" />
//                 </div>
//             </Form>
//             </div>
//             ) : (null
//         )}
//     </div>
//   )
// }

// export default assignUpdate