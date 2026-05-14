
import { createPaperclipMcpServer } from "./src/index.js";

const start = Date.now();
process.env.PAPERCLIP_API_URL = "http://localhost:8080";
process.env.PAPERCLIP_API_KEY = "test";

console.log("Starting initialization...");
try {
  const { server } = createPaperclipMcpServer();
  console.log(`Initialization took ${Date.now() - start}ms`);
} catch (e) {
  console.error("Initialization failed:", e);
}
