import express from 'express'
import routes  from './routers/index.js'
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const app = express(); // run the program 
app.use(express.urlencoded({extended: true}));
routes(app);
export default app;
