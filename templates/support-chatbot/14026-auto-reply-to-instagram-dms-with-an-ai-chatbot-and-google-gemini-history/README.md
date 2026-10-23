# 💬 Auto-reply to Instagram DMs with an AI chatbot and Google Gemini history

> ⚡ **2,995 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# **Auto-reply Instagram DM** with AI Chatbot, Conversation History using **Google Gemini** and n8n Data Table

This workflow turns your **Instagram Business or Creator account** into an AI-powered customer support chatbot using **Google Gemini** and **n8n Data Table** for persistent conversation history. Every incoming Direct Message is automatically received, processed, and replied to — with long AI responses intelligently split and delivered in sequence.

If you need to automate Instagram DM responses without managing complex infrastructure, *this workflow is the right starting point.*

## How it works

* **Instagram Webhook receives the DM:** Meta sends the event to n8n. The workflow automatically handles both webhook verification and incoming message events. Text-only messages are filtered; bot reply-backs from the page itself are blocked.
* **Set Context extracts all runtime config:** The sender ID, page ID, access token, and raw message text are extracted from a single node — no hardcoded values elsewhere.
* **Message is stored and history is loaded:** The new message is saved to the **n8n Data Table** as unprocessed. All pending rows for the user are merged into one prompt (basic batching). The last 15 processed rows are loaded and formatted into session history blocks for context.
* **Gemini AI Agent generates the reply:** The merged prompt and full conversation history are passed to **Google Gemini**. The AI responds in context, following the persona and instructions defined in the system prompt.
* **Reply is formatted and delivered:** The response is normalized (markdown stripped, unsupported syntax removed) and split into chunks of up to 2000 characters. Each chunk is sent sequentially via the **Instagram Graph API** with a 1-second delay between messages.
* **Data Table is updated and cleaned:** All pending rows are marked as processed. The AI reply is saved as the page response. Old rows beyond the 15-message window are automatically deleted to keep the table lean.

## How to use

1. **Create a Meta App** and add the **Instagram** product.
2. Go to Instagram &gt; **API Setup with credentials** → log in to your IG Business/Creator account → copy the **long-lived Access Token** → paste it into the **Set Context** node (`ig_access_token` field).
3. **Activate the workflow in production mode first**, then go to Meta App &gt; Instagram &gt; **Webhooks**: paste the n8n production webhook URL + a Verify Token → click Verify.
4. Connect **Google Gemini** (`googlePalmApi`) credential in the **AI Agent** and **LLM** nodes.
5. Create the **n8n Data Table** 
6. **Edit the system prompt** inside `Process Merged Message` to set your AI persona, brand tone, and knowledge base.
7. Activate and start receiving automated replies on Instagram DM.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(It is highly recommended to update to the latest n8n version to avoid compatibility issues.)*
* **Instagram Business or Creator account** connected to a Meta App with Messaging permissions.
* **Google Gemini** API key (`googlePalmApi` credential).
* **n8n Data Table** named `insert_message` with the column schema described above.
* A publicly accessible n8n instance (self-hosted or cloud) for Meta to reach the webhook.

## Customizing this workflow

* **Change the AI persona:** Edit only the system prompt inside `Process Merged Message` — no other node needs changing.
* **Switch the AI model:** Swap the `Google Gemini Chat Model` sub-node for any other supported LLM (OpenAI, Anthropic, etc.).
* **Add smart message batching:** Integrate **[Smart message batching workflow](https://n8n.io/workflows/9192)** to wait for the user to finish typing before responding — prevents duplicate or out-of-order replies.
* **Add human takeover:** Integrate **[Smart human takeover workflow](https://n8n.io/workflows/11920)** to automatically pause the bot when an admin replies manually, then resume when done.
* **Use on Facebook Messenger too:** The Smart Batching and Human Takeover workflows above are 100% compatible with both Facebook and Instagram — built to be cross-platform from the ground up.

---

## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)
**Email:** me@nguyenthieutoan.com
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)
**Company:** GenStaff ([genstaff.net](https://genstaff.net))
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
