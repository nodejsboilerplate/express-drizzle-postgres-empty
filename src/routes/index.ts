import type { createContainer } from "@/container";
import { fooRouter } from "./foo.route";
import { Router } from "express";

export const apiRouters = (container: ReturnType<typeof createContainer>) => {
  const router: Router = Router();

  router.use("/v1/users", fooRouter(container));

  return router;
};
