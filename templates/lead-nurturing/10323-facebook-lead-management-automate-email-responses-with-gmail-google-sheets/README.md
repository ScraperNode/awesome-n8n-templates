# 💬 Facebook lead management: Automate email responses with Gmail & Google Sheets

> ⚡ **428 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for?
This n8n workflow is designed for marketers, sales teams, and business owners who use Facebook Lead Ads to capture customer information. It's perfect for those who want to immediately engage with leads through multiple channels without manual intervention. The workflow automatically processes new leads from Facebook Lead Ads, sends personalized emails. Designed for businesses that want to improve lead response time and conversion rates through automated multi-channel communication.

## What this Workflow Does
This n8n workflow automatically captures leads from Facebook Lead Ads, formats the data, saves it to Google Sheets, sends personalized emails to each and updates the status of each communication in Google Sheets. It can be triggered automatically when new leads are submitted or manually for testing purposes.

## Key Features
- **Facebook Lead Ads Integration**: Automatically captures new leads in real-time
- **Google Sheets Synchronization**: Saves and updates lead information in a structured format
- **Multi-Channel Communication**: Sends both email messages
- **Status Tracking**: Updates communication status in Google Sheets
- **Flexible Triggers**: Can be triggered by new leads or manually executed
- **Data Formatting**: Cleans and formats phone numbers for validation
- **Conditional Processing**: Only processes leads with specific status values

## Requirements
- Facebook Lead Ads account with webhook access
- Google Sheets account with OAuth2 access
- Gmail account for sending emails

## Workflow Components
### 1. Trigger Section
- **Facebook Lead Ads**: Automatically triggers when new leads are submitted
- **Executed by Another Workflow**: Allows this workflow to be called from another workflow
- **Click to Start**: Manual trigger for testing purposes

### 2. Data Processing Section
- **Format Ads Lead Response Data**: Extracts and formats lead details
- **Save Ads Lead In Sheet**: Inserts or updates lead information in Google Sheets

### 3. Email Communication Section
- **Send a Email**: Sends personalized emails to leads
- **Save State of Rows in Email Sent**: Updates email status in Google Sheets


### 5. Flow Control
- **Get Row in Sheet**: Fetches rows with specific status values
- **Loop Over Items**: Processes each lead individually
- **Wait**: Adds delays between requests to prevent rate limits

## Google Sheet Column Structure
**A Google Sheet formatted like this** ➤ [sample](https://docs.google.com/spreadsheets/d/1kBBhb53YiofJHDKVOVczamO5c90YpBPy2-P90ivvAEc/edit?gid=0#gid=0)


## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Google Sheets, Gmail, Execute Workflow Trigger, Facebook Lead Ads Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
