"use client";

import { initClient } from "@ts-rest/core";
import { contract } from "./contract";

const pageApiClient = initClient(contract, {
  baseUrl: "http://localhost:3000/api",
  baseHeaders: {},
});

const appApiClient = initClient(contract, {
  baseUrl: "http://localhost:3000/app-api",
  baseHeaders: {},
});

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <section>
        <h2>Call to Page API Route</h2>
        <div className="flex gap-x-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              pageApiClient.createPost({
                body: {
                  title: "Post Title",
                  body: "Post Body",
                  // file: new File(["hello"], "hello.txt", { type: "text/plain" }),
                },
              });
            }}
          >
            body as object
          </button>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              const formData = new FormData();
              formData.append("title", "Post Title");
              formData.append("body", "Post Body");
              pageApiClient.createPost({
                body: formData,
              });
            }}
          >
            body as FormData
          </button>
        </div>
      </section>

      <section>
        <h2>Call to App Route Handler</h2>
        <div className="flex gap-x-4">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              appApiClient.createPost({
                body: {
                  title: "Post Title",
                  body: "Post Body",
                  // file: new File(["hello"], "hello.txt", { type: "text/plain" }),
                },
              });
            }}
          >
            body as object
          </button>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              const formData = new FormData();
              formData.append("title", "Post Title");
              formData.append("body", "Post Body");
              appApiClient.createPost({
                body: formData,
              });
            }}
          >
            body as FormData
          </button>
        </div>
      </section>
    </div>
  );
}
