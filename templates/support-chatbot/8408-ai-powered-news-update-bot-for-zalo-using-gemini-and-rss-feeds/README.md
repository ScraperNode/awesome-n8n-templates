# 💬 AI-powered news update bot for Zalo using Gemini and RSS feeds

> ⚡ **1,293 views** · 💬 [Support Chatbots](../)

## Description

# How it works

## 🧠 AI-Powered News Update Bot for Zalo using Gemini and RSS Feeds

This workflow allows you to build a smart Zalo chatbot that automatically summarizes and delivers the latest news using Google Gemini and RSS feeds. It’s perfect for keeping users informed with AI-curated updates directly inside Vietnam’s most popular messaging app.

---

## 🚀 What It Does

- Receives user messages via Zalo Bot webhook
- Fetches the latest articles from an RSS feed (e.g., AI news)
- Summarizes the content using Google Gemini
- Formats the response and sends it back to the user on Zalo

---

## 📱 What Is Zalo?

Zalo is Vietnam’s leading instant messaging app, with over 78 million monthly active users—more than 85% of the country’s internet-connected population. It handles 2 billion messages per day and is deeply embedded in Vietnamese daily life, making it a powerful channel for communication and automation.

---

## 🔧 Setup Instructions

### 1. Create a Zalo Bot
- Open the Zalo app and search for **"Zalo Bot Creator"**
- Tap **"Create Zalo Bot Account"**
- Your bot name must start with `"Bot"` (e.g., `Bot AI News`)
- After creation, Zalo will send you a message containing your **Bot Token**

### 2. Configure the Webhook
- Replace `[your-webhook URL]` in Zalo Bot Creator with your n8n webhook URL
- Use the **Webhook node** in this workflow to receive incoming messages

### 3. Set Up Gemini
- Add your Gemini API key to the **HTTP Request node** labeled `Summarize AI News`
- Customize the prompt if you want a different tone or summary style

### 4. Customize RSS Feed
- Replace the default RSS URL with your preferred news source
- You can use any feed that provides timely updates (e.g., tech, finance, health)

---

## 🧪 Example Interaction

**User:** "What's new today?"  
**Bot:** "🧠 AI Update: Google launches Gemini 2 with multimodal capabilities, revolutionizing how models understand text, image, and code..."

---

## ⚠️ Notes

- Zalo Bots currently do **not support images, voice, or file attachments**
- Make sure your Gemini API key has access to the model you're calling
- RSS feeds should be publicly accessible and well-formatted

---

## 🧩 Nodes Used

- Webhook
- HTTP Request (Gemini)
- RSS Feed Read
- Set & Format
- Zalo Message Sender (via API)

---

## 💡 Tips

- You can swap Gemini with GPT-4 or Claude by adjusting the API call
- Add filters to the RSS node to only include articles with specific keywords
- Use the `Function` node to personalize responses based on user history

---

Built by Nguyen Thieu Toan (Nguyễn Thiệu Toàn) (https://nguyenthieutoan.com).
Read more about this workflow by Vietnamese: 
https://nguyenthieutoan.com/share-workflow-n8n-zalo-bot-cap-nhat-tin-tuc/

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Structured Output Parser, Google Gemini Chat Model, MongoDB Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
