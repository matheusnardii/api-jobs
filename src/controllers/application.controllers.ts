import { Request, Response } from "express";
import { ApplicationServices } from "../services/application.services";
import { container, inject, injectable } from "tsyringe";

@injectable()
export class ApplicationControllers{
    constructor(@inject("ApplicationServices") private applicationServices: ApplicationServices){}

    async create(req: Request, res: Response){

       
        const response = await this.applicationServices.create(Number(req.params.id), req.body);

        return res.status(201).json(response);
    }

    async readMany(req: Request, res: Response){
       
        const response = await this.applicationServices.readMany(Number(req.params.id));

        return res.status(200).json(response);
    }

}