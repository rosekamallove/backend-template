import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import EventModel, { EventDocument } from "../model/events.model";

export async function createEvent(
  input: DocumentDefinition<Omit<EventDocument, "createdAt" | "updatedAt">>
) {
  return EventModel.create(input);
}

export async function findEvent(
  query: FilterQuery<EventDocument>,
  options: QueryOptions = { lean: true }
) {
  return EventModel.findOne(query, {}, options);
}

export async function findAndUpdateEvent(
  query: FilterQuery<EventDocument>,
  update: UpdateQuery<EventDocument>,
  options: QueryOptions
) {
  return EventModel.findOneAndUpdate(query, update, options);
}

export async function deleteEvent(query: FilterQuery<EventDocument>) {
  return EventModel.deleteOne(query);
}
