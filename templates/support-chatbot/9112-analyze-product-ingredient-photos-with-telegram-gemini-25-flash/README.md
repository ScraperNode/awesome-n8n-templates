# 💬 Analyze product ingredient photos with Telegram & Gemini 2.5 Flash

> ⚡ **377 views** · 💬 [Support Chatbots](../)

## Description

# Analyze Ingredient Photos using Telegram & Gemini AI

# Who’s it for
- Skincare enthusiasts who want to know if a product is safe.
- Food or supplement buyers checking ingredient safety.
- Parents reviewing kids’ products.
- Anyone wanting quick ingredient analysis before using/buying a product.

# How it works / What it does
1. **Telegram Input** – User sends a photo of a product label or a text list of ingredients.
2. **Photo Handling** – Workflow checks if the message contains a photo.
   - If **yes** → retrieves the file, extracts ingredients using Google Gemini AI.
    - If **no**  → handles text/greetings/off-topic queries.
3. **Caption Branching**
   - **With caption** → Gives Use / Do Not Use recommendation + reason.
   - **Without caption** → Gives Advantages, Disadvantages, Recommended For, Not Recommended For (3 points each).
4. **Response on Telegram** – Sends a friendly, structured response back to the user.

# How to set up
1. Import this workflow JSON into n8n.
2. Create and connect a Telegram bot via BotFather → paste the API token in Telegram credentials.
3. Add Google Gemini (PaLM) API credentials inside n8n.
4. Activate the workflow and send your first product photo via Telegram!

# Requirements
1. n8n instance (self-hosted or cloud).
2. Telegram bot token.
3. Google Gemini API credentials.

# How to customize the workflow
- **Change AI Instructions** – Update system messages to tweak tone (more technical, casual, or medical).
- **Adjust Output Format** – Edit Telegram response nodes for shorter/longer answers.
- **Expand Analysis** – Add extra categories (e.g., allergens, environmental impact).
- **Multi-language Support** – Modify prompts to output in the user’s preferred language.
- **Add Database Logging** – Connect to MySQL, PostgreSQL to save conversations (user queries + AI responses).

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
