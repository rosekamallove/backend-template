import { Request, Response } from "express";
import { get, omit } from "lodash";
import log from "../logger";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), "password"));
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getCurrentUser(req: Request, res: Response) {
  const user = get(req, "user");
  return res.send(user);
}
