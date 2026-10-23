# 📊 Monitor web pages for relevant listings with Claude Haiku and Gmail

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow manually fetches a webpage, uses Anthropic Claude to extract listing-style items from the raw HTML and score them against your criteria, then emails an HTML summary of high-scoring matches via Gmail.

## How it works
1. Starts when you run the workflow manually.
2. Requests the target webpage over HTTP and retrieves the HTML content.
3. Sends the cleaned page HTML to the Anthropic Messages API (Claude) to extract a JSON list of items (title, description, link, date).
4. Sends each extracted item to Anthropic Claude to score how well it matches your relevance criteria and generate a short justification.
5. Keeps only items with a score of 7 or higher.
6. Builds an HTML summary of the approved items and sends it via Gmail if at least one match is found.

## Setup
1. Create an Anthropic API key and configure it as an HTTP Header Auth credential for the two Anthropic HTTP requests (including the required `anthropic-version` header).
2. Update the monitored webpage URL in the initial HTTP request node.
3. Edit the extraction criteria and scoring criteria text in the two code steps to match what you want to find.
4. Connect your Gmail account credentials and set the recipient email address used to send the results.

## Requirements
- An n8n instance (self-hosted or n8n Cloud)
- An Anthropic API key
- A Gmail account connected to n8n (or swap for any other email node)

## Customization
- Adjust MAX_CHARS in the extraction code step (default 100,000) if your page has heavy filter/navigation menus burying the real content.
- Change the score cutoff (currently 7) in the Filter node for stricter or looser matching.

## Additional info
Looking for the fully automated version? A paid version adds a daily schedule, duplicate detection (never get alerted on the same item twice), and a simple no-code config screen: https://wlti.gumroad.com/l/ai-site-monitor

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
