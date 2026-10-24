# 📊 Generate a buyer persona pain point report using Olostep, Gemini and Google Docs

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Market Segmentation: Buyer Persona Pain Point Report

Understand your customers before you build for them. This workflow, **Market Segmentation: Buyer Persona Pain Point Report**, automates the grueling process of primary market research. By scraping real-world discussions from LinkedIn, tech forums, and review sites, it uses AI to identify exactly what keeps your target persona up at night. 

Instead of guessing, you get a strategic document detailing core pain points, the vocabulary your customers actually use, and a preliminary feature roadmap designed to solve their unmet needs.

---

### Who’s it for?
*   **Product Managers:** Validate new feature ideas against real-world user frustrations.
*   **Founders & Entrepreneurs:** Conduct rapid market discovery for a new niche or pivot.
*   **Marketing Strategists:** Extract the exact "jargon" and "fear-based" language needed for high-converting ad copy and landing pages.
*   **Sales Teams:** Prepare for discovery calls with a deep understanding of the prospect's industry-specific hurdles.

### How it works / What it does
1.  **Trigger:** Enter a target **Persona** and a **Product Category** via an n8n Form.
2.  **Research:** **Olostep** searches the web for relevant LinkedIn threads, specialized forums, and tech discussions.
3.  **Data Logging:** Every raw discussion snippet is automatically logged into a **Google Sheet** for your long-term records.
4.  **Analysis Phase:**
    *   **Snippet Analyst:** Gemini extracts critical pain points and specific industry jargon.
    *   **Pain Points Analyst:** Identifies the "Critical Unmet Need" and brainstorms 5 feature ideas with specific messaging hooks.
5.  **Final Reporting:** A **Report Editor** node compiles everything into a professional Markdown document, converts it to a Google Doc, and emails the sharing link to you.

### How to set up
1.  **Credentials:** You will need API keys for **Google Gemini**, **Olostep**, **Google Sheets**, and **Google Drive**.
2.  **Google Sheet:** Create a sheet with columns for `postTitle`, `postSnippet`, `postURL`, and `authorType`, then select it in the "Append row in sheet" node.
3.  **Form Trigger:** Activate the workflow and use the provided URL to start your research.
4.  **Email Recipient:** Update the "Share link & email" node with your email address to receive the final report notifications.

### How to customize the workflow
*   **Deepen Research:** Increase the number of discussions in the "get discussions" node if you need a wider sample size for broader markets.
*   **Adjust Ideation:** Modify the "Pain points analyst" prompt to focus on specific business outcomes, such as "reducing churn" or "increasing upsells."
*   **Database Integration:** Swap Google Sheets for Airtable or a SQL database if you want to build a more permanent "Customer Intelligence" vault.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Markdown, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
