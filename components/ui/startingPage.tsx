import Navbar from './Navbar'

const startingPage = () => {
  return (
    <div className="text-center">
      <Navbar />
      <div className="m-4">
        <h1>Employee Management System</h1>
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

//logo, navbar, and buttons (could also be placed on the navbar) to newEmployees, 
//assignDesgination, designation, and department