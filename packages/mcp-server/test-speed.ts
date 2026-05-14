
import { PaperclipApiClient } from "./src/client.js";
import { createToolDefinitions } from "./src/tools.js";

const start = Date.now();
const client = new PaperclipApiClient({
  apiUrl: "http://localhost:8080",
  apiKey: "test",
  companyId: null,
  agentId: null,
  runId: null
});
console.log(`Client creation: ${Date.now() - start}ms`);

const startTools = Date.now();
const tools = createToolDefinitions(client);
console.log(`Tool definitions creation: ${Date.now() - startTools}ms`);
console.log(`Total: ${Date.now() - start}ms`);
console.log(`Number of tools: ${tools.length}`);
