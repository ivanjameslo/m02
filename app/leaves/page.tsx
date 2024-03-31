import React from 'react'
import Navbar from "@/components/ui/Navbar"
import Leave from "@/components/shared_add/leave"
import LeaveTable from "@/components/shared_table/leaveTable"

const page = () => {
  return (
    <div>
        <Leave />
        <LeaveTable />
    </div>
  )
}

export default page