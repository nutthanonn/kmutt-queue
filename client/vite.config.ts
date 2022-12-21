import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  plugins: [react(), WindiCSS()],
  server: {
    port: 3000,
    host: "localhost",
  },
});
