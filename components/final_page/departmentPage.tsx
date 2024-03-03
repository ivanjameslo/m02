import Department from "@/components/shared_add/department";
import Navbar from "../ui/Navbar";
import DepartmentTable from "../shared_table/departmentTable";

const departmentPage = () => {
  return (
    <div>
        <Navbar />
        <Department />
        <DepartmentTable />
    </div>
  )
}

export default departmentPage