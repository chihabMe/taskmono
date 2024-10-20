import { publicProcedure, router } from "..";

export const usersRouter = router({
  getAllUsers: publicProcedure.query(() => {
    return [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "John Smith" },
    ];
  }),
});
