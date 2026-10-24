# 🎯 Classify cold email replies and notify via Telegram with OpenAI and Instantly

> ⚡ **52 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Classify Cold Email Replies and Notify via Telegram with OpenAI and Instantly

Automatically classifies incoming cold email replies as HOT, WARM, or COLD using AI and sends priority Telegram notifications with auto-acknowledgment for fast response times.

**Who is this for?**
Outbound sales teams using Instantly for cold email who want instant lead classification and speed-to-lead automation.

**What problem does this solve?**
Manually checking inboxes for replies is slow. Hot leads go cold while you sleep. This workflow classifies replies in seconds, notifies you on Telegram, and auto-acknowledges warm/hot leads so they know you're responsive.

**How it works:**
1. **Instantly Reply Webhook** - receives reply event from Instantly
2. **Respond 200 OK** - acknowledges webhook immediately
3. **Validate Payload** - checks required fields (email, reply body)
4. **Extract Lead Fields** - normalizes lead data (email, name, subject, campaign)
5. **Classify Reply - OpenAI** - GPT-4o-mini classifies as HOT/WARM/COLD with reasoning
6. **Parse Classification** - extracts classification + carries forward lead data
7. **Is HOT? / Is WARM?** - routes to the right notification branch
8. **Telegram - HOT/WARM/COLD Lead** - sends priority-formatted notification
9. **Auto-Ack HOT/WARM Gmail** - instantly sends acknowledgment email to engaged leads
10. **Log Reply to Sheet** - logs everything for tracking

**Setup:**
1. Add credentials: OpenAI, Gmail, Telegram Bot, Header Auth
2. Replace YOUR_TELEGRAM_CHAT_ID with your chat ID (message @userinfobot)
3. Create a Google Sheet with columns: timestamp, lead_email, lead_name, classification, campaign, subject, reply_snippet, reasoning, auto_ack_sent, manual_reply_sent, manual_reply_at
4. Replace YOUR_GOOGLE_SHEET_ID with your sheet ID
5. Configure Instantly webhook: Settings &gt; Integrations &gt; Webhooks &gt; reply_received event &gt; paste your n8n webhook URL

**Customization:**
- Edit the OpenAI system prompt to adjust classification criteria
- Modify auto-ack email copy in the Gmail nodes
- Adjust Telegram message formatting per branch

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, Gmail, Stop and Error, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
