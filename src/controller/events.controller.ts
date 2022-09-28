import { Request, Response } from "express";
import EventModel from "../model/events.model";
import { CreateEventInput, UpdateEventInput } from "../schema/events.schema";
import {
  createEvent,
  deleteEvent,
  findAndUpdateEvent,
  findEvent,
} from "../service/events.service";

export async function createEventHandler(
  req: Request<{}, {}, CreateEventInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const body = req.body;

  const event = await createEvent({ ...body, user: userId });

  return res.send(event);
}

export async function updateEventHandler(
  req: Request<UpdateEventInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const eventId = req.params.eventId;
  const update = req.body;

  const event = await findEvent({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }

  if (String(event.user) !== userId) {
    return res.sendStatus(403);
  }

  const updateEvent = await findAndUpdateEvent({ eventId }, update, {
    new: true,
  });

  return res.send(updateEvent);
}

export async function getEventHandler(
  req: Request<UpdateEventInput["params"]>,
  res: Response
) {
  const eventId = req.params.eventId;
  const event = await findEvent({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }

  return res.send(event);
}

export async function getAllEventsHandler(
  req: Request<UpdateEventInput["params"]>,
  res: Response
) {
  const user = res.locals.user;

  if (!user) {
    return res.sendStatus(404);
  }

  const events = await EventModel.find({ user: user._id });

  return res.send({ data: events });
}

export async function deleteEventHandler(
  req: Request<UpdateEventInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const eventId = req.params.eventId;

  const event = await findEvent({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }

  if (String(event.user) !== userId) {
    return res.sendStatus(403);
  }

  await deleteEvent({ eventId });

  return res.sendStatus(200);
}
