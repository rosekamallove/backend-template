import { Express, Request, Response } from "express";
import validateRequest from "./middleware/validateRequest";
import { createUserHandler } from "./controller/user.controller";
import { createUserSchema, createUserSessionSchema } from "./schema/user.schema";
import { createUserSessionHandler } from "./controller/session.controller";

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
}
