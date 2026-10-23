# 🎬 Expose Google Blogger management tools to Claude via MCP server

> ⚡ **80 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow exposes Google Blogger API operations as an MCP server endpoint so an AI agent (for example, Claude) can create, update, publish, search, and delete Blogger posts, manage static pages and comments, and fetch blog metadata and pageview statistics.

## How it works
1. Receives an authenticated MCP request via a webhook secured with Bearer token authentication.
2. Uses Google Blogger API to retrieve blog metadata, list blogs, list posts, search posts, or fetch a specific post by ID or URL path.
3. Creates, updates, patches, publishes, reverts, or deletes Blogger posts based on the requested action and provided fields.
4. Lists, approves, flags as spam, or deletes comments on a specified Blogger post.
5. Lists, creates, updates, or deletes Blogger static pages (for example, About or Contact pages).
6. Returns the requested Blogger API response (such as the created/updated resource or stats payload) back to the calling AI agent.

## Setup
1. Create a Google Cloud project, enable the Blogger API v3, and add a Google OAuth2 connection with the scope https://www.googleapis.com/auth/blogger.
2. In n8n Settings → Variables, set `google_blogger_api_key` and `google_blogger_blog_id` to match your Blogger API key and target blog ID.
3. Create an HTTP Bearer Auth credential in n8n and set the token used to protect the MCP webhook endpoint.
4. Activate the workflow, copy the MCP Server Trigger production webhook URL, and configure it in your AI client (for example, Claude) with the `Authorization: Bearer <token>` header.

## 🔗 Nodes Used

MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
