import { createNextHandler, tsr } from "@ts-rest/serverless/next";
import { contract } from "../../contract";

const handler = createNextHandler(
  contract,
  tsr.router(contract, {
    createPost: async (args) => {
      return {
        status: 201,
        body: {
          id: "id",
          title: "title",
          body: "body",
        },
      };
    },
  }),
  {
    handlerType: "app-router",
    basePath: "/app-api",
  }
);

export {
  handler as DELETE,
  handler as GET,
  handler as OPTIONS,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
