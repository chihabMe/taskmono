import { publicProcedure, router } from "..";

export const booksRouter = router({
  getAllBooks: publicProcedure.query(() => {
    return [
      { id: 1, name: "Book1" },
      { id: 2, name: "Book2" },
      { id: 3, name: "Book3" },
    ];
  }),
  getBookById: publicProcedure.query(() => {
    return { id: 1, name: "Book1" };
  }),
});
