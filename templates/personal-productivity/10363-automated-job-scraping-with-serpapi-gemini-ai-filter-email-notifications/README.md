# ⚡ Automated job scraping with SerpAPI, Gemini AI filter & email notifications

> ⚡ **97 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🛜 Daily Notification on Specific Latest Job Offers 🛜

🌟 **Overview**: Never miss a job offer again! This n8n workflow automates daily job scraping from LinkedIn, Indeed, Welcome to the Jungle, and more, using Google Dorks and SerpAPI. It filters offers with a Gemini AI agent, stores them in Google Sheets, and sends a sleek HTML newsletter to your inbox or subscribers—all manageable from your phone!

**💼 Use Cases**:

- Students hunting for M&A, valuation, or transaction services internships (6+ months).
- Career switchers seeking automated, curated job alerts.
- Content creators building a job newsletter to monetize their audience.

**⚙️ How It Works**:

1. **Scrape**: Uses SerpAPI with a tailored Google Dork to fetch fresh job listings daily from top platforms.
2. **Filter**: A Gemini AI agent validates offers to ensure they match corporate finance criteria.
3. **Store**: Saves new offers in Google Sheets, marking duplicates to avoid spam.
4. **Notify**: Generates an email/newsletter notification and sends it via Outlook

**🛠️ Setup Instructions**:

- Import the JSON workflow into n8n.
- Add credentials: SerpAPI (API key), Google Sheets (OAuth2), Microsoft Outlook (OAuth2)
- Customize the Google Dork in the "Edit Fields" node for specific job criteria.
- Schedule to run daily at 7 AM. Test and tweak the AI prompt for precision.

**🔑 Required Credentials & Nodes**:

- **Credentials**: SerpAPI, Google Sheets OAuth2, Microsoft Outlook OAuth2
- **Nodes**: Schedule Trigger, HTTP Request, Google Sheets, AI Agent (Gemini), Microsoft Outlook

🔗 **Creator**: Louis Delahaye | [n8n.io/creators/louisdl](https://n8n.io/creators/louisdl/)

🎥 YouTube	[@cash-routine](https://www.youtube.com/@cash-routine)

My AI Agency : https://agence-alain.fr

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Microsoft Outlook, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
