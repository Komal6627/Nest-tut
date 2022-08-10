import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

Injectable()
export class UserMiddelware implements NestMiddleware{
        use(req: Request, res: Response, next: NextFunction) {
            console.log("Request is comming..",req.url);
            next();
        }
}