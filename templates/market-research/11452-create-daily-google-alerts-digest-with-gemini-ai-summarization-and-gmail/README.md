# 📊 Create daily Google Alerts digest with Gemini AI summarization and Gmail

> ⚡ **373 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Summarize Google Alerts with Gemini

Turn your noisy Google Alerts folder into a concise, AI-curated executive briefing. This workflow replaces dozens of individual notification emails with a single, structured daily digest.

### How it works
*   **Ingest:** Fetches unread Google Alerts emails from your Gmail inbox.
*   **Clean:** Extracts article links, scrapes the website content, and strips away ads and clutter to ensure high-quality AI processing.
*   **Analyze:** Uses Google Gemini to summarize each article into a concise 2-4 sentence overview.
*   **Deliver:** Compiles a professional HTML email report sorted by topic, sends it to you, and automatically marks the original alerts as read.

### Set up steps
*   **Connect Gmail:** Authenticate your Gmail account to allow reading alerts and sending the digest.
*   **Connect Gemini:** Add your Google Gemini API key.
*   **Configure Recipient:** Update the **Send Email Digest** node with your desired destination email address.
*   **Schedule:** (Optional) Replace the Manual Trigger with a **Schedule Trigger** (e.g., every morning at 7 AM) to fully automate the process.

## 🔗 Nodes Used

HTTP Request, Gmail, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
