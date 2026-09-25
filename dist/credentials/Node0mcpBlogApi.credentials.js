"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node0mcpBlogApi = void 0;
class Node0mcpBlogApi {
    constructor() {
        this.name = "node0mcpBlogApi";
        this.displayName = "0mcp Blog API";
        this.documentationUrl = "https://0mcp.dev";
        this.icon = {
            light: "file:../nodes/Node0mcpBlog/node0mcpBlog.svg",
            dark: "file:../nodes/Node0mcpBlog/node0mcpBlog.dark.svg"
        };
        this.properties = [
            {
                displayName: "X-API-Key",
                name: "secret",
                type: "string",
                typeOptions: {
                    password: true
                },
                default: "",
                required: true
            }
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                headers: {
                    "X-API-Key": "={{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://0mcp.dev",
                url: "/api/blogs"
            }
        };
    }
}
exports.Node0mcpBlogApi = Node0mcpBlogApi;
//# sourceMappingURL=Node0mcpBlogApi.credentials.js.map