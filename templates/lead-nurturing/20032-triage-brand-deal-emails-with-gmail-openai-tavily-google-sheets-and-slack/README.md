# 💬 Triage brand deal emails with Gmail, OpenAI, Tavily, Google Sheets and Slack

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow monitors unread Gmail inbox emails, uses OpenAI to identify brand deal opportunities, researches the brand via Tavily, calculates a suggested rate, and creates a Gmail draft reply while logging the deal to Google Sheets and sending a Slack notification.

## How it works
1. Polls Gmail every 5 minutes for unread emails in the Inbox.
2. Uses OpenAI to classify whether each email is a sponsorship opportunity and extract key terms like deliverables, offer amount, usage rights, exclusivity, deadline, and scam signals.
3. Skips non-deal emails or low-confidence classifications, and adds a dedicated Gmail label to emails identified as brand deals.
4. Searches Tavily for the brand’s funding/background and prior creator campaigns, then uses OpenAI to compile a concise brand profile and legitimacy assessment from the research.
5. Calculates suggested pricing, counter-offer amounts, and a negotiation strategy based on your audience metrics, deliverables, and requested terms (usage rights, exclusivity, and timeline).
6. Uses OpenAI to draft a reply email (or a verification request for suspicious deals) and saves it as a Gmail draft in the original thread.
7. Appends a detailed deal log row to Google Sheets and posts a summary with a Gmail thread link to a Slack channel.

## Setup
1. Connect Gmail OAuth2 credentials and create/select a Gmail label ID for the workflow to apply to brand-deal emails.
2. Add an OpenAI API credential for the classification, brand profiling, and reply-drafting steps.
3. Create a Tavily API key and configure it as an HTTP Header Auth credential (Authorization: Bearer <key>) for the two research requests.
4. Connect Google Sheets OAuth2 credentials and replace the spreadsheet ID and target sheet/tab so the workflow can append deal log rows.
5. Connect Slack OAuth2 credentials and set the target channel (or remove the Slack step if you don’t want notifications).
6. Update the creator stats, CPM, minimum rate, currency, and media kit URL in the creator rate configuration values to match your own.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
