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
    const id = Number(formData.get('id'))
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

export async function createDesignation(formData: FormData){
    const designation_name = formData.get('designation_name') as string
    const department_id = Number(formData.get('department_id'))
    const status = formData.get('status') as 'Active' | 'Inactive'
    
    await prisma.designation.create({
        data: {
            designation_name: formData.get('designation_name') as string,
            departments:{
                connect:{
                    id: Number(formData.get('department_id'))
                }
            },
            status: formData.get('status') as 'Active' | 'Inactive',
        }
    })

    revalidatePath('/')
}
//contractual is not yet reflected in the database
export async function createAssignDesignation(formData: FormData){
    const emp_num = Number(formData.get('emp_num'))
    const designation_id = Number(formData.get('designation_id'))
    const employee_type = formData.get('employee_type') as 'Regular' | 'Irregular' | 'PartTime' | 'Intern' | 'Remote' 
    const status = formData.get('status') as 'Active' | 'Resigned' | 'AWOL'
    
    await prisma.assign_designation.create({
        data: {
            employees:{
                connect: {
                    emp_num: Number(formData.get('emp_num'))
                }
            },
            designation:{
                connect:{
                    id: Number(formData.get('designation_id'))
                }
            },
            employee_type: formData.get('employee_type') as 'Regular' | 'Irregular' | 'PartTime' | 'Intern' | 'Remote',
            status: formData.get('status') as 'Active' | 'Resigned' | 'AWOL',
        }
    })

    revalidatePath('/')
}

export async function createLeaves(formData: FormData){
    const emp_num = Number(formData.get('emp_num'))
    let start_leave_date = formData.get('start_leave_date')
    let end_leave_date = formData.get('end_leave_date')
    const leave_type = formData.get('leave_type') as 'Vacation' | 'Sick' | 'Maternity' | 'Paternity' 
    const status = formData.get('status') as 'Pending' | 'Approved' | 'Denied'
    
    if (typeof start_leave_date === 'string') {
        start_leave_date = new Date(start_leave_date).toString();
    }
    if (typeof end_leave_date === 'string') {
        end_leave_date = new Date(end_leave_date).toString();
    }

    await prisma.leaves.create({
        data: {
            employees:{
                connect: {
                    emp_num: emp_num
                }
            },
            start_leave_date: start_leave_date instanceof Date ? start_leave_date : new Date(),
            end_leave_date: end_leave_date instanceof Date ? end_leave_date : new Date(),
            leave_type: leave_type,
            status: status,
        }
    })

    revalidatePath('/')
}


export async function createSignatories(formData: FormData){
    const emp_num = Number(formData.get('emp_num'))
    const highersuperior = Number(formData.get('highersuperior'))
    const status = formData.get('status') as 'Active' | 'Inactive'
    
    await prisma.signatories.create({
        data: {
            employees:{
                connect: {
                    emp_num: Number(formData.get('emp_num'))
                }
            },
            //superior is questionable, must be the table in your database
            superior:{
                connect: {
                    emp_num: Number(formData.get('highersuperior'))
                }
            },
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

// export async function updateDepartment(formData: FormData){
//     const id = Number(formData.get('id'))
//     const dept_name = formData.get('new_dept_name') as string
//     const status = formData.get('new_status') as string

//     try {
//         const updatedDepartmentData = await prisma.departments.update({
//             where: {
//                 id: id
//             },
//             data: {
//                 dept_name,
//                 status
//             },
//         });
//     } catch (error) {
//         console.error(error);
//     }
//     revalidatePath('/')
// }

export async function updateAssign(formData: FormData){
    // const id = Number(formData.get('id'))
    const emp_num = Number(formData.get('new_emp_num'))
    const designation_id = Number(formData.get('new_designation_id'))
    const employee_type = formData.get('new_employee_type') as string
    const status = formData.get('new_status') as string

    try{
    const updatedAssignData = await prisma.assign_designation.update({
        where: {
            emp_num: emp_num
        },
        data: {
            emp_num,
            designation_id,
            employee_type,
            status
        },
    });
    revalidatePath('/')
} catch (error) {
    console.error(error);
}
}

//DELETE FUNCTIONS

export async function deleteEmployee(emp_num: number){
    try{
        const deletedEmployee = await prisma.employees.delete({
            where: {
                emp_num: Number(emp_num)
            }
        })
        return NextResponse.json(deletedEmployee)
    } catch (error) {
        console.log(error)
    }
    
}

export async function deleteAssign(id: number){
    try{
        const deletedAssign = await prisma.assign_designation.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(deletedAssign)
    } catch (error) {
        console.log(error)
    }
    
}

export async function deleteDepartment(id: number){
    try{
        const deletedDepartment = await prisma.departments.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(deletedDepartment)
    } catch (error) {
        console.log(error)
    }
    
}

export async function deleteDesignation(id: number){
    try{
        const deletedDesignation = await prisma.designation.delete({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(deletedDesignation)
    } catch (error) {
        console.log(error)
    }
    
}
