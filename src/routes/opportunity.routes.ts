import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controller";
import { applicationRouter } from "./applications.routes";

export const opportunityRouter = Router();

const opportunityControllers = new OpportunityControllers();

opportunityRouter.post("/", opportunityControllers.create);
opportunityRouter.get("/", opportunityControllers.readMany);
opportunityRouter.get("/:id", opportunityControllers.read);
opportunityRouter.patch("/:id", opportunityControllers.update);
opportunityRouter.delete("/:id", opportunityControllers.delete);

opportunityRouter.use("/", applicationRouter);
