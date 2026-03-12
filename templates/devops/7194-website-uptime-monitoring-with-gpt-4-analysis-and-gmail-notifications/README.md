# ⚙️ Website uptime monitoring with GPT-4 analysis and Gmail notifications

> ⚡ **230 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## How it works
Checks if a website is up, sends the HTTP result to an AI model (ChatGPT) for analysis, and emails a clear success or failure message. Great for a quick “is this site up?” check you can trigger from any system via HTTP.

1. **Webhook** — Receives a POST with the target URL.
2. **HTTP Request** — Attempts to fetch the URL.
3. **Message a model** — Uses ChatGPT to explain the status and cause of any error.
4. **IF** — Checks if the HTTP status code equals 200.
5. **Gmail Success** — Sends a success email with AI explanation.
6. **Gmail Error** — Sends an error email with AI explanation and next steps.

---

## Set up steps
- Estimated setup: 5–10 minutes.
- Beginner friendly — no advanced config required.
- Add your Webhook URL where needed and connect your Gmail account.
- Keep detailed instructions and configuration notes inside **Sticky Notes** in your workflow.

---

## Inputs
Send a POST request to your Webhook with:
```json
{ "url": "https://example.com" }

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
