# 🔬 Summarize daily Gmail emails with Gemini and send to Slack, WhatsApp and Docs

> ⚡ **271 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# AI Daily Email Summary - Auto-Delivered to Slack, WhatsApp & Docs (Gmail + Gemini)

## Summary
Stop starting your day by drowning in unread emails. This workflow runs every morning and turns your Gmail inbox into a clean, prioritized briefing — automatically organized into what needs your attention, what meetings are coming up, and what you can read later. The summary lands wherever you already live: Google Docs, Gmail, Slack, or WhatsApp.

Powered by Google Gemini 2.5 Flash, with a built-in privacy layer that scrubs passwords, OTPs, and API keys before they ever leave your n8n instance.

## Key features
* **Prioritized daily briefing:** Gemini reads your last 24 hours of email and groups it into Action Required, Meetings & Events, and Important Updates — so you know exactly where to focus.
* **Deliver anywhere:** Route your summary to Google Docs (as a daily log), Gmail (as a formatted report), Slack (as a DM), or WhatsApp — toggle each channel on or off from a single config node.
* **Safe to use with AI:** A regex-based privacy layer scrubs sensitive patterns (OTPs, passwords, API keys, card numbers) inside n8n before anything reaches the AI model.
* **Zero wasted API calls:** If your inbox is empty, the workflow skips the AI step entirely and sends a clean "no emails" status instead.
* **Built-in error alerts:** If any step fails — expired credentials, API error — you get a diagnostic email automatically so nothing breaks silently.

## How it works
1. **Trigger:** Runs on a daily schedule (fully configurable).
2. **Fetch & clean:** Pulls primary emails from the last 24 hours and scrubs sensitive patterns before processing.
3. **Summarize:** Gemini 2.5 Flash generates a formatted text summary, categorized by priority.
4. **Deliver:** Your summary is routed to whichever channels you've toggled on in the config node.
5. **Monitor:** A global error handler catches failures and emails you a crash report.

## Nodes used
* Gmail (Fetch, Send, Error Alert)
* Google Gemini (LangChain Native Node)
* Slack (Post Alert)
* WhatsApp Business Cloud API
* Google Docs (Create & Append)
* Schedule Trigger
* Error Trigger
* Code (PII Scrubbing & Formatting)

## Setup instructions
1. **Credentials:** Connect Gmail, Google Docs, Slack, WhatsApp, and your Google Gemini API key. *(Note: You only need one Gmail OAuth2 credential. n8n will use this single connection for both fetching your inbox and sending the final summary email).*
2. **Config node & Fallback:** Open **⚙️ Set Configuration** and fill in your target email, Slack user ID, and WhatsApp number. *(Optional: Open the "Gmail: Send Error Alert" node at the bottom and replace `PASTE_FALLBACK_EMAIL_HERE` with a backup admin email, ensuring you get crash reports even if the config node fails).*
3. **Toggle channels:** Set each `receiveOverviewIn...` field to `true` for the platforms you want to activate.
4. **Test:** Click **Test Workflow** — a sample email with a dummy password is pinned to the trigger so you can see the PII scrubber and summary in action immediately.
5. **Activate:** Switch the workflow to Active and your first briefing runs on schedule.

## Requirements
* n8n version 1.0+
* Google Gemini API key
  &gt; **Note on Model Selection:** This template uses `gemini-2.5-flash`, which is currently in preview. If it is unavailable in your region or you encounter rate limits, simply open the **Generate AI Summary** node and switch the model to `gemini-1.5-flash`.
* API scopes: Gmail (readonly, send), Google Docs (write), Slack (chat:write), WhatsApp Business

## Customization ideas
* **Change email scope:** Edit the labels in the Gmail fetch node to include Promotions, Updates, or a specific sender.
* **Filter by project:** Enable `filterBySubject` or `filterBySender` in the config node to build a summary focused on one client or topic.
* **Adjust the tone:** Edit the prompt in the Build LLM Prompt node to make summaries more detailed, more concise, or in a different language.
* **Change the schedule:** Update the Schedule Trigger to run twice a day, weekly, or on any cadence you need.

## Use cases
* Start every morning with a 60-second read of everything that matters in your inbox.
* Keep a searchable daily email log in Google Docs without lifting a finger.
* Stay on top of client communications even when you're away from your inbox.
* Safely use AI for email management without exposing passwords or OTPs to external model providers.

## 🔗 Nodes Used

Slack, Gmail, Google Docs, WhatsApp Business Cloud, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
