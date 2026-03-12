# 🎫 Forward Zoho Mail emails to Gmail with Gemini AI analysis and Telegram digest

> ⚡ **17 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Smart email forwarder Zoho mail to Gmail with attachment, analysis by AI agent

This n8n template automatically monitors a **Zoho Mail** inbox, analyzes every incoming email with **Google Gemini AI**, then forwards it — including all attachments — to a designated recipient via **Gmail**. The admin receives an instant smart digest on **Telegram** with priority level, deadline, and required action extracted by AI.

If you manage a shared inbox and waste time triaging emails before forwarding them, *this workflow does it for you — automatically*.

## How it works

* **Zoho Mail Trigger:** Detects new incoming emails matching a configured list of sender addresses.
* **AI Analysis:** *Google Gemini* reads the email subject and summary, then classifies the email type, assigns a priority level (High / Medium / Low), extracts deadlines, key numbers, and required actions — all returned as structured JSON.
* **HTML Builder:** Assembles the forwarded email body with an **AI analysis panel** embedded at the top, shared across both sending paths.
* **Attachment handling:** If the email has attachments, the workflow fetches each file via the *Zoho Mail API*, renames binary keys to prevent collision, aggregates all files, then attaches them to the outgoing Gmail.
* **Gmail:** Forwards the formatted email — with or without attachments — to the configured recipient.
* **Telegram:** Sends the admin a structured, emoji-rich notification with all AI-extracted data, so decisions can be made without opening the email.

## How to use

1. **Connect credentials:** Link your **Zoho Mail**, **Gmail**, **Google Gemini** (`googlePalmApi`), and **Telegram Bot** credentials in n8n.
2. **Configure in one place:** Open the **Set Context** node and fill in all 6 fields — recipient email, subject prefix, Telegram chat ID, footer text, AI role description, and email category options.
3. **Set sender filter:** Edit the **Zoho Mail Trigger** node and update the `from` field with the sender addresses you want to monitor.
4. **Activate** the workflow — it runs automatically on every new matching email.

## Requirements

* **n8n Version:** Built and tested on **n8n 2.9.4+**. *(It is recommended to use the latest n8n version for best compatibility.)*
* **Zoho Mail** account with OAuth2 credentials and API access enabled.
* **Gmail** account connected via OAuth2.
* **Google Gemini** API key (via `googlePalmApi` credential).
* **Telegram Bot** token and a target chat ID.

## Customizing this workflow

* **Different inbox:** Swap the *Zoho Mail Trigger* for a **Gmail Trigger**, **IMAP**, or any other email node — the rest of the workflow remains unchanged.
* **Different AI behavior:** Change `ai_context` and `ai_type_options` in **Set Context** to adapt the AI to any domain (legal, finance, HR, support) — no prompt editing needed elsewhere.
* **Different notification channel:** Replace the *Telegram* node with **Slack**, **Discord**, or **Microsoft Teams**.
* **Persistent storage:** Add a **Google Sheets** or **Airtable** node after Telegram to log every forwarded email with its AI analysis for audit purposes.

---

## About the Author

**Created by:** Nguyễn Thiệu Toàn (Jay Nguyen)
**Email:** me@nguyenthieutoan.com
**Website:** [nguyenthieutoan.com](https://nguyenthieutoan.com)
**Company:** GenStaff ([genstaff.net](https://genstaff.net))
**Socials (Facebook / X / LinkedIn):** @nguyenthieutoan
**More templates:** [n8n.io/creators/nguyenthieutoan](https://n8n.io/creators/nguyenthieutoan)

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
