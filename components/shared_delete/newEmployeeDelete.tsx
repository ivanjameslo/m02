'use client';

import { deleteEmployee } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import { useRouter } from 'next/navigation'



const newEmployeeDelete = ({ id }: { id: any }) => {
  const router = useRouter();
  const handleDelete = (id: any) => {
    try {
      deleteEmployee(id)
    } catch (error) {
      console.log(error)
    }
    router.push('/');
  }

  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={() => handleDelete(id)} />
  )
}

export default newEmployeeDelete