import React from 'react'
import Payroll from "@/components/shared_add/payroll"
import PayrollTable from '@/components/shared_table/payrollTable'


const page = () => {
  return (
    <div>
        <Payroll />
        <PayrollTable />

    </div>
  )
}

export default page