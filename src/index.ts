import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { createServer } from "./Server";
import { createRoutes } from "./routes/index";
//import { createDatabase } from "./Database";
//import { Connection } from "typeorm";
import app_logger from "./logger/index";
//import "./types";
dotenv.config();

async function main() {
    console.log(process.env.SERVER_PORT)
    //const connection: Connection = await createDatabase();
    const routes:  express.Router = createRoutes();
    const server: express.Application = createServer(
        routes
    );

    server.listen(
        parseInt("8080"),
        () => app_logger.info("Server running at port 8080")
    );

}

main();

// import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });