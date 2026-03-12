# ⚡ Track & query expenses via Telegram with GPT-4.1 mini & Google Sheets

> ⚡ **352 views** · ⚡ [Personal Productivity](../)

## Description

## Description

Track and query your expenses effortlessly through Telegram using voice or text messages. This AI-powered workflow transcribes voice input via AssemblyAI, processes transactions with a GPT-4.1 mini agent, stores data in Google Sheets with comprehensive timestamp metadata, and responds with both voice and text confirmations.

**Key Features:**
- **Multi-modal input:** Send expenses via voice messages or text
- **Intelligent processing:** AI agent automatically categorizes transactions, calculates running balance, and handles multiple expenses in a single message
- **Conversational queries:** Ask questions like "What did I spend on food last week?" 
- **Voice responses:** Get spoken confirmations using OpenAI TTS
- **Smart alerts:** Automatic Gmail notifications for low balance thresholds
- **Cost tracking:** Monitors and logs all API usage costs (LLM + TTS) in USD and INR

**Perfect for:**
- Personal finance management with minimal effort
- Small business expense tracking with audit trails
- Shared household or team budgets
- API cost monitoring for developers

Each transaction includes detailed metadata (timestamps, categories, run IDs, source text) enabling powerful time-based analytics and queries.

**Requirements:** Telegram bot, Google Sheets OAuth, OpenAI API key, AssemblyAI API key, Gmail OAuth (optional)

**Support:** Join [n8n Discord](https://discord.com/invite/n8n) or [Community Forum](https://community.n8n.io/)
README file available at https://drive.google.com/file/d/1mh9FRm7zemdazNpjyEq9uhHSc_9go7PN/view?usp=sharing

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
