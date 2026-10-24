# 💬 Answer visitor questions and grow the FAQ with OpenAI, Google Sheets and Gmail

> ⚡ **4 views** · 💬 [Support Chatbots](../)

## Description

## FAQ chatbot that grows its own answers — with owner approval

**Who it's for:** site owners and support leads who want a public chat that answers from a known FAQ, never hallucinates, and gets smarter every week.

## How it works
1. Visitors chat via the hosted webchat (Chat Trigger). The bot loads the `FAQ` sheet from Google Sheets and OpenAI answers only from it.
2. Every turn is routed three ways: answered (reply sent), unanswered (logged to the `Unanswered` tab and the owner notified by Gmail), or lead (visitor left an email — captured in `Leads` and the owner notified). Repeats never duplicate rows.
3. Every Monday a second lane clusters the unanswered log, ranks gaps by frequency, has OpenAI draft candidate FAQ entries, emails the owner a digest, and appends proposals to `FAQ-Pending`.
4. The owner copies approved rows into `FAQ` — the bot only learns what a human signs off.

## Setup
1. Click **Test workflow** — the demo lane runs six visitor turns (answerable, unanswered, lead, empty, repeat, bad AI answer) through every route with zero credentials.
2. Attach credentials: Google Sheets, Gmail, OpenAI.
3. Press play on the **SETUP** node (Lane D) — it creates the spreadsheet with all four tabs, headers and example rows, then prints the `spreadsheet_id`.
4. Open the **Workflow Config** node and paste the id plus your `owner_email`. Then delete the setup lane, activate the workflow and embed the Chat Trigger's public URL in your site.

Note: the Google Sheets and Gmail nodes are enabled — once credentials are attached they write real rows and send real emails.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
