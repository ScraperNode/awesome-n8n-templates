# 📱 Grow Reddit karma with DeepSeek, Google Sheets, Multilogin and Browser MCP

> ⚡ **148 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How it works

- **Run workflow on schedule** fires on a set interval to pull Reddit accounts from a Google Sheets spreadsheet (filtered to exclude shadowbanned accounts)
- **Smart action calculator** randomly selects 3–8 accounts and decides whether each should **post** or **comment**, respecting cooldown timers (1–3hr gap for posts, 30–120min gap for comments) and only operating during active hours (midnight–noon)
- **IP validation loop** routes each account through a proxy, verifies the IP against the account's creation IP using httpbin, and skips if there's a match (to avoid fingerprint overlap)
- **Multilogin browser profile launch** opens an anti-detect browser session per account via the Multilogin API, then connects to the browser's DevTools WebSocket
- **AI Agent (DeepSeek + Browser MCP)** autonomously navigates Reddit, reads subreddit rules, scans recent posts, and either creates a new text post or writes a context-aware comment — all with human-like scroll behavior and natural language
- **Post-action processing** parses the AI's output to extract karma stats, permalinks, and success/failure status, then updates the Google Sheet with timestamps, karma totals, and links
- **Profile cleanup** closes the Multilogin browser profile after each account finishes, then loops to the next account

## Setup steps

- **~20 minutes** to configure all credentials and services
- Connect your **Google Sheets** service account and point it to your Reddit accounts spreadsheet (columns: `multilogin_profile_id`, `proxy_provider`, `shadowban?`, `account_id`, `account_password`, `creation_ip`, `karma`, `posts_made_today`, `comments_made_today`, `time_of_post`, `time_of_comment`, `last_allocated_ip`, `posts_links`, `comments_links`, `row_number`)
- Set up your **Multilogin** API bearer token credential and update the folder ID in the "Open Multilogin Profile" node URL
- Add your **DeepSeek API** credential for both AI Agent model nodes
- Install the **Browser MCP** community node (`n8n-nodes-browser-mcp`) and ensure the MCP server is running at the configured `baseUrl`
- Update the **proxy URL** in the "Get Proxy Exit IP" HTTP Request node with your actual proxy credentials
- Adjust the **Run workflow on schedule** interval to your desired frequency
- Review the sticky notes inside the workflow for detailed logic explanations

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, AI Agent, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
