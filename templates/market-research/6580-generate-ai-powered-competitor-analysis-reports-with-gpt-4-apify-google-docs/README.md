# 📊 Generate AI-powered competitor analysis reports with GPT-4, Apify & Google Docs

> ⚡ **218 views** · 📊 [Market Research & Insights](../)

## Description

### How it Works ⚙️

This workflow is your agency’s secret weapon. It’s a multi-AI-agent system that automates the entire process of competitor and market research, providing you with a complete strategic analysis in minutes.

1.  **Digital Reconnaissance (Agent 1)**: The workflow is triggered with a client's business name and industry. The first AI agent, powered by **Apify**, immediately begins a deep dive into the market to identify and scrape data on the client’s top competitors.
2.  **Strategic Analysis (Agent 2)**: All the raw data from Agent 1 is sent to the second AI agent, powered by **OpenAI (GPT-4)**. This agent performs a sophisticated analysis to summarize competitor messaging, identify their audience, and generate a full SWOT analysis for your client.
3.  **Report & Strategy Generation (Agent 3)**: A third AI agent, also using **OpenAI**, takes the strategic analysis and writes a professional, persuasive report. This report is then automatically populated into a pre-designed **Google Docs** template, ready for review.
4.  **Instant Delivery**: The final report is automatically sent to your internal team via **Slack**, allowing you to start your strategy meeting almost instantly after the workflow is triggered.

### Setup Steps 🛠️

1.  **Get Your Apify Actor**:
    * Log in to Apify and find a suitable Actor for web scraping (e.g., `Google Search Results Scraper`).
    * Copy the `Actor ID` to use in the n8n workflow.

2.  **Prepare Your Report Template**:
    * Create a new Google Doc to serve as your report template.
    * Use placeholders like `{{ client_name }}`, `{{ report_content }}`, and `{{ client_industry }}` to define where the AI-generated text will go.
    * Copy the document ID from the Google Doc URL and save it for later.

3.  **Import the Workflow**:
    * Copy the provided workflow JSON and import it into your n8n instance.

4.  **Configure Credentials**:
    * **Apify**: Add your Apify API Key.
    * **OpenAI**: Add your OpenAI API Key.
    * **Google Docs**: Add your OAuth2 credential.
    * **Slack**: Add your Bot Token credential.

5.  **Customize Workflow Nodes**:
    * **Node 2 (`Apify`)**: Paste your `Actor ID` here. You can also customize the search queries in the `Input JSON` to be more specific.
    * **Node 6 (`Google Docs`)**: Paste your template's `Document ID` here. Ensure the `Values` match the placeholders you created in your template.
    * **Node 7 (`Slack`)**: Replace `[YOUR MARKETING TEAM SLACK CHANNEL ID]` with the correct channel ID where you want the report delivered.

6.  **Activate & Test**:
    * Once all settings are configured, save the workflow.
    * Click the "Inactive" toggle to make it live.
    * Run a test by manually entering a client's name and industry to ensure the data flows correctly and the report is delivered.

## 🔗 Nodes Used

HTTP Request, Slack, Google Docs, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
