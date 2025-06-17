import { http, HttpResponse } from "msw";
import { server } from "../__mocks__/msw/server";

describe("test MSW", () => {
  it("Should be fetch todos data", async () => {
    const resp = await fetch("/api/todos").then((r) => r.json());
    expect(resp).toEqual(
      expect.arrayContaining([{ id: "1", title: "Do something" }]),
    );
  });

  it("Should be NOT FOUND", async () => {
    server.use(
      http.get("/api/todos", () => new HttpResponse(null, { status: 404 })),
    );

    const resp = await fetch("/api/todos");

    expect(resp.status).toEqual(404);
  });
});
