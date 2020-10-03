import { Router } from "express";

import CityController from "./app/controllers/CityController";
import ClientController from "./app/controllers/ClientController";

const routes = new Router();
// CITY
routes.post("/cities", CityController.createCity);
routes.get("/name-cities/:name", CityController.getCityByName);
routes.get("/uf-cities/:uf", CityController.getCityByUf);

// CLIENT
routes.post("/clients", ClientController.createClient);
routes.get("/clients/:id", ClientController.getClientById);
routes.get("/name-clients/:name", ClientController.getClientByName);
routes.delete("/clients/:id", ClientController.deleteClientById);
routes.put("/clients/:id", ClientController.updateClientById);

export default routes;
