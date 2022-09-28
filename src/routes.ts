import { Express, Request, Response } from "express";
import {
  createEventHandler,
  deleteEventHandler,
  getAllEventsHandler,
  getEventHandler,
  updateEventHandler,
} from "./controller/events.controller";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import {
  createUserHandler,
  getCurrentUser,
} from "./controller/user.controller";
import {
  default as requiresUser,
  default as requireUser,
} from "./middleware/requireUser";
import validateRequest from "./middleware/validateRequest";
import validateResource from "./middleware/validateResource";
import {
  createEventSchema,
  deleteEventSchema,
  getEventSchema,
  updateEventSchema,
} from "./schema/events.schema";
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

  app.post(
    "/api/v1/events",
    [requiresUser, validateResource(createEventSchema)],
    createEventHandler
  );

  app.put(
    "/api/v1/events/:eventId",
    [requireUser, validateResource(updateEventSchema)],
    updateEventHandler
  );

  app.get("/api/v1/events", requireUser, getAllEventsHandler);

  app.get(
    "/api/v1/events/:eventId",
    validateResource(getEventSchema),
    getEventHandler
  );

  app.delete(
    "/api/v1/events/:eventId",
    [requireUser, validateResource(deleteEventSchema)],
    deleteEventHandler
  );
}
