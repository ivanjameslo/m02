import React from 'react'
import Navbar from "@/components/ui/Navbar"
import Designation from "@/components/shared_add/designation"
import DesignationTable from "@/components/shared_table/designationTable"

const page = () => {
  return (
    <div>
        <Designation />
        <DesignationTable />
    </div>
  )
}

export default page