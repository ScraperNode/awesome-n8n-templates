# 🎣 Cold email icebreakers from local business search with GPT-4 and Dumpling AI

> ⚡ **869 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow helps digital marketers and outreach specialists automate the research and creation of cold email icebreakers for local businesses.

**What it does:**

1. Starts with a **Form Trigger**, where you input a search keyword (e.g., “Dentist in New York”).
2. Uses **Dumpling AI’s Google Maps API** to search for local businesses matching the keyword.
3. Extracts individual business data, including **website URLs**.
4. Sends each website to Dumpling AI to extract:
   - A **website summary** for personalization
   - An **email address** (if available)
5. Sends the summary and business info to **GPT-4** via OpenAI to write a short, warm, and customized icebreaker message.
6. Filters out results with missing email addresses.
7. Logs the business name, email, website, phone number, website summary, and generated icebreaker into **Google Sheets**.
8. Optionally pushes the lead and personalization to **Instantly.ai** for automated cold outreach.

**Tools Used:**

- Form Trigger (n8n)
- Dumpling AI (Search & Extraction APIs)
- OpenAI GPT-4 (via LangChain Node)
- Google Sheets
- Instantly.ai (optional lead delivery)

### 🛠️ How to Customize the Workflow

- **Change the search region or business type:** Adjust the default keyword in the **Form Trigger** or connect a different input source (like Google Sheets).
- **Customize the prompt:** Modify the **GPT-4 node prompt** to match your agency tone or outreach style.
- **Add or remove data fields:** Edit the **Google Sheets node** to store additional business data or remove unnecessary ones.
- **Connect to your CRM or outreach tool:** Replace or extend the **Instantly API node** with your own CRM (e.g., HubSpot, Close, Pipedrive) using HTTP Request or native integrations.
- **Control batching size:** The **Split In Batches node** is set to 2 by default. You can increase this to speed up processing or reduce it to avoid rate limits.

This automation is ideal for sales teams, digital marketing freelancers, and agencies who want to scale lead generation while keeping emails personal and relevant.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
