import { http, HttpResponse } from "msw";

const todosResolver = () => {
  return HttpResponse.json([{ id: "1", title: "Do something" }]);
};

export const handlers = [http.get("/api/todos", todosResolver)];
