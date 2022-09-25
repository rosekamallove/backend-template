import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import log from "../utils/logger";

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // `Carrying` from Functional Programming
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (e: any) {
      log.error(e);
      return res.status(400).send(e.errors);
    }
  };

export default validate;
