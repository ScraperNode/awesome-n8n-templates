# 📱 Manage LinkedIn posts and engagement with an MCP server and AI agents

> ⚡ **71 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow exposes LinkedIn posting and engagement actions as MCP tools behind a bearer-authenticated endpoint, letting an MCP-compatible AI agent create text/image/link posts and manage or interact with posts (list, fetch, edit, delete, comment, react) using the LinkedIn REST API.

## How it works
1. Receives MCP tool calls via the MCP Server Trigger webhook secured with bearer token authentication.
2. Creates a new LinkedIn post as either a text update, an image post (from incoming binary data), or an article/link share with a URL preview.
3. Retrieves LinkedIn data by fetching the connected profile, listing the 10 most recent posts by the configured author, or fetching a specific post by URN.
4. Manages published content by editing a post’s commentary text or deleting a post by its URN.
5. Engages with existing posts by adding comments, listing comments, adding a reaction, listing reactions, removing the connected account’s reaction, or deleting a specific comment by ID.

## Setup
1. Create and select a LinkedIn OAuth2 credential with permissions/products to call the LinkedIn REST APIs used for posting and reading user info.
2. Create a Bearer Auth credential for the MCP Server Trigger and use the same token in your AI client’s MCP configuration.
3. In n8n Settings → Variables, add `linkedin_person_urn` and set it to your LinkedIn person ID (you can retrieve it by calling the “Get my LinkedIn profile” tool).
4. Copy the MCP Server Trigger production webhook URL into your MCP client so it can call these tools.
5. For image posts, ensure your MCP client sends the image file as binary data and specify the correct input binary field name when calling the image-post tool.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
