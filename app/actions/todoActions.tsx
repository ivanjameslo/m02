"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


const prisma = new PrismaClient()

// CREATE FUNCTIONS

export async function createEmployee(formData: FormData){
    const emp_num = Number(formData.get('emp_num'))
    const firstName = formData.get('firstName') as string
    const middleName = formData.get('middleName') as string
    const lastName = formData.get('lastName') as string
    const address_line = formData.get('address_line') as string
    const brgy = formData.get('brgy') as string
    const province = formData.get('province') as string
    const country = formData.get('country') as string
    const zip_code = Number(formData.get('zip_code'))

    await prisma.employees.create({
        data: {
            emp_num: Number(formData.get('emp_num')),
            firstName: formData.get('firstName') as string,
            middleName: formData.get('middleName') as string,
            lastName: formData.get('lastName') as string,
            address_line: formData.get('address_line') as string,
            brgy: formData.get('brgy') as string,
            province: formData.get('province') as string,
            country: formData.get('country') as string,
            zip_code: Number(formData.get('zip_code')),
        }
    })

    revalidatePath('/')
}

export async function createDepartment(formData: FormData){
    const dept_name = formData.get('dept_name') as string
    const status = formData.get('status') as 'Active' | 'Inactive'
    
    await prisma.departments.create({
        data: {
            dept_name: formData.get('dept_name') as string,
            status: formData.get('status') as 'Active' | 'Inactive',
        }
    })

    revalidatePath('/')
}

//UPDATE FUNCTIONS

export async function updateEmployee(formData: FormData){
    // const id = Number(formData.get('id'))
    const emp_num = Number(formData.get('new_emp_num'))
    const firstName = formData.get('new_firstName') as string
    const middleName = formData.get('new_middleName') as string
    const lastName = formData.get('new_lastName') as string
    const address_line = formData.get('new_address_line') as string
    const brgy = formData.get('new_brgy') as string
    const province = formData.get('new_province') as string
    const country = formData.get('new_country') as string
    const zip_code = Number(formData.get('new_zip_code'))

    try{
    const updatedEmployeeData = await prisma.employees.update({
        where: {
            emp_num: emp_num
        },
        data: {
            emp_num,
            firstName,
            middleName,
            lastName,
            address_line,
            brgy,
            province,
            country,
            zip_code
        },
    });
    revalidatePath('/')
} catch (error) {
    console.error(error);
}}


//DELETE FUNCTIONS

export async function deleteEmployee(emp_num: number){
    try{
        const deletedEmployee = await prisma.employees.delete({
            where: {
                emp_num: emp_num
            }
        })
        return NextResponse.json(deleteEmployee)
    } catch (error) {
        console.log(error)
    }
    
}

// export async function deleteEmployee(emp_num: number){
//     try{
//         const deletedEmployee = await prisma.employees.delete({
//             where: {
//                 emp_num: emp_num
//             }
//         })
//         return NextResponse.json(deleteEmployee)
//     } catch (error) {
//         console.log(error)
//     }
    
// }