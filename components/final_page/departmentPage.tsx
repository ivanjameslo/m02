import Department from "@/components/shared_add/department";
import Navbar from "../ui/Navbar";
import DepartmentTable from "../shared_table/departmentTable";

const departmentPage = () => {
  return (
    <div>
        <Department />
        <DepartmentTable />
    </div>
  )
}

export default departmentPage