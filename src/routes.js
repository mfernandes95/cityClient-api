import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  console.log("HERRRR");
  return res.status(200).json({ message: "Hello world!" });
});
// routes.post("/appointments", AppointmentController.store);

export default routes;
