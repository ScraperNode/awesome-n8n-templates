# 💬 Email Verification and Enrichment from Google Sheets with Hunter and Dropcontact

> ⚡ **48 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### Description  
This workflow automatically validates email addresses stored in a Google Sheet using Hunter Email Verifier, enriches the valid ones with Dropcontact, updates the sheet with verification and enrichment results, and sends a Slack summary showing total emails checked, valid emails, and enriched profiles.

It helps teams clean their data, improve outreach accuracy, and eliminate the manual effort of checking and researching email contacts one by one.

### How It Works  
1. The workflow triggers whenever a new row is added or updated in your Google Sheet.  
2. It reads any emails that still need to be processed.  
3. Each email is validated using Hunter Email Verifier, which returns validity and a confidence score.  
4. Emails marked as valid and above the confidence threshold are enriched with Dropcontact to gather additional profile information, including:  
   - Full name  
   - Job title  
   - Company  
   - Domain  
   - Country  
5. Invalid or low-confidence emails are marked as invalid and skipped.  
6. Verification and enrichment results are written back into the corresponding row in your Google Sheet.  
7. A Slack summary message is sent showing:  
   - Total emails processed  
   - Number of valid emails  
   - Number of enriched profiles  

### Credential Requirements  
- **Hunter Email Verifier:** Required for the email validation step.  
- **Dropcontact:** Requires a **business email address** (non-Gmail, non-Outlook, non-Yahoo) to create an account and use their API.  
- **Google Sheets:** Required for reading and updating your contact list.  
- **Slack:** Required to send the summary notification.  

### Why This Is Helpful  
- Automates a repetitive and error-prone workflow.  
- Saves Dropcontact credits by enriching only valid, high-quality emails.  
- Improves data accuracy for outreach, lead generation, and CRM imports.  
- Keeps your Google Sheet updated with clean, structured verification and enrichment results.  
- Sends a summary to Slack so your team gets instant visibility without opening the sheet.  
- Ideal for teams preparing outbound lists, cleaning CRM data, or verifying large batches of emails before campaigns.

### Customization Ideas  
- **Add a second enrichment provider** (such as Clearbit or People Data Labs) to fill in missing fields when Dropcontact does not return enough data.  
- **Send enriched contacts to a CRM**, such as HubSpot, Airtable, Pipedrive, or Notion, instead of keeping everything in Google Sheets.  
- **Create separate Slack channels** for valid vs. invalid contacts to help teams prioritize follow-up.  
- **Add quality tiers** by creating categories such as "High Confidence," "Medium Confidence," and "Low Confidence" based on the verification score.  
- **Auto-tag enriched leads** with fields like industry, employee count, or revenue if you integrate additional enrichment sources.  
- **Trigger this workflow nightly** using a Schedule node if you want to process batches instead of reacting to row updates.  
- **Automatically send outreach emails** to enriched leads using Gmail, Outlook, or Resend, after adding a safety check or approval step.  
- **Export enriched contacts to CSV** or Google Drive for easy sharing with other teams.  
- **Add duplicate detection logic** to avoid enriching the same contact multiple times.  
- **Add a notification for “no enrichments found”** so your team knows when Dropcontact fails to return details.

## 🔗 Nodes Used

Airtable, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
