import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());
app.get("/", (c) => c.json("Hello Node.js!"));

const port = parseInt(process.env.PORT ?? "8000");
console.log(`running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
