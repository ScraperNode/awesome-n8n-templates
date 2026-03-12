# 🎣 Scrape Apollo leads with BrowserAct, draft Gemini emails, and save to Sheets

> ⚡ **90 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This workflow creates a fully automated B2B lead generation & outreach pipeline. It combines **BrowserAct** (for scraping) with **Google Gemini AI** (for writing) to automate the entire prospecting process.

It takes a search request via a Form, scrapes verified leads from Apollo.io, uses AI to write a personalized cold email for EACH lead, saves everything to Google Sheets, and notifies you via Gmail when the batch is done.

## How it works
* **Form Trigger:** You input the Target Role (e.g., "Engineer") and Location (e.g., "New York").
* **BrowserAct Automation:** Triggers a remote browser to search Apollo.io and extract contact details (Name, Job, Company, Email).
* **AI Email Drafter:** **Google Gemini** reads the lead's info and automatically generates a personalized cold email draft tailored to their role and company.
* **Data Merging:** Seamlessly combines the scraped contact info with the AI-generated email content.
* **Google Sheets Storage:** Appends the full profile + the AI email draft into your spreadsheet.
* **Email Notification:** Sends you a summary report via **Gmail** listing who was scraped and confirming the job is finished.

## Set up steps
1.  **BrowserAct Configuration**
    * Double-click the "Run a workflow" node and paste your specific **BrowserAct Workflow ID**.
2.  **Google Sheets Setup**
    * Create a new Google Sheet.
    * **Crucial:** Add these headers in the first row: `id`, `name`, `email`, `job_title`, `profile_url`, `company`, `location`, `email_draft`.
    * Update the "Save to Google Sheets" node to select this file.
3.  **Credentials**
    * **BrowserAct Account**
    * **Google Gemini (PaLM) API** (for AI generation)
    * **Google Sheets** (Service Account or OAuth2)
    * **Gmail** (OAuth2 - for notifications)

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
