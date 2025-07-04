async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("./server")
    server.listen({ onUnhandledRequest: "warn" })
  } else {
    const { worker } = await import("./browser")
    await worker.start()
  }
}

export { initMocks }
