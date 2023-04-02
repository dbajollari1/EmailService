"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const Server_1 = require("./Server");
const index_1 = require("./routes/index");
//import { createDatabase } from "./Database";
//import { Connection } from "typeorm";
const index_2 = __importDefault(require("./logger/index"));
//import "./types";
dotenv_1.default.config();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(process.env.SERVER_PORT);
        //const connection: Connection = await createDatabase();
        const routes = (0, index_1.createRoutes)();
        const server = (0, Server_1.createServer)(routes);
        server.listen(parseInt("8080"), () => index_2.default.info("Server running at port 8080"));
    });
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
