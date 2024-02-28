"use servre"

import { revalidatePath } from "next/cache"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function create(formData: FormData){
    const input = formData.get('input') as string

    await prisma.todo.create({

    })
}