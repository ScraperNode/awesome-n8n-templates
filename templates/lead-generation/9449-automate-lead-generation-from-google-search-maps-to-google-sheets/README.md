# 🎣 Automate lead generation from Google Search & Maps to Google Sheets

> ⚡ **1,312 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate on-demand lead generation. 

It acts as a powerful scraping agent that takes a simple chat query, scours both Google Search and Google Maps for relevant businesses, scrapes their websites for contact details, and compiles an enriched lead list directly in Google Sheets.

## Who's this workflow for?
- Sales Development Representatives (SDRs)
- Local Marketing Agencies
- Business Development Teams
- Freelancers & Consultants
- Market Researchers

## How it works
**1. Start with a Chat Query:** The user initiates the workflow by typing a search query (e.g., "dentists in New York") into a chat interface.

**2. Multi-Source Search:** The workflow queries both the Google Custom Search API (for web results across multiple pages) and scrapes Google Maps (for local businesses) to gather a broad list of potential leads.

**3. Deep Dive Website Scraping:** For each unique business website found, the workflow visits the URL to scrape the raw HTML content of the page.

**4. Intelligent Contact Extraction:** Using custom code, it then parses the scraped website content to find and extract valuable contact information like email addresses, phone numbers, and social media links.

**5. Deduplicate and Log to Sheets:** Before saving, the workflow checks your Google Sheet to ensure the lead doesn't already exist. All unique, newly enriched leads are then appended as clean rows to your sheet, along with the original search query for tracking.

## Key Requirements to Use This Template
**1. n8n Instance & Required Nodes:**
- An active n8n account (Cloud or self-hosted).
- This workflow uses the official n8n LangChain integration (@n8n/n8n-nodes-langchain) for the chat trigger. If you are using a self-hosted version of n8n, please ensure this package is installed.

**2. Google Custom Search API:**
- A Google Cloud Project with the "Custom Search API" enabled.
- You will need an API Key for this service.
- You must also create a Programmable Search Engine and get its Search engine ID (cx). This tells Google what to search (e.g., the whole web).

**3. Google Sheets Account:**
- A Google account and a pre-made Google Sheet with columns for Business Name, Primary Email, Contact Number, URL, Description, Socials, and Search Query.

## Setup Instructions
**1. Configure the Chat Trigger:**
- In the "When chat message received" node, you can find the Direct URL or Embed code to use the chat interface.

**Set Up Google Custom Search API (Crucial Step):**
- Go to the "Custom Google Search API" (HTTP Request) node.
- Under "Query Parameters", you must replace the placeholder values for key (with your API Key) and cx (with your Search Engine ID).

**3. Configure Google Sheets:**
- In all Google Sheets nodes (Append row in sheet, Get row(s) in sheet, etc.), connect your Google Sheets credentials.
- Select your target spreadsheet (Document ID) and the specific sheet (Sheet Name) where you want to store the leads.

**4. Activate the Workflow:**
- Save the workflow and toggle the "Active" switch to ON.
- Open the chat URL and enter a search query to start generating leads.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn:
- https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Workflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
