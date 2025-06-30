import "@testing-library/jest-dom"
import { server } from "@mocks/server"
import dotenv from "dotenv"

dotenv.config({
  path: "./env.local",
})

beforeAll(() => {
  // Enable API mocking before all the tests.
  Object.defineProperty(document, "fonts", {
    value: {
      ready: Promise.resolve(),
      add: jest.fn(),
    },
  })
  // Enable API mocking before all the tests.
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
  server.listen()
})

afterEach(() => {
  // Reset the request handlers between each test.
  // This way the handlers we add on a per-test basis
  // do not leak to other, irrelevant tests.
  server.resetHandlers()
})

afterAll(() => {
  // Finally, disable API mocking after the tests are done.
  server.close()
})
