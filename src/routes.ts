import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import {
  createUserHandler,
  getCurrentUser,
} from "./controller/user.controller";
import requiresUser from "./middleware/requireUser";
import validateRequest from "./middleware/validateRequest";
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (_req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post(
    "/api/v1/users",
    validateRequest(createUserSchema),
    createUserHandler
  );

  app.get("/api/v1/me", requiresUser, getCurrentUser);

  app.post(
    "/api/v1/sessions",
    validateRequest(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/v1/sessions", requiresUser, getUserSessionsHandler);

  app.delete("/api/v1/sessions", requiresUser, invalidateUserSessionHandler);
}
