'use client'

import Image from 'next/image';
import { useState } from 'react';
//const fs = require('fs');
// const path = require('path');


const Navbar = () => {
  // State to manage dropdown visibility
  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showTaskManagerDropdown, setShowTaskManagerDropdown] = useState(false);
  const [showPayrollDropdown, setShowPayrollDropdown] = useState(false);

  // Function to toggle dropdown visibility for each section
  const toggleEmployeeDropdown = () => setShowEmployeeDropdown(!showEmployeeDropdown);
  const toggleCompanyDropdown = () => setShowCompanyDropdown(!showCompanyDropdown);
  const toggleTaskManagerDropdown = () => setShowTaskManagerDropdown(!showTaskManagerDropdown);
  const togglePayrollDropdown = () => setShowPayrollDropdown(!showPayrollDropdown);

  // Function to close dropdown when mouse leaves each section
  const closeEmployeeDropdown = () => setShowEmployeeDropdown(false);
  const closeCompanyDropdown = () => setShowCompanyDropdown(false);
  const closeTaskManagerDropdown = () => setShowTaskManagerDropdown(false);
  const closePayrollDropdown = () => setShowPayrollDropdown(false);

  return (
    <div>
<div className="bg-blue-900 p-5 text-white w-10px">
    
      <div className="grid grid-cols-9 gap-3">

        <div className="col-start-1 col-span-1">
            <a href="/">
                <Image
                  src='/logo.png'
                  alt='logo'
                  width={150}
                  height={100}
                  className='bg-left-top'
                />
            </a>
        </div>
  
        {/* Empty column for space */}
        <div className="col-start-2 col-span-2"></div>

        {/* Employee section */}
        <div className="col-start-4 col-span-7">
        <div className="grid grid-cols-4 gap-2 mt-3">
        <div className="col-start-1 col-span-1" onMouseEnter={toggleEmployeeDropdown} onMouseLeave={closeEmployeeDropdown}
        >
          <a href="#" className="hover:text-blue-400">EMPLOYEE</a>
          {showEmployeeDropdown && (
            <ul>
              <li><a href="/employee" className="hover:text-blue-400">Employee</a></li>
              <li><a href="/signatories" className="hover:text-blue-400">Signatories</a></li>
              <li><a href="/assign-designation" className="hover:text-blue-400">Assign Designation</a></li>
            </ul>
          )}
        </div>

        {/* Company section */}
        <div className="col-start-2 col-span-1" onMouseEnter={toggleCompanyDropdown} onMouseLeave={closeCompanyDropdown}
        >
          <a href="#" className="hover:text-blue-400">COMPANY</a>
          {showCompanyDropdown && (
            <ul>
              <li><a href="/department" className="hover:text-blue-400">Department</a></li>
              <li><a href="/designation" className="hover:text-blue-400">Designation</a></li>
            </ul>
          )}
        </div>

        {/* Task Manager section */}
        <div className="col-start-3 col-span-1" onMouseEnter={toggleTaskManagerDropdown} onMouseLeave={closeTaskManagerDropdown}
        >
          <a href="#" className="hover:text-blue-400">TASK MANAGER</a>
          {showTaskManagerDropdown && (
            <ul>
              <li><a href="/leaves" className="hover:text-blue-400">Leave Request</a></li>
              {/* Add other items for Task Manager here */}
            </ul>
          )}
        </div>

        {/* Payroll section */}
        <div className="col-start-4 col-span-1" onMouseEnter={togglePayrollDropdown} onMouseLeave={closePayrollDropdown}
        >
          <a href="#" className="hover:text-blue-400">PAYROLL</a>
          {showPayrollDropdown && (
            <ul>
              <li><a href="/addnlEarnings" className="hover:text-blue-400">Additional Earnings</a></li>
              <li><a href="/govtContributions" className="hover:text-blue-400">Government Contributions</a></li>
              <li><a href="/deductions" className="hover:text-blue-400">Deductions</a></li>
              <li><a href="/payroll" className="hover:text-blue-400">Payroll</a></li>
              {/* Add other items for Payroll here */}
            </ul>
          )}
        </div>

        {/* Empty column for space */}
        <div className="col-span-1"></div>
      </div>
      </div> </div> </div></div>
  );
};

export default Navbar;




// const Navbar = () => {

//   // State to manage dropdown visibility
//   const [showDropdown, setShowDropdown] = useState(false); 

//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
//   const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
//   const [showTaskManagerDropdown, setShowTaskManagerDropdown] = useState(false);
//   const [showPayrollDropdown, setShowPayrollDropdown] = useState(false);

//   const toggleEmployeeDropdown = () => setShowEmployeeDropdown(!showEmployeeDropdown);
//   const toggleCompanyDropdown = () => setShowCompanyDropdown(!showCompanyDropdown);
//   const toggleTaskManagerDropdown = () => setShowTaskManagerDropdown(!showTaskManagerDropdown);
//   const togglePayrollDropdown = () => setShowPayrollDropdown(!showPayrollDropdown);

//   return (
//     <div className="bg-blue-900 p-5 text-white w-10px items-left">
//         <div>
//           <a href="/">
//             <Image
//               src='/logo.png'
//               alt='logo'
//               width={150}
//               height={100}
//               className='bg-left-top'
//             />
//             </a>
//         </div>
//         <div className="pt-5 text-xl">
//           <div className="pt-6">
//               <div className="relative ml-5">
//                     <ul className="absolute left-0 ml-5 mt-2 bg-blue-900 rounded-md shadow-lg">
//                       <a href="/employee" className="mx-5 hover:text-blue-400">Employee</a><br/>
//                       <a href="/assign-designation" className="mx-5 hover:text-blue-400">Assign Designation</a><br/>
//                       <a href="/signatories" className="mx-5 hover:text-blue-400">Signatories</a><br/>
//                       <a href="/addEandD" className="mx-5 hover:text-blue-400">AddEandD</a><br/>
//                       <a href="/addnlEarnings" className="mx-5 hover:text-blue-400">addnlEarnings</a><br/>
//                       <a href="/leaves" className="mx-5 hover:text-blue-400">leave</a><br/>
//                       <a href="/payroll" className="mx-5 hover:text-blue-400">payroll</a><br/>
//                     </ul>
                  
//               </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar
