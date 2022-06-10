import cors from 'cors';
import express from 'express';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import { UnknownRoutesHandler } from './middlewares/unkownRoutes.handler';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('🏠'));

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler);
app.use(ExceptionsHandler);

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(5000, () => console.log('Silence, ça tourne.'));
