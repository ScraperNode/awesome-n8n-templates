# 💬 Automate lead enrichment & personalized outreach with HubSpot, Phantombuster & GPT

> ⚡ **651 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### How it works
This workflow enriches and personalizes your lead profiles by integrating HubSpot contact data, scraping social media information, and using AI to generate tailored outreach emails. It streamlines the process from contact capture to sending a personalized email — all automatically.

The system fetches new or updated HubSpot contacts, verifies and enriches their Twitter/LinkedIn data via Phantombuster, merges the profile and engagement insights, and finally generates a customized email ready for outreach.

### Step-by-step
**1. Trigger & Input**
- HubSpot Contact Webhook: Fires when a contact is created or updated in HubSpot.

- Fetch Contact: Pulls the full contact details (email, name, company, and social profiles).

- Update Google Sheet: Logs Twitter/LinkedIn usernames and marks their tracking status.

**2. Validation**
- Validate Twitter/LinkedIn Exists: Checks if the contact has a valid social profile before proceeding to scraping.

**3. Social Media Scraping (via Phantombuster)**
- Launch Profile Scraper & 🎯 Launch Tweet Scraper: Triggers Phantombuster agents to fetch profile details and recent tweets.

- Wait Nodes: Ensures scraping completes (30–60 seconds).

- Fetch Profile/Tweet Results: Retrieves output files from Phantombuster.

- Extract URL: Parses the job output to extract the downloadable .json or .csv data file link.

**4. Data Download & Parsing**
- Download Profile/Tweet Data: Downloads scraped JSON files.

- Parse JSON: Converts the raw file into structured data for processing.

**5. Data Structuring & Merging**
- Format Profile Fields: Maps stats like bio, followers, verified status, likes, etc.

- Format Tweet Fields: Captures tweet data and associates it with the lead’s email.

- Merge Data Streams: Combines tweet and profile datasets.

- Combine All Data: Produces a single, clean object containing all relevant lead details.

**6. AI Email Generation & Delivery**
- Generate Personalized Email: Feeds the merged data into OpenAI GPT (via LangChain) to craft a custom HTML email using your brand details.

- Parse Email Content: Cleans AI output into structured subject and body fields.

- Sends Email: Automatically delivers the personalized email to the lead via Gmail.

### Benefits
- Automated Lead Enrichment — Combines CRM and real-time social media data with zero manual research.

- Personalized Outreach at Scale — AI crafts unique, relevant emails for each contact.

- Improved Engagement Rates — Targeted messages based on actual social activity and profile details.

- Seamless Integration — Works directly with HubSpot, Google Sheets, Gmail, and Phantombuster.

- Time & Effort Savings — Replaces hours of manual lookup and email drafting with an end-to-end automated flow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, HubSpot, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
