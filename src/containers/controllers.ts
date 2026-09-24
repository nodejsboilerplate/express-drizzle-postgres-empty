import {} from "@/controllers";
import type { createServices } from "./services";

export const createControllers = (
  services: ReturnType<typeof createServices>
) => {
  const {
    // fooService,
  } = services;

  // const fooController = new FooController({
  //   fooService,
  // });

  return {
    // fooController,
  };
};
