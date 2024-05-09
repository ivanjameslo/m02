'use client'

import Image from 'next/image';
import { useState } from 'react';
//const fs = require('fs');
// const path = require('path');


const Navbar = () => {

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false); 

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showEmployeeDropdown, setShowEmployeeDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showTaskManagerDropdown, setShowTaskManagerDropdown] = useState(false);
  const [showPayrollDropdown, setShowPayrollDropdown] = useState(false);

  const toggleEmployeeDropdown = () => setShowEmployeeDropdown(!showEmployeeDropdown);
  const toggleCompanyDropdown = () => setShowCompanyDropdown(!showCompanyDropdown);
  const toggleTaskManagerDropdown = () => setShowTaskManagerDropdown(!showTaskManagerDropdown);
  const togglePayrollDropdown = () => setShowPayrollDropdown(!showPayrollDropdown);

  return (
    <div className="bg-blue-900 p-5 text-white w-10px items-left">
        <div>
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
        <div className="pt-5 text-xl">
          <div className="pt-6">
              <div className="relative ml-5">
                <a href="#" className="mr-5 hover:text-blue-400" onMouseEnter={toggleDropdown}>
                  <span className="dropdown-arrow m-10 ">EMPLOYEE</span>
                  {/* ▼ */}
                </a>
                  {showEmployeeDropdown && (
                    <ul className="absolute left-0 ml-5 mt-2 bg-blue-900 rounded-md shadow-lg">
                      <a href="/employee" className="mx-5 hover:text-blue-400">Employee</a><br/>
                      <a href="/assign-designation" className="mx-5 hover:text-blue-400">Assign Designation</a><br/>
                      <a href="/signatories" className="mx-5 hover:text-blue-400">Signatories</a><br/>
                    </ul>
                  )}
              </div>
            </div>
        </div>

              {/* <ul className="flex content-center self-center">
                <a href="/new-employee" className="mx-5 hover:text-blue400">Employee</a>
                <a href="/assign-designation" className="mx-5 hover:text-blue400">Assign Designation</a>
                <a href="/department" className="mx-5 hover:text-blue400">Department</a>
                <a href="/designation" className="mx-5 hover:text-blue400">Designation</a>
                <a href="/leaves" className="mx-5 hover:text-blue400">Leave Request</a>
                <a href="/signatories" className="mx-5 hover:text-blue400">Signatories</a>
              </ul> */}
          
    </div>
  )
}

export default Navbar

// import Image from 'next/image';
// const fs = require('fs');
// const path = require('path');
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <div className="bg-blue-900 p-5 text-white ">
//         <div className="flex justify-between">
//           <a href="/">
//             <Image
//               src='/logo.png'
//               alt='logo'
//               width={150}
//               height={100}
//               className='bg-left-top'
//             />
//             </a>
//             <ul className="flex content-center self-center">
//               <a href="/employee" className="mx-5 hover:text-blue400">Employee</a>
//               <a href="/assign-designation" className="mx-5 hover:text-blue400">Assign Designation</a>
//               <a href="/department" className="mx-5 hover:text-blue400">Department</a>
//               <a href="/designation" className="mx-5 hover:text-blue400">Designation</a>
//               <a href="/leaves" className="mx-5 hover:text-blue400">Leave Request</a>
//               <a href="/signatories" className="mx-5 hover:text-blue400">Signatories</a>
//               <a href="/addnlEarnings" className="mx-5 hover:text-blue400">Additional Earnings</a>
//               <a href="/deductions" className="mx-5 hover:text-blue400">Deductions</a>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar

// import Image from 'next/image';
// const fs = require('fs');
// const path = require('path');
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <div className="bg-blue-900 p-5 text-white ">
//         <div className="flex justify-between">
//           <a href="/">
//             <Image
//               src='/logo.png'
//               alt='logo'
//               width={150}
//               height={100}
//               className='bg-left-top'
//             />
//             </a>
//             <ul className="flex content-center self-center">
//              <select>
//               <a href="/new-employee" className="mx-5 hover:text-blue400">Employee</a>
//               <a href="/assign-designation" className="mx-5 hover:text-blue400">Assign Designation</a>
//               <a href="/department" className="mx-5 hover:text-blue400">Department</a>
//               <a href="/designation" className="mx-5 hover:text-blue400">Designation</a>
//               <a href="/leaves" className="mx-5 hover:text-blue400">Leave Request</a>
//               <a href="/signatories" className="mx-5 hover:text-blue400">Signatories</a>
//              </select>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Navbar
