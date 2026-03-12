# ⚒️ Generate AI system prompts for LLMs with Unli.dev

> ⚡ **357 views** · ⚒️ [Engineering](../)

## Description

System Prompt Generator Using Unli.dev turns human input ideas into a polished, repeatable system prompt blueprint.

It uses an n8n webhook, a small Set/Prepare pipeline, and Unli.dev's chat completions to generate single-turn, comprehensive system prompts that include:
- persona
- mission
- rules
- output format
- designer notes

so your team spends less time arguing about wording and more time shipping features (and you get consistent LLM behavior across apps).

## 💡 Why Use System Prompt Generator Using Unli.dev?

- **Fix the pain of inconsistency** 
- **Improve outcomes measurably** 
- **Competitive advantage:** Standardize your AI behavior with enforceable rules and templates so your product's voice and constraints stay consistent across teams — like an AI style guide that never takes a coffee break.

## ⚡ Perfect For

- **Prompt Engineers:** Systematize prompt design and handoffs.
- **Product Managers:** Lock down expected AI behaviors before launch.
- **Developers & AI Ops:** Automate prompt generation for testing and deployments.

## 🔧 How It Works

1. **⏱ Trigger:** Incoming HTTP POST to the webhook path `systempromptgenerator` kicks everything off.
2. **📎 Process:** Webhook → Set Prompt/Model (map incoming fields) → Prepare API Body (compose messages) → Unli.Dev (Chat Completions) → Extract Answer → Respond to Webhook.
3. **🤖 Smart Logic:** Unli.dev (chat completions) runs a single-turn generation using the embedded system-template that builds persona, operational protocol, rules, output format, and designer notes automatically.
4. **💌 Output:** The generated system prompt (with Designer's Notes) is returned in the webhook response for immediate use in your app or CI pipeline.

 ⚠️ **Security Note:** You'll want to swap in your Unli.dev API key under the HTTP header auth credential—don't share it in Slack. Seriously.

## 🧩 Requirements

- Active n8n instances
- Unli.dev API key / account
- HTTP Header Auth credential configured in n8n
- Optional: Postman or curl for testing

## 🛠️ Level Up Ideas

- **Add a lightweight front-end form** to let non-technical PMs generate prompts and preview outputs
- **Add validation rules** or automated tests that run generated system prompts against sample user queries to catch unwanted behavior early

Made by: **[Khaisa Studio](https://khaisa.studio?utm_source=n8nofficial)**  
Category: `system-prompt`, `unli.dev`

Need custom work? **[Contact me!](https://khmuhtadin.com/contact)**

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
