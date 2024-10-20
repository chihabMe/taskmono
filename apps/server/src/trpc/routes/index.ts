import { router } from "..";
import { booksRouter } from "./books";
import { usersRouter } from "./users";

export const appRouter = router({
  users: usersRouter,
  books: booksRouter,
});

export type AppRouter = typeof appRouter;
