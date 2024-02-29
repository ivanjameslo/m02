import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = globalThis as unknown as {
    employees: any;
    prisma: PrismaClient | undefined;
}

export const prisma = globalForPrisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}