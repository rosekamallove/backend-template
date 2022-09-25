import config from "config";
import { Request, Response } from "express";
import { get } from "lodash";
import {
  createAccessToken,
  createSession,
  findSessions,
  updateSession,
} from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { sign } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send("Invalid username or Password");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = createAccessToken({
    user,
    session,
  });

  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  });

  res.cookie("accessToken", accessToken, {
    maxAge: 900000, // 15m
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false, // set true in Prod (https)
  });

  res.cookie("refreshToken", refreshToken, {
    maxAge: 3.154e10, // 1y
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "strict",
    secure: false, // set true in Prod (https)
  });

  res.send({ accessToken, refreshToken });
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");
  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}
