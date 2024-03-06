import Image from "next/image";
import StartingPage from "../components/ui/startingPage";
// import NewEmployee from "../components/shared/newEmployee";
// import Department from "../components/shared/department";
// import Form from "@/components/ui/Form";
// import { createEmployee } from "./actions/todoActions";
// import Input from "@/components/ui/Input";
// import Button from "@/components/ui/Button";
// import NewEmployeeTable from "../components/shared_results/newEmployeeTable";
// import Navbar from "@/components/shared/Navbar";
import NewEmployeePage from "@/components/final_page/newEmployeePage";
import DepartmentPage from "@/components/final_page/departmentPage";
import DesignationPage from "@/components/final_page/designationPage";
import AssignDesignationPage from "@/components/final_page/assignDesignationPage";

export default function Home() {
  return (
    <main>
      <AssignDesignationPage />
      {/* <NewEmployeePage /> */}
    </main>
  );
}


