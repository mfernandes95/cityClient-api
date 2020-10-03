import { Router } from "express";

import CityController from "./app/controllers/CityController";
import ClientController from "./app/controllers/ClientController";

const routes = new Router();
// CITY
routes.post("/cities", CityController.store);

// CLIENT
routes.post("/clients", ClientController.createClient);
routes.get("/clients/:id", ClientController.getClientById);
routes.get("/name-clients/:name", ClientController.getClientByName);
routes.delete("/clients/:id", ClientController.deleteClientById);
routes.put("/clients/:id", ClientController.updateClientById);

export default routes;
