import Navbar from "../shared/Navbar"
import NewEmployee from "../shared/newEmployee"
import NewEmployeeTable from "../shared_results/newEmployeeTable"

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