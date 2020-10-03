import { Router } from "express";

import CityController from "./app/controllers/CityController";
import CustomerController from "./app/controllers/CustomerController";

const routes = new Router();
// CITY
routes.post("/cities", CityController.store);

// CLIENT
routes.post("/customers", CustomerController.store);

export default routes;
