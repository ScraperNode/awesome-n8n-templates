# 🎯 Create personalized news digests from RSS feeds with GPT & Gemini via email/Telegram

> ⚡ **733 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow provides an intelligent automation solution for **processing RSS feeds** using **ScrapeGraph API** and **delivering personalized news summaries** via email and Telegram. 

---

### Key Benefits

**Time-Saving Automation**
- ✅ Eliminates manual news monitoring by automatically processing RSS feeds
- ✅ Filters content to show only articles from the last 24 hours
- ✅ Reduces information overload by limiting to the 3 most recent relevant articles

**Multi-Channel Distribution**
- ✅ Delivers summaries simultaneously via email and Telegram
- ✅ Ensures you stay informed across your preferred communication platforms
- ✅ Provides flexibility in how you consume your daily news digest

**AI-Powered Content Processing**
- ✅ Uses [ScrapeGraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia) to convert web articles into clean, readable markdown
- ✅ Employs multiple AI models (OpenAI GPT and Google Gemini) for robust content extraction
- ✅ Generates structured, coherent summaries that highlight key concepts and main ideas

**Quality Content Filtering**
- ✅ Automatically filters out outdated content (older than 24 hours)
- ✅ Focuses on the most recent and relevant articles
- ✅ Processes only high-quality content through intelligent extraction algorithms

---

### **How it Works**


1.  **Trigger & Data Fetching:** The workflow starts manually. It reads a specified RSS feed and immediately filters the items to keep only those published within the last 24 hours, ensuring the digest is current.

2.  **Content Processing:** For each recent article (up to a limit of 3), the workflow performs a two-step process:
    *   **Scraping:** It visits the article's URL using [ScrapeGraphAI](https://dashboard.scrapegraphai.com/?via=n3witalia) to extract the main content and convert it into clean text.
    *   **Information Extraction:** A Language Model (Google Gemini) analyzes the scraped text to identify and extract the most relevant information, discarding superfluous content like ads or navigation menus.

3.  **Digest Generation & Delivery:** The extracted content from all articles is aggregated. A powerful Language Model (OpenAI) is then instructed to synthesize this information into a well-structured summary with a clear subject and body, formatted as an email. Finally, this generated digest is sent simultaneously to a specified email address via Gmail and to a Telegram channel or chat.
---


### **Set up Steps**

Before executing the workflow, you need to configure the following steps:

1.  **Install the Community Node:** Install the **ScrapeGraphAI node** from the n8n community nodes list. This node is essential for scraping article content and is not part of the core n8n installation.

2.  **Configure Credentials:** Ensure the following credentials are correctly set up in your n8n instance:
    *   `ScrapegraphAI account`: For the web scraping functionality.
    *   `OpenAi account`: For the summary generation.
    *   `Gmail account`: To send the email.
    *   `Telegram account`: To send the Telegram message.

3.  **Set Key Parameters:** Update the workflow with your specific details:
    *   In the **"RSS Read"** node: Replace `URL_FEED` with the actual URL of the RSS feed you want to monitor.
    *   In the **"Send to Telegram"** node: Replace `YOUR_CHAT_ID` with the unique identifier of your Telegram channel or chat.
---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

RSS Read, Telegram, Gmail, Filter, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
