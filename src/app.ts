import config from "config";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import connect from "./db/connect";
import log from "./logger";
import deserializeUser from "./middleware/deserializeUser";
import routes from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(
  cors({
    origin: config.get("origin"),
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(deserializeUser);

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);

  connect();
  routes(app);
});
