import express from 'express';
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()
const router = express.Router();


export default router;