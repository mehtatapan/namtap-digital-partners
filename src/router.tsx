import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

declare const __BASE_PATH__: string;
const basepath =
  typeof __BASE_PATH__ !== "undefined" ? __BASE_PATH__.replace(/\/$/, "") : "";

export const router = createRouter({
  routeTree,
  basepath: basepath || undefined,
  context: { queryClient },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { queryClient };
