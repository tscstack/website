import { httpRouter } from "convex/server";

import { handlePolarWebhook } from "./webhooks/polar";

const http = httpRouter();

http.route({
  path: "/polar-webhook",
  method: "POST",
  handler: handlePolarWebhook
});

export default http;
