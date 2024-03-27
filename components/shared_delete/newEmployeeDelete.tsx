'use client';

import { deleteEmployee } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import { useRouter } from 'next/navigation'



const newEmployeeDelete = ({ emp_num }: { emp_num: any }) => {
  const router = useRouter();
  const handleDelete = (emp_num: any) => {
    try {
      deleteEmployee(emp_num)
    } catch (error) {
      console.log(error)
    }
    router.push('/');
  }

  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={() => handleDelete(emp_num)} />
  )
}

export default newEmployeeDelete