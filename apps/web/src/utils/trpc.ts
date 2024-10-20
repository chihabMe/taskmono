import type { AppRouter } from "server/src/trpc/routes";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
