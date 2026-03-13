# 📱 Automate content analysis & multi-platform distribution with GPT-4

> ⚡ **167 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### How It Works ⚙️

This workflow is a comprehensive, AI-powered system that acts as a virtual content manager for creators and marketing teams. It automates the entire content lifecycle, from ingestion and analysis to multi-channel distribution and performance logging.

1.  **Multi-Source Ingestion**: The workflow starts by ingesting new content from a trigger, such as a **WordPress** blog post or an **RSS Feed** from a YouTube channel.
2.  **AI-Powered Analysis**: The new content is sent to an **OpenAI (GPT-4)** node, which performs a series of high-value tasks. It instantly creates a summary, extracts keywords, analyzes the sentiment, and generates tailored post drafts for different social media platforms.
3.  **Smart Distribution**: A **Buffer** node then takes these AI-generated, platform-specific posts and schedules them for optimal times across your social media channels like **Twitter**, **LinkedIn**, and **Facebook**.
4.  **Centralized Archiving**: All of the content data, including the AI-generated summaries and insights, are automatically logged into a **Google Sheets** database. This creates a powerful, searchable archive and an analytics dashboard for tracking content performance.

### How to Set Up 🛠️

1.  **Import the Workflow**: Copy the provided workflow JSON and import it into your n8n instance.
2.  **Configure Credentials**:
    * **OpenAI**: Add your API Key.
    * **WordPress**: Add your API credentials.
    * **Buffer**: Add your API credentials.
    * **Google Sheets**: Add your OAuth2 credentials.
3.  **Customize Workflow Nodes**:
    * **Node 1 (`WordPress Trigger`)**: Select your WordPress credential. You can also add other trigger nodes like `RSS Feed Read Trigger` if needed.
    * **Node 2 (`OpenAI`)**: You can customize the prompt to get different kinds of output or translate into more languages.
    * **Node 4 (`Buffer`)**: Select the social media profiles you want to post to.
    * **Node 5 (`Google Sheets`)**: Replace the placeholder `[YOUR SPREADSHEET ID]` and `[YOUR CONTENT LOG SHEET NAME]` with your own details and map the data columns.
4.  **Save & Activate**: Once all settings and credentials are configured, save the workflow and click the "Inactive" toggle in the top-right corner to make it live.

## 🔗 Nodes Used

Google Sheets, Webhook, Facebook Graph API, X (Formerly Twitter), LinkedIn, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
