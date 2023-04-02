"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const HttpError_1 = __importStar(require("./exceptions/HttpError"));
const index_1 = __importDefault(require("./logger/index"));
function createServer(routes) {
    const app = (0, express_1.default)();
    /**
     * Middlewares
    */
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(express_1.default.json());
    app.set('etag', false);
    app.use(function (request, response, next) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        //Handle Preflight 
        if (request.method === 'OPTIONS') {
            response.status(200).send();
        }
        else {
            next();
        }
    });
    /**
     * Routes
    */
    app.use("/", routes);
    /**
     * 404 Error Handler
    */
    app.use((req, res, next) => {
        const error = new HttpError_1.default("Not Found");
        error.statusCode = HttpError_1.StatusCode.NOT_FOUND;
        next(error);
    });
    /**
     * Error Handler
    */
    app.use((error, req, res, next) => {
        const statusCode = error.statusCode ? error.statusCode.valueOf() : HttpError_1.StatusCode.INTERNAL_SERVER_ERROR.valueOf();
        index_1.default.error(`${statusCode} --- ${error.message}`);
        res
            .status(statusCode)
            .json({
            message: error.message
        });
    });
    index_1.default.info('loging server start...');
    return app;
}
exports.createServer = createServer;
;
