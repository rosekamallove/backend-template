import { Express, Request, Response } from "express";
import validateRequest from "./middleware/validateRequest";
import { createUserHandler } from "./controller/user.controller";
import {
  createUserSchema,
  createUserSessionSchema,
} from "./schema/user.schema";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import requiresUser from "./middleware/requireUser";

export default function (app: Express) {
  app.get("/healthcheck", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post(
    "/api/v1/users",
    validateRequest(createUserSchema),
    createUserHandler
  );

  app.post(
    "/api/v1/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/v1/sessions", requiresUser, getUserSessionsHandler);

  app.delete("/api/v1/sessions", requiresUser, invalidateUserSessionHandler);
}
