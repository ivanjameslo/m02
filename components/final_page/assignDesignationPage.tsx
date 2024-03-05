import Navbar from "../ui/Navbar"
import AssignDesignation from "../shared_add/assignDesignation"
import AssignDesignationTable from "../shared_table/assigndesigTable"

const assignDesignationPage = () => {
  return (
    <div>
        <AssignDesignation />
        <AssignDesignationTable />
    </div>
  )
}

export default assignDesignationPage