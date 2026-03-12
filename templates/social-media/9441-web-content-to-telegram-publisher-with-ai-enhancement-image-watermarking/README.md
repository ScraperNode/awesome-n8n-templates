# 📱 Web content to Telegram publisher with AI enhancement & image watermarking

> ⚡ **282 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🤖 This **n8n workflow** automatically parses news articles from a webpage, enhances them with AI, and publishes them to a Telegram channel with a watermarked image.
Unlike the RSS-based setup, this workflow directly fetches and processes content from any specified webpage.

---

### **Use Cases**

* Automatically post new website articles to your **Telegram channel**.
* Use **AI** to rewrite or summarize text for better readability.
* Add branded watermarks to images and keep your channel visually consistent.

---

### **How It Works**

1. **Schedule Trigger:** Runs the workflow on a custom schedule.
2. **Fetch Web Page:** Retrieves the HTML content of your chosen website.
3. **Extract Links:** Parses article links from the HTML source.
4. **Check & Update Google Sheet:** Skips already processed links and records new ones.
5. **Fetch & Clean Article:** Retrieves, extracts, and formats the article text.
6. **AI Text Customization:** Uses an AI agent to enhance the text.
7. **Image Watermarking:** Fetches the article image and applies a watermark.
8. **Telegram Publishing:** Posts the final image and AI-enhanced text to your channel.

---

### **Setup Steps**

* **Google Sheet:** Create and share a sheet to track processed links.
* **Web URL:** Enter your target webpage in the HTTP Request node.
* **AI Agent:** Choose a model and prompt for text customization (e.g., OpenRouter or Gemini).
* **Telegram Bot:** Add your bot token and chat ID.
* **Run & Test:** Execute once manually, then let it run on schedule.

---

### **Tips**

* AI usage may incur costs depending on the model provider.
* Some AI models can be geo-restricted — check availability if you get “model not found.”
* Customize watermark style (font, color, size) to match your branding.
* Use Telegram Markdown for rich message formatting.

---

✅ **Key Advantage:**
No RSS required — the workflow directly parses websites, enhances content with AI, and automates publishing to Telegram.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
