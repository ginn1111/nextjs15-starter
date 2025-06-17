import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Provide the server-side API with the request handlers.
export const server = setupServer(...handlers);
