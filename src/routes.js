import { Router } from "express";

import CityController from "./app/controllers/CityController";
import ClientController from "./app/controllers/ClientController";

const routes = new Router();
// CITY
routes.post("/cities", CityController.store);

// CLIENT
routes.post("/clients", ClientController.store);

export default routes;
