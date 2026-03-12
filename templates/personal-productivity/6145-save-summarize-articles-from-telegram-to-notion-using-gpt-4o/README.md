# ⚡ Save & summarize articles from Telegram to Notion using GPT-4o

> ⚡ **785 views** · ⚡ [Personal Productivity](../)

## Description

## Who it's for
This workflow is for anyone who wants to build an automated, AI-enhanced reading list. Ideal for:
- Knowledge workers and researchers who collect and organize articles
- Students managing study materials
- Productivity hackers who use Telegram and Notion for personal knowledge management
- Anyone using the [AI-Enhanced Knowledge Base Tracker Notion Template](https://www.notion.com/templates/ai-enhanced-knowledge-base-tracker)

## How it works
This workflow takes any article link sent to your Telegram bot and automatically:
- Parses the article into a clean title and body
- Uses OpenAI to generate a 1–2 sentence highlight and topic tag
- Saves it into your Notion database
- Sends a confirmation message with the highlight and Notion link back to Telegram

Main steps:
1. **Telegram Trigger** - Listens for incoming message containing an article link.
2. **Fetch Article Title & Content** - Calls the [article-parser-api](https://github.com/Yosua1011/article-parser-api) deployed on Vercel to fetch and parse the article content into structured JSON (title and content).
3. **Generate Highlight + Tag (AI Agent)** - Processes the parsed content to generate Highlight and Type tag values.
4. **Structured Metadata for Notion** - Adjusts the extracted data before saving it to Notion.
5. **Save Article to Notion Database** - Inserts the article and generated metadata into your Notion knowledge base.
6. **Confirm Save via Telegram** - Sends a confirmation message and the Notion page link back to the Telegram bot chat after the entry is created.

## Setup
1. Create and connect your API credentials:
   - [Telegram Bot](https://sendpulse.com/knowledge-base/chatbot/telegram/create-telegram-chatbot)
   - [OpenAI API Key](https://apidog.com/blog/openai-api-key-free/)
   - [Notion Integration](https://developers.notion.com/docs/create-a-notion-integration#create-your-integration-in-notion)
2. Deploy the article parser:
   - Use this repo: [article-parser-api](https://github.com/Yosua1011/article-parser-api)
   - Deploy it to Vercel or any serverless environment
3. Link your Notion database:
   - Duplicate the [AI‑Enhanced Knowledge Base Tracker](https://www.notion.com/templates/ai-enhanced-knowledge-base-tracker)
   - Copy the database URL and connect it in the Notion node
4. Test your workflow:
   - Click **Execute workflow**
   - Send an article link to your Telegram bot
5. Once verified, activate the workflow so it runs automatically

## Requirements
- Telegram bot token
- OpenAI API key
- Notion integration and shared database
- A deployed article parser (e.g., [article-parser-api](https://github.com/Yosua1011/article-parser-api))

## Optional customization
- Edit the AI Agent prompt to change tone or tagging style
- Add filtering or additional fields in the Edit Fields node
- Trigger from other sources (e.g., Slack or Email)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
