import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

//Classe para fazer toda manipulação dos dados
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{}

export {SettingsRepository}