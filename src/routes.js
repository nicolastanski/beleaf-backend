import { Router } from "express";
import LunchController from "./app/controllers/LunchController";
import authMiddleware from "./app/middlewares/auth";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";

const routes = new Router();

routes.post("/auth", AuthController.store);
routes.post("/users", UserController.store);
routes.get("/lunches", LunchController.index);
routes.get("/lunches/:id", LunchController.show);

routes.use(authMiddleware);

routes.post("/lunches", LunchController.store);
routes.put("/lunches/:id", LunchController.update);
routes.delete("/lunches/:id", LunchController.delete);

module.exports = routes;
