# 💬 Automate WhatsApp customer support with GPT‑4, RAG, text, voice, image and docs

> ⚡ **41 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Who it's for
This **n8n workflow** creates an intelligent WhatsApp customer support bot that can handle text, image, audio, and document messages. The workflow automatically processes incoming messages through different AI agents, maintains conversation context, accesses company knowledge bases, and provides personalized responses. It's designed for businesses looking to automate customer support across multiple communication channels.

### Features
* **Multi-Modal Processing** – Handles text, images, audio, and documents.
* **Smart Message Routing** – Categorizes and directs messages automatically.
* **AI Analysis** – Uses Google Gemini (images/audio) and Mistral Cloud (text).
* **Knowledge Base Access** – Connects with Google Sheets, Docs, and product docs.
* **Conversation Memory** – Keeps context across multiple messages.
* **Document Recognition** – Supports PDF, XLS/XLSX, CSV, JSON, and more.
* **Support Logging** – Tracks customer issues in Google Sheets.
* **Product Docs** – Access for Salebot, Delix, Socialvibe, Faculty, Yoori, MeetAir, Oxoo, Flixoo.

### Requirements
- **Rapiwa API credentials** for WhatsApp integration
- **Google Gemini API credentials** for image and audio analysis
- **Mistral Cloud API credentials** for language model processing
- **Google Sheets OAuth2 credentials** for accessing and logging data
- **Google Docs OAuth2 credentials** for accessing company documentation
- **HTTP Request access** to various product documentation sites

### Important Notes
- **Message Type Handling**: The workflow includes specialized processing for different message types
- **Document Support**: Supports multiple document formats including PDF, XLS, XLSX, CSV, JSON, XML, RTF, TXT, and HTML
- **Product Documentation**: Provides access to documentation for multiple products through HTTP requests
- **Conversation Memory**: Maintains context across multiple messages from the same session
- **Support Logging**: Automatically logs customer issues with categories and suggested solutions
- **Error Handling**: Provides appropriate error messages for unsupported file types

### Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
