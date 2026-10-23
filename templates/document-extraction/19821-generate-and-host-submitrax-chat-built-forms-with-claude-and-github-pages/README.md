# 🔬 Generate and host SubmitRax chat-built forms with Claude and GitHub Pages

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow lets you generate SubmitRax form HTML via an Anthropic Claude agent (using the SubmitRax MCP server) and then publish the form as an HTML file to a GitHub Pages repository, returning a comment, form key, and hosted URL.

## How it works
1. Chat with an AI form builder: the n8n Chat Trigger takes a plain-language request such as "create a contact form with name, email and message". You don't need to write any HTML or code.
2. Generate the form with Claude AI and MCP: an Anthropic Claude Sonnet AI agent calls the SubmitRax MCP server to create a live form endpoint. It returns structured output with a short comment, a unique form key and ready-to-embed HTML form code.
3. Check for an existing form page: the GitHub node looks for forms/<formKey>.html in your GitHub Pages repository to decide whether to create a new page or update the existing one.
4. Publish the HTML form to GitHub Pages: the workflow commits the generated HTML file, which gives you free static site form hosting with every change versioned in Git.
5. Get the live form URL back in chat: the reply includes the agent's summary, the form key and the public GitHub Pages URL. SubmitRax, a form backend for static sites and JAMstack apps, collects every submission and can route it to email, Slack, Discord or webhooks with no backend code.

## Setup
1. Create a SubmitRax ([Here](https://submitrax.com)) API token and add it to an n8n HTTP Bearer Auth credential used by the SubmitRax MCP Tool.
2. Add an Anthropic API credential for the Claude Sonnet chat model.
3. Create a public GitHub repository with GitHub Pages enabled (deploying from the branch used by the workflow, default `main`) and ensure a `forms/` folder path is acceptable for your Pages configuration.
4. Create a GitHub Personal Access Token (or fine-grained token) with access to the target repository and connect it to the GitHub nodes.
5. Update the GitHub username and repository name in the GitHub Hosting Config step so the workflow publishes to the correct repo and builds the correct hosted URL.

## Requirements
- An n8n instance (n8n Cloud or self-hosted) with the MCP Client Tool and AI Agent nodes available
- A SubmitRax account and API token (submitrax.com) for the form backend and MCP server
- An Anthropic API key to run the Claude Sonnet AI agent
- A GitHub account with a public repository and GitHub Pages enabled for free static form hosting
- A GitHub personal access token (classic or fine-grained) with contents read/write access to that repository

## Customization
- Swap the trigger: replace the Chat Trigger with a Webhook, Slack, Telegram or Form Trigger to generate forms from any channel
- Change the AI model: use another Claude model or switch the AI Agent to OpenAI, Gemini or a local LLM
- Brand your forms: edit the agent's system prompt to enforce your CSS, fonts, colors, field rules or language for every generated HTML form
- Change the hosting path or target: adjust the forms/ folder, branch or custom domain, or send the HTML to Netlify, Vercel, Cloudflare Pages or S3 instead of GitHub Pages
- Extend the workflow: post the live form URL to Slack or email, log each form to Google Sheets or Notion, or add SubmitRax webhooks to route submissions into your CRM

## 🔗 Nodes Used

GitHub, AI Agent, Anthropic Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
