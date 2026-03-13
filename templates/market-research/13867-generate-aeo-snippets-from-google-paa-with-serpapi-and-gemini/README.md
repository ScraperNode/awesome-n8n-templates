# 📊 Generate AEO snippets from Google PAA with SerpApi and Gemini

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template automates the identification & optimisation of **Answer Engine Optimisation (AEO)** opportunities by extracting **Google "People Also Ask" (PAA)** data to generate high-authority response snippets.

As search engines **shift toward AI-generated overviews** and answer engines like Perplexity, appearing in the "Citation" or "Snippet" layer is critical for maintaining organic visibility. This workflow **identifies the exact questions** users are asking and drafts structured answers designed to **win featured snippets**.

## How it works

- The workflow initiates via a **Form Submission** with a target keyword.
- It uses the **SerpApi node** to scrape real-time Google Search results, specifically targeting the **related_questions (PAA)** array.
- An **Item Lists node** cleans the data to ensure only high-relevance questions are processed.
- The questions are sent to a **Gemini node** with a specialized prompt to draft a 40-50 word answer optimized for "Speakable" Schema and featured snippet logic.
- The finalised Q&A pairs are then appended to a **Google Sheet**, creating a ready-to-publish content gap report for the agency's editorial team.

## How to use

- Replace the keyword placeholder in the HTTP/SerpApi node with your client’s target search term.
- Connect your Notion or Google Sheets account to the final destination node to house the results.
- Adjust the Schedule Trigger frequency based on how often you perform keyword research for your clients.

## Requirements

- **SerpApi Account:** To programmatically access Google’s "People Also Ask" data.
- **AI Credentials:** An API key for Gemini or OpenAI to generate the response text.
- **Destination App:** A Notion workspace, Google Sheet, or Airtable base to store the output.

## Customising this workflow

- **Competitor Tracking:** Modify the SerpApi parameters to include a specific domain to see what questions your competitors are currently ranking for.
- **Schema Generation:** Add a second AI node to automatically wrap the answers in JSON-LD Question and AcceptedAnswer schema code for immediate dev-handoff.
- **Multi-lingual AEO:** Add a translation node before the final output to localise answer snippets for international SEO campaigns.
- **Slack Notification:** Add a Slack node at the end to notify the account manager to review the new optimisation opportunities.
- **AEO Master Log:** Maintain a database to store all Q&A pairs for each client.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
