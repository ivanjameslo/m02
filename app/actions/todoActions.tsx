"use server"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function create(formData: FormData){
    const input = formData.get('input') as string

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

    await prisma.departments.create({
        data: {
            dept_name: formData.get('dept_name') as string,
            status: formData.get('status') as 'Active' | 'Inactive',
        }
    })
    revalidatePath('/')


}