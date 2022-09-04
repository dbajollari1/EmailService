import express from "express";
//import HttpError, { StatusCode } from "../excptions/HttpError";
import PublicService from "../services/PublicService";
import asyncHandler, { AsyncMiddleware } from "./helpers/asyncHandler";
import app_logger from "../logger";

export default class PublicController {

  private publService: PublicService;

  constructor(publService: PublicService) {
    this.publService = publService;
  }


  /**
   * sends an email generic function
   * @returns {AsyncMiddleware}
   */
  public sendEmail(): AsyncMiddleware {
    return asyncHandler(
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        const { to, subject, html } = req.body;
        const token = await this.publService.sendEmail(to, subject, html);

        res.status(200).json(token);
      }
    );
  }
}
