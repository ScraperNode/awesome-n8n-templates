# 🤖 Automate Telegram chat responses using Google Gemini

> ⚡ **2,109 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# Automate Telegram Chat Responses Using Google Gemini

***By [WeblineIndia](https://n8n.io/creators/weblineindia/)***

---

## ⚡ TL;DR (Quick Steps)
1. **Create a Telegram bot** using [@BotFather](https://t.me/BotFather) and copy the API Token.
2. **Obtain Google Gemini API Key** via Google Cloud.
3. **Set up the n8n workflow**:
   - Trigger: Telegram message received.
   - AI Model: Google Gemini generates response.
   - Output: AI reply sent back to user via Telegram.
4. **Customize the system prompt**, model, or message handling to suit your use case.

---

## 🧠 Description
This n8n workflow enables seamless automation of real-time chat replies in **Telegram** by integrating with **Google Gemini's Chat Model**. Every time a user sends a message to your Telegram bot, the workflow routes it through the Gemini AI, which analyzes and crafts a professional response. This reply is then automatically delivered back to the user.

The setup acts as a lightweight but powerful chatbot system — ideal for businesses, customer service, or even personal productivity bots. You can easily modify its tone, intelligence level, or logging mechanisms to cater to specific domains such as sales, tech support, or general Q&A.

---

## 🎯 Purpose of the Workflow
The primary goal of this workflow is to **automate intelligent, context-aware chat responses in Telegram** using a robust AI model. It eliminates manual reply handling, enhances user engagement, and ensures 24/7 interaction capabilities — all through a no-code or low-code setup using n8n.

---

## 🛠️ Steps to Configure and Use

### ✅ Pre-Conditions / Requirements
- **Telegram Bot Token**: Get it from [@BotFather](https://t.me/BotFather).
- **Google Gemini API Key**: Available via Google Cloud PaLM/Gemini API access.
- **n8n Instance**: Hosted or local instance with required nodes installed (`Telegram`, `Basic LLM Chain`, and `Google Gemini` support).

---

### 🔧 Setup Instructions

#### Step 1: Telegram Trigger – Listen for Incoming Messages
- Add **Telegram Trigger** node.
- Select **Trigger On: Message**.
- Authenticate using your **Telegram Bot Token**.
- This will capture incoming messages from any user interacting with your bot.

#### Step 2: Google Gemini AI – Generate a Smart Reply
- Add the **Basic LLM Chain** node.
- Connect the input message (`{{$json.message.text}}`) from the Telegram Trigger.
- System Prompt:  
  &gt; "You are an AI assistant. Reply to the following user message professionally:"
- Choose **Google Gemini Chat Model** (`models/gemini-1.5-pro`).
- Connect this node to receive the text input and pass it to Gemini for processing.

#### Step 3: Telegram Reply – Send the AI Response
- Add a **Telegram** node (Operation: Send Message).
- Set **Chat ID** dynamically from the Telegram Trigger node.
- Input the generated message from the Gemini output.
- Enable **Parse Mode** as `HTML` for rich formatting.

#### Final Step: Link All Nodes
- `Receive Telegram Message` → `Generate AI Response` → `Send Telegram Reply`.

&gt; Tip: Test the workflow by sending a message to your Telegram bot and ensure you receive an AI-generated reply.

---

## 🧩 Customization Guidance
- ✏️ **Modify the AI tone** by updating the system prompt.
- 🤖 **Use other AI models** (e.g., OpenAI GPT-4o).
- 🔍 **Add filters** to respond differently based on specific keywords.
- 📊 **Extend the workflow** to store chats in Google Sheets, Airtable, or databases for audit or analytics.
- 🌐 **Multi-language support**: Add translation layers before and after AI processing.

---

## 🛠️ Troubleshooting Guide
- **No message received?** Check if your Telegram bot is active and webhook is working.
- **AI not responding?** Validate your Google Gemini API key and usage quota.
- **Wrong replies?** Refine the system prompt or validate message routing.
- **Formatting issues?** Ensure Parse Mode is correctly set to `HTML`.

---

## 💡 Use Case Examples
- **Customer Service Chatbot** for product queries.
- **Educational Bots** for answering user questions on a topic.
- **Mental Health Companion** that gives supportive replies.
- **Event-based Announcers** or automatic responders during off-hours.

&gt; And many more! This workflow can be easily extended to support advanced use cases with just a few additional nodes.

---

## 👨‍💻 About the Creator

This workflow is developed by **WeblineIndia**, a trusted provider of AI development services and process automation solutions.  

If you're looking to build or customize intelligent workflows like this, we invite you to [get in touch with our team](https://www.weblineindia.com/contact-us.html). We also offer specialized [Python development](https://www.weblineindia.com/python-development.html) and [AI developer hiring services](https://www.weblineindia.com/hire-ai-developers.html) to supercharge your automation needs.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
