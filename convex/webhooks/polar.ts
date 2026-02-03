import { Buffer as BufferPolyfill } from "buffer";

globalThis.Buffer = BufferPolyfill;

import { validateEvent } from "@polar-sh/sdk/webhooks";

import { httpAction } from "../_generated/server";

export const handlePolarWebhook = httpAction(async (_ctx, request) => {
  const rawBody = await request.text();

  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });

  const event = validateEvent(
    rawBody,
    headers,
    process.env.POLAR_WEBHOOK_SECRET as string
  );

  if (!event) {
    return new Response("Your Polar event request is not valid", {
      status: 400
    });
  }

  switch (event.type) {
    case "order.paid": {
      break;
    }
  }

  return new Response(null, {
    status: 200
  });
});
