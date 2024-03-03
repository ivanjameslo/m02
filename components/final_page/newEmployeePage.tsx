import Navbar from "../ui/Navbar"
import NewEmployee from "../shared_add/newEmployee"
import NewEmployeeTable from "../shared_table/newEmployeeTable"

const newEmployeePage = () => {
    return (
        <div>
                <Navbar />
                <NewEmployee />
                <NewEmployeeTable />
        </div>
    )
}

export default newEmployeePage