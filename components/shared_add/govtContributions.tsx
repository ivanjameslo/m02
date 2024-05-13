'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';

// Use 'use client' if you want to make the page client side rendered
// It is client side rendered if you make changes within the browser
// which includes useRouter, useState, useEffect
// if you have forms in a specific file use 'use client'

const GovtContributions = () => {

  const router = useRouter();

  const [emp_num, setEmpNum] = useState("");
  const [sss_number, setSSS] = useState("");
  const [pagibig_number, setPagibig] = useState("");
  const [philhealth_number, setPhilhealth] = useState("");
  const [tin_number, setTin] = useState("");
  const [date, setDate] = useState("");
  
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;

//     switch (name) {
//         case 'emp_num':
//             setEmpNum(value);
//             break;
//         case 'sss_number':
//             setSSS(value);
//             break;
//         case 'pagibig_number':
//             setPagibig(value);
//             break;
//         case 'philhealth_number':
//             setPhilhealth(value);
//             break;
//         case 'tin_number':
//             setTin(value);
//             break;
//         case 'date':
//             setDate(value);
//             break;
//         default:
//             break;
//     }
// };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
    e.preventDefault();
    try{
      await fetch('/api/govtContributions',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emp_num: Number(emp_num),
          sss_number: sss_number,
          pagibig_number: pagibig_number,
          philhealth_number: philhealth_number,
          tin_number: tin_number,
          date
        })
      });
      
      // router.replace(router.asPath);
      router.refresh();
    }catch(error){
      console.log(error)
    }

    setEmpNum("");
    setSSS("");
    setPagibig("");
    setPhilhealth("");
    setTin("");
    setDate("");

    router.refresh();
  }

  //DROPDOWN
  const [employees, setEmployees] = useState([]);
    const fetchEmployees = async () => {
        const response = await fetch('/api/employees', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
            setEmployees(data);
    };

    useEffect(() => {
        fetchEmployees().catch(error => console.log(error));
    }, []);

    const [basicPay, setBasicPay] = useState(0);

    //DATE
    const handleDateChange = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }

        setDate((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));

        console.log(date);
    }

  return (
    <div>
      <div className="px-5 mt-5">
        <label className= "px-5 text-2xl font-bold text-blue-900">
        Government Contributions
        </label>
      </div>

      <div className= "pt-5  text-blue-900">
        <form onSubmit={handleSubmit} className="container mx-auto grid grid-cols-12 gap-2 items-center">
          
          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Employee Number</label>
          </div>

                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <select name="emp_num" value={emp_num} onChange={e => setEmpNum(e.target.value)}
                        className={`w-full focus:outline-none focus:border-none ${
                            emp_num ? 'text-blue-800' : 'text-gray-400'
                        }`}>
                        <option value="" disabled hidden>Select Employee</option>
                        {employees.map((employees: any) => (
                            <option key={employees.emp_num} value={employees.emp_num}  className="text-blue-800">
                                {employees.firstName} {employees.lastName}
                            </option>
                        ))}
                    </select>
                </div>

          <div className="text-right col-start-1 col-end-3 ">
            <label className="text-color-black text-right self-center">SSS Number</label>
          </div>
          
                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                        <input name="sss_number" type="text" placeholder="Enter SSS Number" value={sss_number} onChange={e => setSSS(e.target.value)} 
                        className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Pagibig Number</label>
          </div>

                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <input name="pagibig_number" type="text" placeholder="Enter Pagibig Number" value={pagibig_number} onChange={e => setPagibig(e.target.value)} 
                    className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">PhilHealth Number</label>
          </div>

                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <input name="philhealth_number" type="text" placeholder="Enter PhilHealth Number" value={philhealth_number} onChange={e => setPhilhealth(e.target.value)} 
                    className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Tin Number</label>
          </div>

                <div className="col-start-3 col-end-7 border border-blue-300 rounded-md px-4 py-2">
                    <input name="tin_number" type="text" placeholder="Enter Tin Number" value={tin_number} onChange={e => setTin(e.target.value)} 
                    className=" text-blue-800 w-full focus:outline-none focus:border-none placeholder-blueGray-400"/>
                </div>

          <div className="text-right col-start-1 col-end-3">
            <label className="text-color-black text-right self-center">Date</label>
          </div>

                <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                    <ReactDateTimeClass
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm:ss.SSS"
                            onChange={(date) => handleDateChange(date, 'date')}
                    />
                </div>

          <div className="col-start-9 col-end-12 justify-end flex-auto">
            <Button type="submit" text="Add"/>
          </div>

        </form>
      </div>
    </div>
  );
}

export default GovtContributions;