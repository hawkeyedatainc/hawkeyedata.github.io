import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const getBasePath = () => {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) return "/";

  const [owner, name] = repo.split("/");
  if (!owner || !name) return "/";

  // User/Org Pages repo (e.g. hawkeyedatainc.github.io) is served from root.
  if (name.toLowerCase() === `${owner.toLowerCase()}.github.io`) {
    return "/";
  }

  // Project Pages repo is served from /<repo-name>/.
  return `/${name}/`;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
