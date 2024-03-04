'use client';

import { deleteEmployee } from "@/app/actions/todoActions"
import Button from "../ui/Button"

const newEmployeeDelete = ({ id }: { id: any }) => {

  const handleDelete = (id: any) => {
    try {
      deleteEmployee(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <Button text="Delete" actionButton={true} type="submit" onClick={handleDelete} />
  )
}

export default newEmployeeDelete