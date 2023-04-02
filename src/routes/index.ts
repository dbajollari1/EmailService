import express from "express";
import createPublicRouter from "./publicRouter";
import PublicController from "../controllers/PublicController";
import PublicService from "../services/PublicService";
import { Connection } from "typeorm";


export function createRoutes () {
    const router = express.Router();

    const pubService: PublicService = new PublicService();
    const pubController: PublicController = new PublicController(pubService);
    router.use('/public', createPublicRouter(pubController));
    router.get('/test', (req, res, next) => { res.status(200).json("success") });
    router.use('/', (req, res, next) => { res.status(200).json("success1") });
    return router;
};