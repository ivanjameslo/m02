'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';
import { CustomModal } from "../ui/customModal"

const Payroll = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        payday: "",
        start_of_cutoff: "",
        end_of_cutoff: "",
        // emp_num: "",
    })
    
    // const [payday, setPayday] = useState("");
    // const [start_of_cutoff, setStartOfCutOff] = useState("");
    // const [end_of_cutoff, setEndOfCutOff] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/payroll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            // Do something with 'data'...
        } catch (error) {
            console.error('Error creating payroll:', error);
        }
    };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
    //     e.preventDefault();
    //     try{
    //       await fetch('/api/payroll',{
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         // body: JSON.stringify({
    //         //     payday: formData.payday,
    //         //     start_of_cutoff: formData.start_of_cutoff,
    //         //     end_of_cutoff: formData.end_of_cutoff,
    //         // })
    //         body: JSON.stringify(formData),
    //       });
          
    //       // router.replace(router.asPath);
    //       router.refresh();
    //     }catch(error){
    //       console.log(error)
    //     }
    //     router.refresh();
    //   }

    //DATE payday
    
    const handleDateChange = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }
        setFormData((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));
        console.log(date);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //fetching for dropdowns
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


    // const [showDetails, setShowDetails] = useState(false)

    // const [tableData, setTableData] = useState([]);

//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await fetch('/api/payroll', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             console.log(data); // Log the response data to the console for debugging

//             if (Array.isArray(data.tableData)) {
//                 setTableData(data.tableData);
//             } else {
//                 console.error('tableData is not an array');
//             }
//         } catch (error) {
//             console.error('Failed to fetch data:', error);
//         }
//     };

//     fetchData();
// }, []);

    return (
        <div>
            <div className="px-5 mt-5">
                <label className= "px-5 text-2xl font-bold text-blue-900">
                Payroll
                </label>
            </div>

            <div className= "pt-5  text-blue-900">
                <form onSubmit={handleSubmit} className="container mx-auto grid grid-cols-12 gap-2 items-center">
                    
                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">Payday</label>
                    </div>

                        <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'payday')}
                            />
                        </div>

                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">Start Cutoff Date</label>
                    </div>

                        <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'start_of_cutoff')}
                            />
                        </div>

                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">End Cutoff Date</label>
                    </div>

                        <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange(date, 'end_of_cutoff')}
                            />
                        </div>

                    <div className="col-start-9 col-end-12 justify-end flex-auto">
                        <Button type="submit" text="Generate Payroll"/>
                        {/* <Button onClick={() => setShowDetails(!showDetails)} text="Show Details"/> */}
                    </div>
                </form>
                {/* {showDetails && (
                    <CustomModal isOpen={showDetails} 
                    onCancel={() => setShowDetails(false)} 
                    title={'Payroll Details'}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>Basic Pay</th>
                                    <th>Total Additional Earnings</th>
                                    <th>Total Deductions</th>
                                    <th>SSS</th>
                                    <th>Pagibig</th>
                                    <th>PhilHealth</th>
                                    <th>Tax</th>
                                    <th>Net Pay</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((employee) => (
                                    <tr key={employee.emp_num}>
                                        <td>{employee.emp_num}</td>
                                        <td>{employee.basicPay}</td>
                                        <td>{employee.totalAddnlEarnings}</td>
                                        <td>{employee.totalDeductions}</td>
                                        <td>{employee.sss}</td>
                                        <td>{employee.pagibig}</td>
                                        <td>{employee.philhealth}</td>
                                        <td>{employee.tax}</td>
                                        <td>{employee.basicPay + employee.totalAddnlEarnings - employee.totalDeductions - employee.sss - employee.pagibig - employee.philhealth - employee.tax}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CustomModal>
                )} */}
            </div>
        </div>
    );
}
export default Payroll;