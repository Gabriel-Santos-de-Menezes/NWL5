import { Router} from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsController } from './controllers/SettingsController';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

/* 
* Tipos de parâmetros

  Routes Params => de Rotas
  localhost:3333/settings/1

  Query Params => de filtros e buscas
  localhost:3333/settings/1?search=algumacoisa

  Body Params => de no corpo da requisição
  {
    "name": "Gabriel"
  }
*/
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export {routes};