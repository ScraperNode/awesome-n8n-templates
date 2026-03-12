# 💬 Cold outreach automation: Scrape local leads with Dumpling AI & call via Vapi

> ⚡ **8,688 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

### Who is this for?

This template is for sales teams, agencies, or local service providers who want to quickly generate cold outreach lists and automatically call local businesses with a Vapi AI assistant. It’s perfect for automating cold calls from scraped local listings with no manual dialing or research.

---

### What problem is this workflow solving?

Finding leads and initiating outreach calls can be time-consuming. This workflow automates the process: it scrapes business listings from Google Maps using Dumpling AI, extracts phone numbers, filters out incomplete data, formats the numbers, and uses Vapi to make outbound AI-powered calls. Every call is logged in Google Sheets for follow-up and tracking.

---

### What this workflow does

1. Starts manually and pulls search queries (e.g., "plumbers in Austin") from Google Sheets.
2. Sends each query to Dumpling AI’s Google Maps scraping endpoint.
3. Splits the returned business data into individual leads.
4. Extracts key info like business name, website, and phone number.
5. Filters to only keep leads with valid phone numbers.
6. Formats phone numbers for Vapi dialing (adds +1).
7. Calls each business using Vapi AI.
8. Logs each successful call in a Google Sheet.

---

### Setup

1. **Google Sheets Setup**
   - Create a sheet with business search queries in the first column (e.g., `best+restaurants+in+Chicago`)
   - Make sure the tab name is set and authorized in your credentials.
   - Connect your Google Sheets account in the `Get Search Keywords from Google Sheets` node.

2. **Dumpling AI Setup**
   - Go to [dumplingai.com](https://www.dumplingai.com/)   
   - Generate an API Key and connect it as a header token in the `Scrape Google Map Businesses using Dumpling AI` node

3. **Vapi Setup**
   - Sign into [Vapi](https://vapi.ai) and create an assistant
   - Get your `assistantId` and `phoneNumberId`
   - Insert these into the JSON payload of the `Initiate Vapi AI Call to Business` node
   - Add your Vapi API key to the credentials section

4. **Call Logging**
   - Create another tab in your sheet (e.g., “leads”) with these headers:
     - `company name`
     - `phone number`
     - `website`
   - This will be used in the `Log Called Business Info to Sheet` node

---

### How to customize this workflow to your needs

- Modify the business search terms in your Google Sheet to target specific industries or locations.
- Add filters to exclude certain businesses based on ratings, keywords, or location.
- Update your Vapi assistant script to match the type of outreach or pitch you’re using.
- Add additional integrations (e.g., CRM logging, Slack notifications, follow-up emails).
- Change the trigger to run on a schedule or webhook instead of manually.

---

### Nodes and Functions Breakdown

- `Start Workflow Manually`: Initiates the automation manually for testing or controlled runs.
- `Get Search Keywords from Google Sheets`: Reads search phrases from the spreadsheet.
- `Scrape Google Map Businesses using Dumpling AI`: Sends each search query to Dumpling AI and receives matching local business data.
- `Split Each Business Result`: Breaks the returned array of businesses into individual records for processing.
- `Extract Business Name, Phone and website`: Extracts title, phone, and website from each business record.
- `Filter Valid Phone Numbers Only`: Ensures only entries with a phone number move forward.
- `Format Phone Number for Calling`: Adds a +1 country code and strips non-numeric characters.
- `Initiate Vapi AI Call to Business`: Uses the business name and number to initiate a Vapi AI outbound call.
- `Log Called Business Info to Sheet`: Appends business details into a Google Sheet for tracking.

---

### Notes

- You must have valid API keys and authorized connections for Dumpling AI, Google Sheets, and Vapi.
- Make sure to handle API rate limits if you're running the workflow on large datasets.
- This workflow is optimized for US-based leads (+1 country code); adjust the formatting node if calling internationally.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
