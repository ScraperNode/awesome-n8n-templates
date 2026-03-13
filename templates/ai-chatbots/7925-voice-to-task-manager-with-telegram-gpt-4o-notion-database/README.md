# 🤖 Voice-to-task manager with Telegram, GPT-4o & Notion database

> ⚡ **856 views** · 🤖 [AI Chatbots & Agents](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

📌 How it works

This workflow turns voice or text messages from Telegram into structured tasks in Notion, using AI-powered intent detection and task generation.

It supports:
- 🆕 Task creation
- ✏️ Task updates (like changing priority, title, or deadline)
- 🧠 Task analysis (e.g., workload, goal alignment, emotional fatigue)

The assistant uses OpenAI to:
- Detect intent (create, update, or analyze)
- Extract or update task fields (title, priority, due date, etc.)
- Auto-format list-style descriptions with bullet points
- Detect relevant tags like health, money, sport, etc.

⚙️ Setup steps
1. Clone the [GitHub repo](https://github.com/YahorDubrouski/ai-planner) or import the .json into n8n manually.
2. Configure:
- OpenAI credentials
- Telegram Bot Token
- Notion credentials
3. Use Telegram to send messages like:
- “Create a task to call mom tomorrow”
- “Update the grocery task to add milk”
- “Am I overbooked today?”

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
