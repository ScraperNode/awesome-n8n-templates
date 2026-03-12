# 🔬 Export Glasp highlights to Notion, Slack, Google Sheets, or webhooks

> ⚡ **17 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How it works

- Runs on a schedule (default: every 6 hours) and fetches new Glasp highlights via the Glasp API
- Filters out already-exported documents to avoid duplicates
- Formats highlights as plain text and Markdown
- Sends them to any destination you connect (Notion, Slack, Google Sheets, Webhook, etc.)

## Set up steps

Takes about 5 minutes:

1. Get your Glasp access token at https://glasp.co/settings/access_token
2. Open the "Glasp API" node and create a Bearer Auth credential with your token
3. Connect your destination node after "Filter & Format" (e.g., Notion, Slack, Google Sheets)
4. Click Publish -- the workflow runs automatically

## Nodes used

- **Schedule Trigger** -- runs the workflow on a timer
- **Prepare Parameters** (Code) -- calculates the time range and manages deduplication tracking
- **Glasp API** (HTTP Request) -- fetches highlights with Bearer Auth and pagination
- **Filter & Format** (Code) -- outputs title, url, highlightsText, highlightsMarkdown, tags, and more

## Output fields

Each item includes: title, url, glasp_url, domain, category, tags, author, highlightCount, highlightsText, highlightsMarkdown, highlights[], createdAt, updatedAt

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
