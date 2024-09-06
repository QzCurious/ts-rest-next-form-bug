import { contract } from "@/app/contract";
import { createNextRoute, createNextRouter } from "@ts-rest/next";
const postsRouter = createNextRoute(contract, {
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
});

export default createNextRouter(contract, postsRouter);
