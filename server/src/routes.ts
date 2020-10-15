import { Router } from 'express';
import multer from 'multer';

import { multerConfig } from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

export const routes = Router();
const upload = multer(multerConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
