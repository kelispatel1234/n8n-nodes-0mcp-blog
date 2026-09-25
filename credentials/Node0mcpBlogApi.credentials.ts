import { type IAuthenticateGeneric, type Icon, type ICredentialTestRequest, type ICredentialType, type INodeProperties } from "n8n-workflow";

// Generated with ts-morph
export class Node0mcpBlogApi implements ICredentialType {
  name = "node0mcpBlogApi";
  displayName = "0mcp Blog API";
  documentationUrl = "https://0mcp.dev";
  icon: Icon = {
        light: "file:../nodes/Node0mcpBlog/node0mcpBlog.svg",
        dark: "file:../nodes/Node0mcpBlog/node0mcpBlog.dark.svg"
    };
  properties: INodeProperties[] = [
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
  authenticate: IAuthenticateGeneric = {
        type: "generic",
        properties: {
            headers: {
                "X-API-Key": "={{$credentials.secret}}"
            }
        }
    };
  test: ICredentialTestRequest = {
        request: {
            baseURL: "https://0mcp.dev",
            url: "/api/blogs"
        }
    };
}
