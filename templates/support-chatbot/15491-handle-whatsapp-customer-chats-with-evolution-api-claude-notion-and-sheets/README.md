# 💬 Handle WhatsApp customer chats with Evolution API, Claude, Notion, and Sheets

> ⚡ **774 views** · 💬 [Support Chatbots](../)

## Description

# WhatsApp AI Chatbot with Evolution API + Notion CRM

## What this template does

This workflow turns your WhatsApp Business number into a 24/7 AI-powered customer assistant — without any third-party chatbot platform. It receives incoming WhatsApp messages via Evolution API, understands the customer's intent, generates a conversational response using Claude AI, and sends it back — all within seconds.

When the conversation requires human attention, the bot alerts you on Telegram and automatically pauses itself for that contact in your Notion CRM so you can take over seamlessly.

**This is a production-ready workflow** built to handle real inbound traffic. It has been tested with cold outreach leads, inbound inquiries, and voice messages.

---

## Key features

**Multi-modal input**
Handles both text messages and voice notes. Voice messages are transcribed via OpenAI Whisper before being processed by the AI.

**Smart auto-reply filter**
A Sentiment Analysis node detects automatic replies (out-of-office bots, delivery confirmations) and silently discards them before the AI agent triggers — preventing the bot from responding to other bots.

**Notion CRM integration**
Every incoming message is matched against your Notion database by phone number. Known leads get their status updated. New contacts are created automatically. The bot also checks a `WA ChatBot Status` field (Active/Paused) before responding — so you can pause the bot per contact directly from Notion.

**Outreach-aware responses**
If you use WhatsApp for cold outreach (paired with an outreach workflow), this bot reads the lead's `personalization_note` and `pain_point` from Notion and uses them to personalize replies. The AI knows who contacted whom first and adjusts its tone accordingly.

**Human-in-the-loop escalation**
When the AI detects buying intent, frustration, or a request it cannot handle, it:
1. Sends a full-context alert to your Telegram
2. Sets `WA ChatBot Status = Paused` in Notion for that lead
3. Stops auto-replying until you manually re-activate it

**Dynamic knowledge base (Google Sheets)**
Business info, products/services, and FAQs live in a Google Sheet with 3 tabs. Update your sheet — the bot adapts instantly. No redeployment needed.

**Format Cleaner**
AI responses are automatically stripped of markdown before sending (WhatsApp renders `**bold**` as literal asterisks — this node fixes that).

**Conversation memory**
Uses n8n's buffer window memory with phone number as session key. Remembers the last 10 message exchanges per contact.

---

## How it works

```
WhatsApp Message
      ↓
Evolution API Webhook
      ↓
Detect Message Type (normalize payload)
      ↓
Skip Event? (groups, fromMe, empty text) → skip silently
      ↓
Is Voice? → Prepare Audio → Transcribe (Whisper)
      ↓
Sentiment Analysis → Automatic Reply? → skip silently
      ↓
Check Leads (Notion DB lookup by phone)
      ↓
Normalize & Match → is_known_lead, bot_status, outreach context
      ↓
Bot Status = Paused? → skip silently
      ↓
Information Extractor (intent, reply_sentiment, urgency, needs_human)
      ↓
Read Business Info + Products + FAQs (Google Sheets)
      ↓
Build Context (combines KB + lead context)
      ↓
Wait 10s (avoids responding before user finishes typing)
      ↓
Generate Response (Claude Haiku, conversation memory)
      ↓
Format Cleaner (strip markdown)
      ↓
Send WhatsApp Reply (Evolution API)
      ↓
Format for Log → Log Conversation (Google Sheets)
      ↓
Alert Owner? → IF needs_human:
   → Telegram alert
   → Pause ChatBot (Notion update: WA ChatBot Status = Paused)
      ↓
Phone Match (known lead?)
   → Update Lead Status (Last Contact + WA Status)
   → Create New Lead (if new contact)
      ↓
Respond 200 OK
```

---

## What you need

### Infrastructure
- **Evolution API** (self-hosted or cloud) — WhatsApp messaging layer
- **n8n** (self-hosted or cloud) — this workflow runs here

### Credentials (configure in n8n)
| Credential | Used for |
|---|---|
| Anthropic API | Information Extractor + Response Generation (Claude Haiku) |
| OpenAI API | Voice transcription (Whisper) — optional if no audio support needed |
| Google Sheets OAuth2 | Knowledge base reads + conversation log |
| Notion API | Lead lookup, BotStatus check, lead update/create |
| Telegram Bot | Human-in-the-loop alerts |

### Google Sheets — 4 tabs required
Copy the template sheet and fill in your data:
[Get your FREE Sheets Template](https://docs.google.com/spreadsheets/d/1O1hSVLTL-yfugolm_y22-67lV0i59R0sRM0UPPq2Dlk/edit?usp=sharing)

**Business_Info** (columns: `business_info`, `value`)
Rows: business_name, business_description, website, email, hours, coverage_area, booking_url, response_tone

**Products** (columns: `product_id`, `name`, `description`, `category`, `available`, `highlight`)

**FAQs** (columns: `question`, `answer`, `category`)

**Conversation_Log** (columns: `timestamp`, `channel`, `user_id`, `username`, `user_name`, `message_type`, `message`, `response`, `intent`, `needs_human`)

### Notion Database — required fields
| Field | Type |
|---|---|
| Name (title) | Title |
| Phone | Phone number |
| Status | Status |
| WA ChatBot Status | Select (options: Active, Paused) |
| WA Status | Select (options: Positive Reply, Negative Reply, Neutral Reply) |
| Lead Source | Select |
| Last Contact | Date |
| Personalization Note | Rich text |
| Pain Point | Rich text |

&gt; 💡 A ready-to-use Notion CRM template pre-configured for this workflow is available separately.

---

## Setup steps

1. **Import this workflow** into your n8n instance
2. **Configure credentials** for all 5 services listed above
3. **Create your Google Sheet** with the 4 required tabs and fill in your business data
4. **Set up your Notion database** with the required fields (or purchase the pre-built Notion template [Get Notion Template ](https://cifral.gumroad.com/l/notion-crm-template))
5. **Update the Evolution API URL** in the Send WhatsApp Reply node: `https://YOUR-EVOLUTION-DOMAIN/message/sendText/YOUR-INSTANCE-NAME`
6. **Add your Evolution API key** to the Send WhatsApp Reply node header
7. **Configure your Telegram Chat ID** in the Alert Owner node (send a message to @userinfobot to get your ID)
8. **Register the webhook** in Evolution Manager: URL = `https://YOUR-N8N-URL/webhook/evo-inbound`, events: MESSAGES_UPSERT + CONNECTION_UPDATE, Base64: ON, webhookByEvents: OFF
9. **Activate the workflow**
10. **Test** by sending a WhatsApp message to your number

---

## Customizing the AI

The system prompt in the **Generate Response** node is where you define your bot's personality and conversation rules. It already includes:
- Role and business context (pulled dynamically from your Sheets)
- Formatting rules (no markdown, WhatsApp-friendly style)
- One-idea-per-message conversation discipline
- Outreach context awareness
- Pricing and booking redirect logic
- Negative sentiment handling (polite close, no insistence)
- Handoff escalation triggers

Edit it to match your industry, tone, and specific business logic.

---

## Compatible with outreach workflows

This chatbot is designed to work as the **inbound layer** of a complete WhatsApp automation stack:
- **Outreach Workflow** — sends cold outreach messages and writes lead data to Notion
- **Follow-up Workflow** — sends follow-up sequences to non-responders
- **This Chatbot** — handles inbound replies intelligently using the outreach context from Notion

When all three are connected, your entire WhatsApp funnel runs on autopilot.

---

## Notes

- The `Check Leads` node fetches all leads with a phone number from Notion and matches in JavaScript. This works well for databases up to ~1,000 leads. For larger CRMs, consider filtering by phone number directly in the Notion query.
- Voice message transcription requires OpenAI Whisper. If you don't need audio support, you can disable the `Is Voice?` branch entirely.
- The 10-second Wait node before response generation reduces the chance of sending a reply while the user is still typing. Adjust or remove it based on your needs.

---

## About the creator

Mark Cifral — System Sales Engineer turned automation founder. I build production-grade n8n workflows for B2B lead enrichment, WhatsApp AI agents, and proposal automation. Founder @ Cifral Solutions (cifral.io).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Notion, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
