import { Router } from "express";

import CityController from "./app/controllers/CityController";
import ClientController from "./app/controllers/ClientController";

const routes = new Router();
// CITY
routes.post("/cities", CityController.store);

// CLIENT
routes.post("/clients", ClientController.store);
routes.get("/clients/:id", ClientController.show);
routes.delete("/clients/:id", ClientController.delete);
routes.put("/clients/:id", ClientController.update);

export default routes;
