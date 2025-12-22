//CODE 1: POST ENDPOINT (Create User)
//user.controller.ts
import { Request, Response, NextFunction } from "express";
import { User } from "./user.model";
import { successResponse } from "./response";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.create(req.body);
    return successResponse(res, 201, "User created", user);
  } catch (err) {
    next(err);
  }
};

//user.routes.ts
import { Router } from "express";
import { createUser } from "./user.controller";

const router = Router();

router.post("/users", createUser);

export default router;

//CODE 2: CENTRALIZED RESPONSE + ERROR HANDLER
//Reusable Success Response
//response.ts
import { Response } from "express";

export const successResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: any
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

Global Error Handler (ONE place)
error.middleware.ts
import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

Register in app.ts
import express from "express";
import userRoutes from "./user.routes";
import { globalErrorHandler } from "./error.middleware";

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

// MUST be last
app.use(globalErrorHandler);

export default app;

