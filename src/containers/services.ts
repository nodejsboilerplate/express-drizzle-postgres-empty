import {} from "@/services";
import type { createRepositories } from "./repositories"; // using for types
import type { createValidators } from "./validators"; // using for types
import type { createRedisServices } from "./redis-services"; // using for types

export const createServices = ({
  repositories,
  validators,
  redisServices,
}: {
  repositories: ReturnType<typeof createRepositories>;
  validators: ReturnType<typeof createValidators>;
  redisServices: ReturnType<typeof createRedisServices>;
}) => {
  const {} = repositories;
  const {} = validators;
  const {} = redisServices;

  // const fooService = new FooService({
  //   userInputValidators,
  //   userRepository,
  // });

  return {};
};
