// //DELETE FUNCTION
// "use client"

// import { updateDepartment, updateEmployee } from "@/app/actions/todoActions"
// import Form from "@/components/ui/Form"
// import Input from "@/components/ui/Input"
// import Button from "@/components/ui/Button"
// import { useState } from "react"
// import department from "../shared_add/department"
// // import {BiEdit} from 'react-icons/bi'


// //Edit Layout
// const DepartmentUpdate = (departments: any) => {
//   const [departmentUpdate, setDepartmentUpdate] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "",
//     new_dept_name: "",
//     new_status: "",
//   });

//   const handleEdit = () => {
//     setDepartmentUpdate(!departmentUpdate);
//   }
//   const handleSubmit = () => {
//     setDepartmentUpdate(false);
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
//   return (
//     <div className="flex flex-col gap-5 items-center">
//         <Button onClick={handleEdit} text="Update" actionButton />

//         {departmentUpdate ? (
//           <div className="flex flex-col">
//             <Form action={updateDepartment} onSubmit={handleSubmit}>
//                 <div className="">
//                   <Input name="id" value={departments.id} type="hidden" />
//                   <Input name="dept_name" value={departments.id} type="hidden" />
//                   <Input name="status" value={departments.id} type="hidden" />
//                 </div>
//                 <div className=" justify-center">
//                   <Input name="id" type="Int" placeholder="Copy the ID Number" value={formData.id} onChange={handleChange} />
//                   <Input name="dept_name" type="text" placeholder="New Department Name" value={formData.new_dept_name} onChange={handleChange} />
//                   <Input name="status" type="text" placeholder="New Status" value={formData.new_status} onChange={handleChange} />
//                   <Button type="submit" text="Save" />
//                 </div>
//             </Form>
//             </div>
//             ) : (null
//         )}
//     </div>
//   )
// }

// export default DepartmentUpdate