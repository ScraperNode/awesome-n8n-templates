# 📖 Build an internet search chatbot with Firecrawl API

> ⚡ **130 views** · 📖 [Internal Wiki & Knowledge Base](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Internet Search Chat with Firecrawl

### How it works
1. A user sends a query via the chat widget and the Chat Trigger captures the message.
2. The chat flow posts the query to the backend webhook (HTTP Request) which forwards it to the search service.
3. The webhook calls Firecrawl to run the web search and returns raw results.
4. A formatter converts the raw results into concise Markdown blocks and separators.
5. The chat node sends the formatted search summary back to the user.
6. Optional: an admin can manually trigger a credits check to review Firecrawl usage.

### Setup
- [ ] Add Firecrawl API credentials in n8n.
- [ ] Update the webhook URL in the "Define constants" node to your n8n instance URL.
- [ ] Configure and enable the Chat Trigger (make it public and set initial messages).
- [ ] Ensure the webhook node path matches the constant and is reachable from the chat node.
- [ ] Test the chat by sending a sample query and verify the formatted search results.
- [ ] (Optional) Run the manual "Check credits" trigger to monitor Firecrawl account usage.

## 🔗 Nodes Used

HTTP Request, Webhook, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
