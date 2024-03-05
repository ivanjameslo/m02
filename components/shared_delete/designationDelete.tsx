'use client';

import { deleteDesignation } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import { useRouter } from 'next/navigation'



const designationDelete = ({ id }: { id: any }) => {
  const router = useRouter();
  const handleDelete = (id: any) => {
    try {
      deleteDesignation(id)
    } catch (error) {
      console.log(error)
    }
    router.push('/');
  }

  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={() => handleDelete(id)} />
  )
}

export default designationDelete