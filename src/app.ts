import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routes/opportunity.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/opportunities", opportunityRouter);

app.use(HandleErrors.execute);
