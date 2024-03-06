import React from 'react'
import Navbar from "@/components/ui/Navbar"
import AssignDesignation from "@/components/shared_add/assignDesignation"
import AssignDesignationTable from "@/components/shared_table/assigndesigTable"

const assignDesignationPage = () => {
  return (
    <div>
        <AssignDesignation />
        <AssignDesignationTable />
    </div>
  )
}

export default assignDesignationPage