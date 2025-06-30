import { http, HttpResponse } from "msw"
import { server } from "@mocks/server"
import { URLBuilder } from "@/shared/lib/getUrl"

describe("test MSW", () => {
  it("Should be fetch todos data", async () => {
    const resp = await fetch(new URLBuilder().withPath("/api/todos").build()).then((r) => r.json())
    expect(resp).toEqual(expect.arrayContaining([{ id: "1", title: "Do something" }]))
  })

  it("Should be NOT FOUND", async () => {
    server.use(
      http.get(
        new URLBuilder().withPath("/api/todos").build(),
        () => new HttpResponse(null, { status: 404 }),
      ),
    )

    const resp = await fetch(new URLBuilder().withPath("/api/todos").build())

    expect(resp.status).toEqual(404)
  })
})
