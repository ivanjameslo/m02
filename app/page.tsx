// import Image from "next/image";
// import StartingPage from "../components/ui/startingPage";
// // import NewEmployee from "../components/shared/newEmployee";
// // import Department from "../components/shared/department";
// // import Form from "@/components/ui/Form";
// // import { createEmployee } from "./actions/todoActions";
// // import Input from "@/components/ui/Input";
// // import Button from "@/components/ui/Button";
// // import NewEmployeeTable from "../components/shared_results/newEmployeeTable";
// // import Navbar from "@/components/shared/Navbar";
// import NewEmployeePage from "@/components/final_page/newEmployeePage";
// import DepartmentPage from "@/components/final_page/departmentPage";
// import DesignationPage from "@/components/final_page/designationPage";
// import AssignDesignationPage from "@/components/final_page/assignDesignationPage";

// export default function Home() {
//   return (
//     <main>
//       <AssignDesignationPage />
//     </main>
//   );
// }

// import Navbar from '../components/ui/Navbar'

const startingPage = () => {
  return (
    <div className="text-center">
      <div className="m-4">
        <h1>Employee Management System</h1>
      </div>

      <div className="bg-blue-900 p-5 text-white ">
        <div className="flex justify-between">
          <a href="/">
            
            </a>
            <ul className="flex content-center self-center">
              <a href="/new-employee" className="mx-5 hover:text-blue400">Employee</a>
              <a href="/assign-designation" className="mx-5 hover:text-blue400">Assign Designation</a>
              <a href="/department" className="mx-5 hover:text-blue400">Department</a>
              <a href="/designation" className="mx-5 hover:text-blue400">Designation</a>
            </ul>
        </div>
    </div>

      <div className="m-4">
        <h2>SAI Group</h2>
      </div>
      <div className="m-4">
        <p>Haw  |  Lo  |  Mejorada</p>
      </div>
    </div>
  )
}

export default startingPage


