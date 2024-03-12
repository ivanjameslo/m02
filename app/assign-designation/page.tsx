import React from 'react'
import AssignDesignation from "@/components/shared_add/assignDesignation"
import AssignDesignationTable from "@/components/shared_table/assigndesigTable"
import ReferenceDepartment from "@/components/shared_table/referenceDepartment"
import ReferenceDesignation from "@/components/shared_table/referenceDesignation"

const assignDesignationPage = () => {
  return (
    <div>
        <AssignDesignation />
        <AssignDesignationTable />
        {/* <ReferenceDepartment />
        <ReferenceDesignation /> */}
    </div>
  )
}

export default assignDesignationPage