import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { PaperclipApiClient } from "./client.js";
import { readConfigFromEnv, type PaperclipMcpConfig } from "./config.js";

export function createPaperclipMcpServer(config: PaperclipMcpConfig = readConfigFromEnv()) {
  const server = new McpServer({
    name: "paperclip",
    version: "0.1.0",
  }, {
    capabilities: {
      tools: {
        listChanged: true
      }
    }
  });

  const client = new PaperclipApiClient(config);
  
  const registerTools = async () => {
    const { createToolDefinitions } = await import("./tools.js");
    const tools = createToolDefinitions(client);
    for (const tool of tools) {
      server.tool(tool.name, tool.description, tool.schema.shape, tool.execute);
    }
    
    // Notify the client that the tool list has changed after dynamic registration
    try {
      server.server.notification({
        method: "notifications/tools/list_changed"
      });
    } catch (error) {
      // Ignore notification errors if the transport is already closed
    }
    
    return tools;
  };

  return {
    server,
    client,
    registerTools,
  };
}

export async function runServer(config: PaperclipMcpConfig = readConfigFromEnv()) {
  const { server, registerTools } = createPaperclipMcpServer(config);
  const transport = new StdioServerTransport();
  
  // Connect as soon as possible to avoid initialization timeouts in clients
  await server.connect(transport);
  
  // Load and register tools asynchronously after connection
  void registerTools().catch((error) => {
    console.error("Failed to register Paperclip tools:", error);
  });
}
