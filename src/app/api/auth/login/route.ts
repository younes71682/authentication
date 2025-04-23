import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const prism = new PrismaClient()
}