import express from "express";
import PublicController from "../controllers/PublicController";
//import asyncHandler from "../controllers/helpers/asyncHandler";

export default function(publicController: PublicController): express.Router {
    const router: express.Router = express.Router();

    router.post('/email', publicController.sendEmail());
    return router;
}