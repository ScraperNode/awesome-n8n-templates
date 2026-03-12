# 💬 Ai customer support assistant · WhatsApp ready · works for any business

> ⚡ **80,482 views** · 💬 [Support Chatbots](../)

## Description

**AI Customer-Support Assistant that auto-maps any business site, answers WhatsApp in real time, and lets you earn or save thousands by replacing pricey SaaS chat tools.**

---

### ⚡ What the workflow does

* **Live “AI employee”** - the bot crawls pages on demand (products, policies, FAQs) so you **never** upload documents or fine-tune a model.
* **No-code setup** - Drop in API keys, paste your domain, publish the webhook—ready in \~15 min.
* **Chat memory** - each conversation turn is written to Supabase/Postgres and automatically replayed into the next prompt, letting the assistant remember context so follow-up questions feel natural and coherent even across long sessions.
* **WhatsApp ready** - Free-form replies inside the 24-hour service window, automatically switches to a template when required (recommended by Meta).

---

### 🚀 Why you’ll love it

| Benefit                   | Impact                                                                |
| ------------------------- | --------------------------------------------------------------------- |
| **Zero content training** | Point the AI Agent at any domain → go live.                            |
| **Save or earn money**    | Replace pricey SaaS chat tools *or* sell white-label bots to clients. |
| **Channel-agnostic**      | Ships with WhatsApp; swap one node for Telegram, Slack, or web chat.  |
| **Flexible voice**        | Adjust tone & language by editing one prompt line.                    |

---

### 🧰 Prerequisites (all free-tier friendly)

* OpenAI key
* Meta WhatsApp Cloud API number + permanent token (easy setup)
* Supabase (or Postgres) URL for chat memory (easy setup)

---

### 🛠 5-step setup

1. Import the template into n8n.
2. Add credentials for OpenAI, WhatsApp, and Supabase.
3. Enter your root domain in the *root\_url* variable.
4. Point Meta’s Webhook to the n8n URL.
5. Hit **Execute Trigger** and send “Hi” from WhatsApp—watch the bot answer with live data.

---

### 🔄 Easy to extend

* **Voice & language** – change wording in the System Prompt.
* **Escalation** – add an “If fallback” branch → Zendesk, email, live agents.
* **Extra channels** – duplicate the reply node for Telegram or Slack.
* **Commerce API hooks** – plug in Shopify, Woo, Stripe for order status or payments.

---

### 💡 Monetization ideas

* **Replace costly SaaS seats.** Deploy the bot on your own server and *stop paying \$300–\$500 every month* for third-party “AI support” platforms.
* **Sell it as a service.** Spin up a branded instance for local shops, clinics, or e-commerce stores and **charge each client \$300–\$500 per month**—setup time is under 15 minutes.
* Upsell premium coverage (24/7 human hand-off) once the bot handles routine questions.
* Embed product links in answers and earn affiliate or upsell revenue automatically.

---

Spin it up, connect a domain and a phone number, and you—or your customers—get enterprise-grade support without code, training, or ongoing licence fees.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, WhatsApp Trigger, Postgres Chat Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
