import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const contract = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    contentType: "multipart/form-data",
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: "Create a post",
  },
});
