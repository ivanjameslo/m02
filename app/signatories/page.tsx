import React from 'react'
import Navbar from "@/components/ui/Navbar"
import Signatories from "@/components/shared_add/signatories"
import SignatoriesTable from "@/components/shared_table/signatoriesTable"

const page = () => {
  return (
    <div>
        <Signatories />
        <SignatoriesTable />
    </div>
  )
}

export default page