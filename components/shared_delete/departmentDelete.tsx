'use client';

import { deleteDepartment } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import { useRouter } from 'next/navigation'



const departmentDelete = ({ id }: { id: any }) => {
  const router = useRouter();
  const handleDelete = (id: any) => {
    try {
      deleteDepartment(id)
    } catch (error) {
      console.log(error)
    }
    router.push('/');
  }

  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={() => handleDelete(id)} />
  )
}

export default departmentDelete