# 🔬 Generate service quotes with GPT-4.1-mini, Telegram approval and Gmail

> ⚡ **95 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who's it for

Service businesses such as trade contractors (roofers, plumbers, electricians, cleaners, facility management) who want to send out customer quotes automatically as PDFs — either triggered by a **Tally form** embedded on their website or by a **Voice AI agent** webhook request. The business owner wants to delegate the operational work without giving up control, so every quote passes through an **approval instance via Telegram** before reaching the customer.

## How it works

1. **Intake**: A Tally form submission triggers the workflow. A parallel Webhook path catches direct API submissions (e.g., from a Voice AI agent) and routes them through a validity check.
2. **Normalization**: An Edit Fields node maps the raw payload into a clean, consistent schema.
3. **AI classification**: GPT analyzes the request and assigns one of six categories (single-family quote, multi-family quote, management matter, emergency, on-site appointment, special request).
4. **Routing**: A Switch node dispatches the request to the matching branch.
5. **Approval-gated quoting** (for quote-requiring requests): PDFMonkey generates a draft PDF, a Telegram `sendAndWait` approval request is sent to the business owner, and depending on the response the document is either emailed to the customer via Gmail or discarded.
6. **Direct notification paths** (management, emergency, on-site, special requests): Each fires a Telegram alert plus a structured Gmail message to the relevant inbox.

## How to set up

Estimated time: **30–45 minutes**

1. **Credentials** — connect: Tally (webhook), OpenAI, Telegram Bot, Gmail (OAuth2), PDFMonkey API.
2. **Tally form** — duplicate your form, copy its ID into the Tally Trigger node.
3. **Telegram** — create a bot via @BotFather, paste the token, and set the target chat IDs in each Telegram node (one per branch).
4. **Gmail recipients** — open each Gmail node and set the correct destination address per category (management, emergency, on-site, special).
5. **PDFMonkey** — create your document template in PDFMonkey, paste the `template_id` into both PDFMonkey nodes (one for single-family, one for multi-family).
6. **AI prompt** — open the "Classify Request" node and adapt the classification categories to your business vocabulary if needed.
7. **Test** — submit a test entry per category through the Tally form and verify each branch fires correctly.

## Requirements

- n8n (self-hosted or cloud)
- OpenAI API key (GPT-4o or comparable model)
- Telegram Bot token
- Gmail OAuth2 credentials
- PDFMonkey account with at least one document template
- Tally account with a form (optional: Voice AI agent for the webhook path)

## How to customize

- **Add more categories**: extend the AI prompt and add new Switch routes.
- **Swap Telegram for Slack/Discord**: replace the Telegram nodes with your channel of choice — the approval flow works identically with Slack's "Send and Wait".
- **Change the LLM**: replace the OpenAI node with Anthropic, Mistral, or any other supported model node.
- **Skip the approval step**: bypass PDFMonkey + sendAndWait for low-risk document categories by adding a direct route.
- **Trigger via Voice AI agent**: point your Voice AI's tool/webhook output at the Webhook node instead of using the Tally form.

## 🔗 Nodes Used

Webhook, Telegram, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
