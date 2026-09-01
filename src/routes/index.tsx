import { createFileRoute } from "@tanstack/react-router";
import App from "../app/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Something Special — A Birthday Journey" },
      {
        name: "description",
        content: "A cinematic interactive birthday journey for a very special sister.",
      },
      { property: "og:title", content: "Something Special — A Birthday Journey" },
      {
        property: "og:description",
        content: "A cinematic interactive birthday journey for a very special sister.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
