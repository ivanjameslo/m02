const Navbar = () => {
  return (
    <div className="bg-blue-900 p-4 text-white">
        <div className="flex justify-between">
            <h2>SAI</h2> 
            {/* can be replaced by logo */}
            <ul className="flex">
                <li className="mx-4">New Employee</li>
                <li className="mx-4">Assign Designation</li>
                <li className="mx-4">Designation</li>
                <li className="mx-4">Department</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar