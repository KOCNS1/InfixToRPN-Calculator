import cors from 'cors';
import express from 'express';
import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import { UnknownRoutesHandler } from './middlewares/unkownRoutes.handler';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response): Response => res.send('🏠'));

/**
 * Returns 404 for all the unknown routes
 */
app.all('*', UnknownRoutesHandler);
app.use(ExceptionsHandler);

/**
 * App runing on port ${PORT}
 */
app.listen(PORT, () => console.log('🚀 Server started on port', PORT));
