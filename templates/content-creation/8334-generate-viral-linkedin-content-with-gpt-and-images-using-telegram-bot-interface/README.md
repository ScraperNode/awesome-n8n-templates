# 🎬 Generate viral LinkedIn content with GPT and images using Telegram bot interface

> ⚡ **237 views** · 🎬 [Content Creation & Video](../)

## Description

## AI-Powered LinkedIn Viral Content Generator & Telegram Bot

**Disclaimer:**  
This workflow uses community-contributed nodes which are not officially maintained by n8n. Please test thoroughly before running in production. Do not use this template in production without your own independent validation.

---

### Overview

This workflow empowers you to generate highly viral LinkedIn posts, including both compelling copy and AI-generated custom images, directly from a Telegram chat interface. Leveraging AI-powered research, GPT-based content creation, and community-based integrations, it creates a seamless automation: from prompt to trend analysis, viral copywriting, image generation, and message delivery—all in one flow.

---

### Node-by-Node Workflow Explanation

- **Telegram Trigger:** Starts the workflow from a specified Telegram chat by capturing user prompts.
- **Expert Algo (AI Analysis):** Uses OpenAI and Tavily to research current LinkedIn trends, analyzes top-performing content, and produces a content framework plus an AI image prompt.
- **Structured Output Parser:** Validates and formats the AI's returned JSON output.
- **CM Junior:** Generates three LinkedIn post drafts in your own style, based on the viral framework and rules.
- **Structured Output Parser1:** Ensures correct JSON for the drafted posts.
- **Community Manager:** Evaluates the draft posts using additional trend analysis via Tavily, selects the one most likely to go viral.
- **Structured Output Parser2:** Validates the community manager's single post output.
- **Generate Image:** Calls the AI image generator on RapidAPI to create a picture for your post, using the recommended prompt.
- **Split Out/Download Image:** Prepares and downloads the generated image file.
- **Send Telegram Photo and Message:** Sends the chosen LinkedIn post and the generated image to your Telegram bot.

---

### Setup Instructions

1. **Telegram:** Create a bot using @BotFather and get your bot token and target chat ID.
2. **OpenAI:** Register at OpenAI, obtain your API key.
3. **Tavily:** Register at Tavily and get your API key.
4. **RapidAPI (AI Image Generator):** Create an account, subscribe to the "ai-text-to-image-generator-flux-free-api", and copy your API key.
5. **Credentials:** Use the n8n Credentials Manager to configure each key securely—**never** hardcode API keys into nodes.
6. **Workflow Personalization:** Replace all placeholders like Telegram chat ID by referencing the credentials or environment variables.
7. **Testing:** Run the workflow using your bot and ensure that no personal or sensitive data remains before publishing.

---

### Additional Recommendations

- Update the image generator, Telegram, OpenAI, and Tavily node credentials through the n8n Credentials panel.
- Custom tailor prompts and output formatting as needed for your LinkedIn content strategy.
- For security, **do not** share any personal API keys or chat IDs in your public template.

---
![Capture d’écran 20250910 185857.png](fileId:2350)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
