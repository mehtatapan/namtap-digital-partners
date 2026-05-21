import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Repo name for GitHub Pages — change here + in the router basepath if you rename the repo.
const REPO_BASE = "/namtap-digital-partners/";

export default defineConfig({
  base: REPO_BASE,
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  define: {
    __BASE_PATH__: JSON.stringify(REPO_BASE),
  },
});
