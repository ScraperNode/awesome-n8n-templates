# 🔬 Guard freelance project scope with Gmail, OpenAI, Google Sheets, and Telegram

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Freelancers, consultants, and small agencies who lose unbilled hours every month to "one small extra" client requests. If you have ever said yes to work outside the agreement just to avoid an awkward conversation, this workflow is your backstop.

## How it works
1. Every new client email triggers an AI contracts analyst.
2. It reads the request against the scope of work you pasted into the Configuration node.
3. It classifies the request as in_scope, out_of_scope, or ambiguous, quoting the exact scope clause, estimating extra hours, and computing the cost at your hourly rate.
4. Out-of-scope requests get a warm-but-firm change-order draft emailed to YOU for review, never to the client directly.
5. Ambiguous requests ping you on Telegram with the AI reasoning.
6. In-scope requests are simply logged.
7. Every decision lands in a Google Sheets ledger, so you always know how much unbilled work you quoted, waived, or are still owed.

## Setup
1. Paste your scope of work (or scope bullets) into the Workflow Configuration node.
2. Set the Gmail trigger filter to your client, e.g. from:client@company.com.
3. Fill in your hourly rate, currency, freelancer email, Telegram chat ID, and Google Sheet ID in the Configuration node.
4. Connect your Gmail, OpenAI, Google Sheets, and Telegram credentials and activate.

## Requirements
- An OpenAI API key, a Gmail account, a blank Google Sheet, and Telegram (for ambiguous-case alerts). Works on n8n Cloud and self-hosted.

## Customization
- Point the trigger at a shared inbox, route drafts to a Slack channel instead of email, add a second AI pass that negotiates the change order over WhatsApp, or swap Google Sheets for Airtable or Notion as the ledger.

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
