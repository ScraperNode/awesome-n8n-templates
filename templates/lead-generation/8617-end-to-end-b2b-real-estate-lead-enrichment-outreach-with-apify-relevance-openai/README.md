# 🎣 End-to-end B2B real estate lead enrichment & outreach with Apify, Relevance, OpenAI & Sheets

> ⚡ **205 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This advanced n8n workflow automates the full lead enrichment, qualification, and personalized outreach process tailored specifically for the B2B real estate sector. Integrating top platforms like Apify, Relevance, OpenAI, and Google Sheets, it empowers sales and marketing teams to streamline prospect data enrichment, lead scoring, and engagement without manual data handling.

***Features:***
- Form-Driven Lead Capture: Automated intake via Fillout form submissions capturing comprehensive lead and project details.

- Email Verification:Ensures email validity with Apify, allowing outreach only to verified contacts.

- Company & Profile Enrichment:Deep crawls of company websites paired with detailed LinkedIn profile scraping using Relevance.

- Project Documentation Processing:Downloads and extracts text from submitted PDF project briefs or investor decks, enhancing semantic search capabilities.

- Unified Lead Profiles: Merges all data sources—email validation, website content, LinkedIn insights, and project documents—to build enriched, actionable lead records.

- AI-Driven Summaries & Scoring: Uses OpenAI to generate readable profile/company/project summaries and assigns lead quality scores to prioritize efforts.

- Instant Hot Lead Alerts: Routes urgent prospects to Slack channels for rapid internal response.

- Personalized Outreach Automation: Creates unique icebreaker messages based on AI insights and automates email sending via Gmail.

- Robust Data & Report Management: Maintains lead data and automated PDF summaries in fresh copies of Google Sheets for organized tracking and collaboration.

- Manual Controls & Semantic Indexing: Supports manual workflow triggers and inserts project document embeddings into Pinecone vector stores for enhanced document intelligence.

***Who’s This For***
- Commercial Real Estate Brokers & Agents: Automate lead qualification, enrich prospect data, and accelerate personalized outreach to close deals faster.
 
- Real Estate Investors & Developer Teams: Efficiently gather and analyze investment project data, verify contacts, and monitor promising leads with AI-enhanced scoring and notifications.

- B2B Real Estate Marketing & Sales Teams: Streamline lead intake from web forms and optimize campaign engagement with AI-driven profiling and tailored messaging.
 
- Property Management Firms: Centralize client and project data enrichment, validation, outreach, and reporting in an automated, scalable workflow.

- Business Development Managers in Real Estate Sector: Gain actionable insights from multiple data sources (LinkedIn, websites, project decks) to prioritize outreach and close high-value clients.

- Anyone looking for scalable, AI-powered B2B lead enrichment and outreach automation in the real estate industry.

**Setup Instructions**
Ensure you have an n8n instance and API/OAuth credentials for Apify, Relevance, OpenAI, Google Sheets, Gmail, and Slack. Import the workflow JSON into n8n, then configure all credentials in the Credentials manager. Link the Fillout trigger node to your form webhook. Prepare a Google Sheets master template; the workflow copies it fresh each run for clean data. Add your OpenAI and Slack API keys, configure Gmail OAuth for email sending, then test end-to-end before activating.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Drive, Gmail, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
