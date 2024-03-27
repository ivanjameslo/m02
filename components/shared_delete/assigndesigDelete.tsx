'use client';

import { deleteAssign } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import { useRouter } from 'next/navigation'



const newAssignDelete = ({ id }: { id: any }) => {
  const router = useRouter();
  const handleDelete = (id: any) => {
    try {
      deleteAssign(id)
    } catch (error) {
      console.log(error)
    }
    router.push('/');
  }
4
  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={() => handleDelete(id)} />
  )
}

export default newAssignDelete