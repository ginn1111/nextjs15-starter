import { URLBuilder } from "@/shared/lib/getUrl"
import { http, HttpResponse } from "msw"

const todosResolver = () => {
  return HttpResponse.json([{ id: "1", title: "Do something" }])
}

export const handlers = [
  http.get(new URLBuilder().withPath(URLBuilder.TODOS).build(), todosResolver),
]
