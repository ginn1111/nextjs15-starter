import { http, HttpResponse } from "msw"

const todosResolver = () => {
  return HttpResponse.json([{ id: "1", title: "Do something" }])
}

export const handlers = [http.get("http://localhost:3000/api/todos", todosResolver)]
