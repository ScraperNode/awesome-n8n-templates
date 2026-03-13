# 🎣 Extract Google My Business leads by service or location with Bright Data

> ⚡ **1,327 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## 📍 Extract Google My Business Leads by Service & Location with Bright Data to Google Sheets![image.png](fileId:1508)
This template requires a self-hosted n8n instance to run.

A comprehensive n8n automation that extracts Google My Business listings by service type and geographic location using Bright Data's Google Maps dataset, with intelligent city expansion and automatic duplicate removal.

---

## 👥 Who is this for?
* Lead generation professionals
* Sales teams
* Marketing agencies
* Business development representatives
* Entrepreneurs conducting outreach or market research

---

## ❓ What problem is this solving?
Manual lead generation from Google Maps is time-consuming and inefficient. This workflow automates the process of finding businesses by service type and location, expanding searches across cities, removing duplicates, and organizing results in a structured format.

---

## ⚙️ What this workflow does

### Input Processing
* Accepts service type, state, and country via web form
* Uses Claude AI to generate city lists
* Auto-categorizes services
* Creates search queries per city

### Data Collection
* Uses Bright Data's Google Maps dataset
* Processes in batches with rate limits
* Monitors scraping with retry logic
* Formats and handles API responses

### Quality Control
* Removes duplicates by name and phone
* Maintains clean data in Google Sheets
* Ensures structured, usable datasets

### 📄 Output Data Points

| Field           | Description                 | Example                       |
| :-------------- | :-------------------------- | :---------------------------- |
| Business Name   | Company or business name    | TechFix Computer Repair       |
| Category        | Business category type      | Electronics                   |
| Country         | Country location            | US                            |
| City            | Specific city searched      | Austin                        |
| Phone Number    | Contact phone number        | +1 (555) 123-4567             |
| Website URL     | Business website            | https://techfix.com           |
| Google Maps URL | Direct Maps link            | https://maps.google.com/... |
| Address         | Full business address       | 123 Main St, Austin, TX       |
| Operating Hours | Business hours              | Mon-Fri 9AM-6PM               |
| Google Rating   | Star rating                 | 4.5                           |
| Total Reviews   | Number of reviews           | 127                           |
| Reviews URL     | Link to reviews             | https://maps.google.com/reviews... |

---

## 🚀 Setup Instructions

### Prerequisites
* n8n instance (self-hosted or cloud)
* Google account with Sheets access
* Bright Data account with Google Maps dataset access
* Anthropic API key for Claude AI

### Step-by-Step
1. Import the workflow JSON into n8n
2. Configure Bright Data credentials and dataset access
3. Set up Google Sheets and OAuth2 credentials
4. Configure Claude AI with your API key
5. Replace all placeholder credential IDs and tokens. For improved security, use credentials instead of hardcoding the API token placeholder in the HTTP Request node.
6. Test with sample data (e.g., "Coffee Shop" in California, US)
7. Activate the workflow and use the form for submissions

---

## 🛠 How to Customize

### Modify Geographic Scope
* Add countries to the form dropdown
* Customize Claude prompts for city generation
* Adjust search logic for international markets

### Enhance Data Collection
* Add more fields from Bright Data
* Include revenue, employee count, social profiles

### Improve Duplicate Detection
* Use fuzzy matching for similar names
* Include address-based checks

### Customize Output Format
* Transform data for CRM compatibility
* Export to CSV, database, or multiple destinations

### Implement Advanced Features
* Integrate email finder services
* Include lead scoring logic
* Discover social media profiles

### Batch Processing Optimization
* Adjust batch sizes per Bright Data limits
* Use parallel processing and retry logic

### Integration Options
* Connect to CRMs like HubSpot or Salesforce
* Trigger email automation
* Integrate with marketing platforms

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
