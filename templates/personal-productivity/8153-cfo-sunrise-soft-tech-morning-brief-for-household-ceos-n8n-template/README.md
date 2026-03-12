# ⚡ 🌸 CFO sunrise — Soft-Tech morning brief for household CEOs (n8n template)

> ⚡ **72 views** · ⚡ [Personal Productivity](../)

## Description

🌸 **Overview**

**Serene CFO Sunrise** is a gentle morning brief for Household CEOs — founders who run a business and a home. At **8:00 AM local time**, it gathers bank balances, last-24h shop orders, open/overdue invoices, and today’s calendar, then sends one elegant email (optional Telegram). Calm and family-hour friendly.

✨ **Perfect For**
Real estate pros, insurance & tax advisors, Shopify/Etsy owners, and homemaker-entrepreneurs who prefer graceful soft tech over dashboards and data chaos.

🧠 **What It Does**

Pulls bank balances (Mercury/Relay/Plaid via HTTP)

Summarizes Shopify orders (last 24h)

Lists Stripe invoices (open/overdue)

Reads Google Calendar (today)

(Optional) Uses OpenAI to draft “Top 3 Priorities”

Sends a soft-styled morning email (+ optional Telegram)

🔐 **Requirements**

Bank API via HTTP (Mercury/Relay/Plaid)

Shopify Admin API

Stripe API

Google Calendar (OAuth2)

SMTP or Gmail

(Optional) Telegram Bot, OpenAI API

🧩 Placeholders to Update

YOUR_BANK_API_TOKEN

YOUR_SHOP (yourshop.myshopify.com)

YOUR_SHOPIFY_TOKEN

YOUR_STRIPE_SECRET

YOUR_FROM_EMAIL, YOUR_TO_EMAIL

YOUR_TELEGRAM_CHAT_ID (optional)

🛠️**Setup (5–10 min)**

Add credentials (HTTP Header Auth for Stripe/Shopify/Bank, Google Calendar OAuth2, SMTP/Gmail, optional Telegram, optional OpenAI).

Replace placeholders listed above.

Set the Cron to your preferred hour (default 08:00, local timezone).

Run once manually to confirm each section, then enable.

🔄 **Flow (Node Map)**

Cron (08:00) → Time Window →
HTTP (Bank) + HTTP (Shopify) + HTTP (Stripe) + Google Calendar →
Assemble Snapshot → (Optional) OpenAI “Top 3” → Build Message (soft HTML + text) →
Email Send (+ optional Telegram)

🧪 **Testing Tips**

Temporarily set Cron to Every Minute.

Use Stripe test mode keys.

In Shopify, set created_at_min to a recent ISO time to force sample orders.

Add a dummy event to Google Calendar for today.

Check “Assemble Snapshot” output for metrics before sending.

🎨 **Brand & Tone**

This template includes a Brand Settings block (brandName, signature, accentEmoji) so your brief feels on-voice without edits to the logic.

✅ **Template Notes**

Use Sticky Notes for setup/testing (included).

No hardcoded API keys — store in credentials.

Keep Markdown headings (##) in this description.

Original use case; practical, production-ready.

🧯**Failure Handling**

Each data source is optional — if one API fails, the brief still sends the remaining sections so your morning stays calm.

## 🔗 Nodes Used

Cron, Send Email, Function, HTTP Request, Telegram, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
