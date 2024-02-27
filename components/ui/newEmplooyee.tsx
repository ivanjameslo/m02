'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const NewEmployee = () => {
  
    const router = useRouter();

    const [emp_num, setEmpNum] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address_line, setAddressLine] = useState('');
    const [brgy, setBrgy] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [zip_code, setZipCode] = useState('');

    const handleeEmpNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmpNum(e.target.value);
    }
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMiddleName(e.target.value);
    }
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const handleAddressLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressLine(e.target.value);
    }
    const handleBrgyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrgy(e.target.value);
    }
    const handleProvinceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProvince(e.target.value);
    }
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }
    const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setZipCode(e.target.value);
    }

  const addEmployee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      fetch('/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            emp_num: emp_num,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address_line: address_line,
            brgy: brgy,
            province: province,
            country: country,
            zip_code: zip_code
        })
    }) 
    setEmpNum('');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setAddressLine('');
    setBrgy('');
    setProvince('');
    setCountry('');
    setZipCode('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={addEmployee}>
        <input
          type="Int"
          placeholder="Employee Number"
          value={emp_num}
          onChange={(e) => {handleeEmpNumChange}}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {handleFirstNameChange}}
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={middleName}
          onChange={(e) => {handleMiddleNameChange}}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {handleLastNameChange}}
        />
        <input
          type="text"
          placeholder="Address Line"
          value={address_line}
          onChange={(e) => {handleAddressLineChange}}
        />
        <input
          type="text"
          placeholder="Barangay"
          value={brgy}
          onChange={(e) => {handleBrgyChange}}
        />
        <input
          type="text"
          placeholder="Province"
          value={province}
          onChange={(e) => {handleProvinceChange}}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => {handleCountryChange}}
        />
        <input
          type="Int"
          placeholder="Zip Code"
          value={zip_code}
          onChange={(e) => {handleZipCodeChange}}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewEmployee