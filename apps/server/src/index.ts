import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import {appRouter } from "./trpc"
import { trpcServer } from '@hono/trpc-server' // Deno 'npm:@hono/trpc-server'



const app = new Hono();
app.use(logger());
app.use("/trpc/*",trpcServer({
  router:appRouter
}))


const port = parseInt(process.env.PORT ?? "8000");
console.log(`running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
