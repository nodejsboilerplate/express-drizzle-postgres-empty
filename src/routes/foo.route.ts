import { Router } from "express";
import { asyncHandler } from "@/utils";
import type { ContainerType } from "@/types";

export const fooRouter = (container: ContainerType) => {
  const router: Router = Router();

  // const { controllerContainer, middlewareContainer } = container;
  // const { fooController } = controllerContainer;
  // const { fooMiddleware } = middlewareContainer;

  return router;
};
