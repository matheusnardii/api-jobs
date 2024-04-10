import { Request, Response } from "express";
import { ApplicationServices } from "../services/application.services";

export class ApplicationControllers{
    async create(req: Request, res: Response){
        const applicationServices = new ApplicationServices();
        const response = await applicationServices.create(Number(req.params.id), req.body);

        return res.status(201).json(response);
    }

    async readMany(req: Request, res: Response){
        const applicationServices = new ApplicationServices();

        const response = await applicationServices.readMany(Number(req.params.id));

        return res.status(200).json(response);
    }

}