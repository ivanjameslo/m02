import Department from "@/components/shared_add/department";
import Navbar from "@/components/ui/Navbar";
import DepartmentTable from "@/components/shared_table/departmentTable";

const DepartmentPage = () => {
  return (
    <div>
        <Department />
        <DepartmentTable />
    </div>
  )
}

export default DepartmentPage