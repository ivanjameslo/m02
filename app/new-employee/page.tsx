import React from 'react'
import Navbar from "@/components/ui/Navbar"
import NewEmployee from "@/components/shared_add/newEmployee"
import NewEmployeeTable from "@/components/shared_table/newEmployeeTable"

const page = () => {
  return (
    <div>
        <NewEmployee />
        <NewEmployeeTable /></div>
  )
}

export default page