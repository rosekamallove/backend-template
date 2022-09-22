import express from "express";
import config from "config";
// import { deserializeUser } from "./middleware";
import log from "./logger";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
// app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
});
