# 🤖 Financial analysis report chatbot agent with Gemini 2.5 Flash and Discord

> ⚡ **617 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This n8n template turns chat questions into structured financial reports using Gemini and posts them to a Discord channel via webhook. Ask about tickers, sectors, or theses (e.g., “NVDA long‑term outlook?” or “Gold ETF short‑term drivers?”) and receive a concise, shareable report.

Good to know
- Not financial advice: Use for insights only; verify independently.
- Model availability can vary by region. If you see “model not found,” it may be geo‑restricted.
- Costs depend on model and tokens. Check current Gemini pricing for updates.
- Discord messages are limited to ~2000 characters per post; long reports may need splitting.
- Rate limits: Discord webhooks are rate‑limited; add short waits for bursts.

How it works
1. Chat Trigger collects the user’s question (public chat supported when the workflow is activated).
2. Conversation Memory keeps a short window of recent messages to maintain context.
3. Connect Gemini provides the LLM (e.g., gemini‑2.5‑flash‑lite) and parameters (temperature, tokens).
4. Agent (agent1) applies a financial analysis System Message to produce structured insights.
5. Structured Output Parser enforces a simple JSON schema: idea (one‑line thesis) + analysis (Markdown sections).
6. Code formats a Discord‑ready Markdown report (title, question, executive summary, sections, disclaimer).
7. Edit Fields maps the formatted report to a clean content field.
8. Discord Webhook posts the final report to your channel.

How to use
- Start with the built‑in Chat Trigger: click Open chat, ask a question, and verify the Discord post.
- Replace or augment with a Cron or Webhook trigger for scheduled or programmatic runs.
- For richer context, add HTTP Request nodes (prices, news, filings) and pass summaries to the agent.

Requirements
- n8n instance with internet access
- Google AI (Gemini) API key
- Discord server with a webhook URL

Customising this workflow
- System Message: Adjust tone, depth, risk profile, and required sections (Summary, Drivers, Risks, Metrics, Next Steps, Takeaway).
- Model settings: Switch models or tune temperature/tokens in Connect Gemini.
- Schema: Extend the parser and formatter with fields like drivers[], risks[], or metrics{}.
- Formatting: Edit the Code node to change headings, emojis, disclaimers, or add timestamps.
- Operations: Add retries, message splitting for long outputs, and rate‑limit handling for Discord.

## 🔗 Nodes Used

Discord, AI Agent, Simple Memory, Structured Output Parser, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
