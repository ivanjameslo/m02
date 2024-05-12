'use client'

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import ReactDateTimeClass from 'react-datetime';
import { Moment } from 'moment';

const Payroll = () => {
    
    const router = useRouter();

    const [payday, setPayday] = useState("");
    const [start_of_cutoff, setStartOfCutOff] = useState("");
    const [end_of_cutoff, setEndOfCutOff] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement | HTMLSelectElement>) => {
        e.preventDefault();
        try{
          await fetch('/api/payroll',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                payday,
                start_of_cutoff,
                end_of_cutoff
            })
          });
          
          // router.replace(router.asPath);
          router.refresh();
        }catch(error){
          console.log(error)
        }
        router.refresh();
      }

    //DATE payday
    const handleDateChange = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }

        setPayday((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));
        
        console.log(date);
    }

    //DATE start_of_cutoff
    const handleDateChange2 = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }

        setStartOfCutOff((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));

        console.log(date);
    }

    //DATE end_of_cutoff
    const handleDateChange3 = (date: string | Moment, name: string) => {
        let dateString: string;

        if (typeof date === 'string') {
            dateString = new Date(date).toISOString();
        } else {
            dateString = date.toDate().toISOString();
        }

        setEndOfCutOff((prevData: any) => (
            {
                ...prevData,
                [name]: dateString
            }
        ));

        console.log(date);
    }

    // const [totalDeductions, setTotalDeductions] = useState(0);
    // const [totalAddnlEarnings, setTotalAddnlEarnings] = useState(0);

    // useEffect(() => {
    //     let currentDate = new Date();
    //     let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 25);
    //     let currentMonth5th = new Date(currentDate.getFullYear(), currentDate.getMonth(), 5);
    //     let currentMonth6th = new Date(currentDate.getFullYear(), currentDate.getMonth(), 6);
    //     let currentMonth22nd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 22);

    //     let newTotalDeductions = 0;
    //     let newTotalAddnlEarnings = 0;

    //     if (payday === "10") {
    //         deductions.forEach(deduction => {
    //             let deductionDate = new Date(deduction.date);
    //             if (deductionDate >= prevMonth && deductionDate <= currentMonth5th) {
    //                 newTotalDeductions += deduction.amount;
    //             }
    //         });

    //         addnlEarnings.forEach(earning => {
    //             let earningDate = new Date(earning.date);
    //             if (earningDate >= prevMonth && earningDate <= currentMonth5th) {
    //                 newTotalAddnlEarnings += earning.amount;
    //             }
    //         });
    //     } else if (payday === "25") {
    //         deductions.forEach(deduction => {
    //             let deductionDate = new Date(deduction.date);
    //             if (deductionDate >= currentMonth6th && deductionDate <= currentMonth22nd) {
    //                 newTotalDeductions += deduction.amount;
    //             }
    //         });

    //         addnlEarnings.forEach(earning => {
    //             let earningDate = new Date(earning.date);
    //             if (earningDate >= currentMonth6th && earningDate <= currentMonth22nd) {
    //                 newTotalAddnlEarnings += earning.amount;
    //             }
    //         });
    //     }

    //     setTotalDeductions(newTotalDeductions);
    //     setTotalAddnlEarnings(newTotalAddnlEarnings);
    // }, [payday]);

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
                                    onChange={(date) => handleDateChange2(date, 'start_of_cutoff')}
                            />
                        </div>

                    <div className="text-right col-start-1 col-end-3">
                        <label className="text-color-black text-right self-center">End Cutoff Date</label>
                    </div>

                        <div className="text-left col-start-3 col-end-5 border border-blue-300 rounded-md px-4 py-2">
                            <ReactDateTimeClass
                                    dateFormat="YYYY-MM-DD"
                                    timeFormat="HH:mm:ss.SSS"
                                    onChange={(date) => handleDateChange3(date, 'end_of_cutoff')}
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
export default Payroll;