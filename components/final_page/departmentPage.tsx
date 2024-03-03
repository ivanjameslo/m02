import Department from "@/components/shared/department";
import Navbar from "../shared/Navbar";
import DepartmentTable from "../shared_results/departmentTable";

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