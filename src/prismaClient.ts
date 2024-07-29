import { PrismaClient } from '../prisma/generated/client';

const prisma =  new PrismaClient({
  log: [
    { level: 'warn', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'error', emit: 'event' },
  ],
});

export default prisma;
