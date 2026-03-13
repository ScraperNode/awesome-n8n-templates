# 📋 Build your own GitHub MCP server

> ⚡ **3,925 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### This n8n demonstrates how to build your own Github MCP server to personalise it to your organisation's repositories, issues and pull requests.

This n8n implementation, though not as fully featured as the official MCP server offered by Github, allows you to control precisely what access and/or functionality is granted to users which can make MCP use simpler and in some cases, more secure. The use-case in this template is to simply view and comment on issues within a specific repository but can be extended to meet the needs of your team.

This MCP example is based off an official MCP reference implementation which can be found here [https://github.com/modelcontextprotocol/servers/tree/main/src/github](https://github.com/modelcontextprotocol/servers/tree/main/src/github)

### How it works
* A MCP server trigger is used and connected to 3 custom workflow tools. We're using custom workflow tools as there is quite a few nodes required for each task.
* Behind these tools are regular Github nodes although preconfigured with credentials and targeted repository.
* The "Get Issue Comments" and "Create Issue Comment" tools depend on obtaining an Issue Number first. The agent should call the "Get Latest Issues" tool for this.

### How to use
* This Github MCP server allows any compatible MCP client to view and comment on Github Issues. You will need to have a Github account and repository access available before you can use this server.
* Connect your MCP client by following the n8n guidelines here - https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger/#integrating-with-claude-desktop
* Try the following queries in your MCP client:
  * "Can you get me the latest issues about MCP?"
  * "What is the current progress on Issue 12345?"
  * "Please can you add a comment to Issue 12345 that they should try installing the latest version and see if that works?"

### Requirements
* Github for account and repository access. The repository need not be your own but you'll still need to ensure you have the correct permissions.
* MCP Client or Agent for usage such as Claude Desktop - https://claude.ai/download

### Customising this workflow
* Extend this template to interactive with pull requests or workflows within your own company's Github repositories. Alternatively,  pull in metrics and generate reports for programme managers.
* Remember to set the MCP server to require credentials before going to production and sharing this MCP server with others!

## 🔗 Nodes Used

GitHub, HTTP Request, Execute Workflow Trigger, Call n8n Workflow Tool, MCP Server Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
