import Image from 'next/image';
const fs = require('fs');
const path = require('path');
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className="bg-blue-900 p-5 text-white ">
        <div className="flex justify-between">
          <a href="/">
            <Image
              src='/logo.png'
              alt='logo'
              width={150}
              height={100}
              className='bg-left-top'
            />
            </a>
            <ul className="flex content-center self-center">
              <a href="/new-employee" className="mx-5 hover:text-blue400">Employee</a>
              <a href="/assign-designation" className="mx-5 hover:text-blue400">Assign Designation</a>
              <a href="/department" className="mx-5 hover:text-blue400">Department</a>
              <a href="/designation" className="mx-5 hover:text-blue400">Designation</a>
              <a href="/leaves" className="mx-5 hover:text-blue400">Leave Request</a>
              <a href="/signatories" className="mx-5 hover:text-blue400">Signatories</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar


// import NavButton from '@/components/ui/NavButton';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <div className="bg-blue-900 p-5 text-white ">
//         <div className="flex justify-between">
//             <Image
//               src='/logo.png'
//               alt='logo'
//               width={150}
//               height={100}
//               className='bg-left-top'
//             />
//             {/* can be replaced by logo */}
//             <ul className="flex content-center self-center">
//                 <NavButton
//                   className="mx-5"
//                   text="New Employee"
//                   type="button"
//                   // <Link to="@/app/">Contact</Link>
//                   // onClick={() => {}}
//                 />
//                 <NavButton
//                   className="mx-5"
//                   text= "Assign Designation"
//                   type="button"
//                   // onClick={() => {}}
//                   />
//                 <NavButton
//                   className="mx-5"
//                   text= "New Designation"
//                   type="button"
//                   // onClick={() => {}}
//                   />
//                 <NavButton
//                   className="mx-5"
//                   text= "New Department"
//                   type="button"
//                   // onClick={() => {}}
//                 />
//             </ul>
//         </div>

//     </div>
//   )
// }

// export default Navbar