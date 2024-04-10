import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";

export class OpportunityControllers {
    async create(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.create(req.body);

        return res.status(201).json(response);
    }
    
    async readMany(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.readMany();

        return res.status(200).json(response);
    }

    read(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = opportunityServices.read(res.locals.opportunity);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        const response = await opportunityServices.update(Number(req.params.id), req.body); 

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response){
        const opportunityServices = new OpportunityServices();

        await opportunityServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}