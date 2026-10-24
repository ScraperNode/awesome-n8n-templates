# 🧾 Classify invoice reminder replies with Claude Haiku, Gmail and Google Sheets

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors Gmail for replies to invoice reminders, uses Claude Haiku to classify each reply, logs the result to Google Sheets, and applies a matching Gmail label so you can quickly triage each one as payment made, promise to pay, dispute, question, unrelated, or needs review.

## How it works
1. Watch for invoice replies picks up new replies (default search: "invoice" in the subject, not sent by you).
2. Clean reply strips quoted history and signatures.
3. An AI model sorts the reply into Payment made, Promise to pay, Dispute, Question, Unrelated or Needs review, with any promised payment date (one week ahead if the customer gives none) and a one-line reason.
4. Each reply is logged to Google Sheets, including a direct link back to the Gmail thread, and labelled in Gmail. Needs review is for replies a person should read: vague, mixed or sarcastic ones, or if the model fails (the error is logged).

## Setup
1. Credentials: connect Gmail, Google Sheets and your AI model (the Claude Haiku 5.5 node).
2. Gmail labels: create six labels in Gmail: Payment made, Promise to pay, Dispute, Question, Unrelated and Needs review. Open each Label node and pick the label with the same name.
3. Sheet: paste a blank Google Sheet's URL, copied from the address bar, into Your settings. The header row is written on the first run.
4. Update the Gmail search query to match how your invoice reminders are titled and filtered (for example, by subject keywords or sender).

## Requirements
- Gmail and Google Sheets connected via Google OAuth (self-hosted n8n needs a Google Cloud app: https://docs.n8n.io/integrations/builtin/credentials/google/)
- An API key for Claude or another chat model

## Customization
- Another model: swap the Claude Haiku 5.5 node for any chat model node (OpenAI, Gemini, Mistral, Ollama).
- Other classes: edit Classify reply, Reply class format and Route by class, then add a matching label.

## Additional info
The workflow never sends email, so a tricky reply can at worst get a wrong label. It doesn't check your invoices either: Payment made means the customer says they paid.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
