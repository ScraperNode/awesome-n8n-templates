# 🎣 Verify WhatsApp numbers in bulk using Google Sheets & WasenderAPI

> ⚡ **149 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Bulk WhatsApp Number Verification via Unofficial API

### Who’s it for

This workflow is perfect for marketers, CRM managers, support teams, and data verification agents who need to bulk-check WhatsApp number validity without using the official WhatsApp Business API. It is ideal for teams seeking an affordable and scalable way to clean or validate phone number lists from Google Sheets.

### Overview

This n8n workflow verifies unlimited WhatsApp numbers from a Google Sheet using your own WhatsApp number through the WasenderAPI.com platform.

---

### How it works / What it does

- Fetches real-time data from Google Sheets  
- Verifies if a number is registered on WhatsApp  
- Implements delay and batch processing to maintain rate limits  
- Updates verification status back to the Google Sheet  

---

### Requirements

Before setting up the workflow, ensure you have:

- An active WhatsApp Account (Personal or Business)  
- Google Sheets API configured within your n8n instance  
- A properly structured Google Sheet, like a sample sheet(Included with the workflow template)
- A WasenderAPI.com subscription (starting from ~$6/month)  

---

### Google Sheet Format

Use this [sample sheet](https://docs.google.com/spreadsheets/d/1iF2bDuwCp5NoauMXSCH_0NAB6nrK55lf8tJwhZdzT5g/edit?usp=sharing) as your base.

| WhatsApp No   | Verified/Unverified | Status     |
|---------------|---------------------|------------|
| +8801XXXXXXX  | *(empty)*           | *(empty)*  |

&gt; Ensure the `Status` column is initially blank for unverified rows.

---

### How to set up

#### Step 1: Connect to Google Sheets
- Add a Google Sheets node.
- Authenticate with your Google account.
- Select your target document and worksheet.
- Apply a filter to only select rows where `Status` is empty.

#### Step 2: Loop Through Rows with Delay
- Add a SplitInBatches or Code node to process 5 rows at a time.
- Add a Wait node (set to 5 seconds) between each request to respect API limits.

#### Step 3: Verify Number via HTTP Request
- Add an HTTP Request node
- Method: POST
- URL: https://app.wasenderapi.com/api/send-message
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer YOUR_API_KEY
### Workflow Highlights

- Triggers every 5 Minutes
- Reads pending contact from Google Sheets
- Verify WhatsApp number using WasenderAPI or WhatsApp Cloud API
- Updates each row’s `Status` to `Checked`

## Support & Community

Need help setting up or customizing the workflow? Reach out here:

- WhatsApp: [Chat with Support](https://wa.me/8801322827799)  
- Discord: [Join SpaGreen Server](https://discord.gg/SsCChWEP)  
- Facebook Group: [SpaGreen Community](https://www.facebook.com/groups/spagreenbd)  
- Website: [SpaGreen Creative](https://spagreen.net)  
- Envato: [SpaGreen Portfolio](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
