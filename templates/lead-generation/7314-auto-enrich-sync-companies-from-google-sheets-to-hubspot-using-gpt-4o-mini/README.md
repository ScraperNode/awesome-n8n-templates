# 🎣 Auto-enrich & sync companies from Google Sheets to HubSpot using GPT-4o-mini

> ⚡ **434 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

### How it works
This workflow starts whenever you add a new company name to a Google Sheet. It checks if the company name is filled in, then uses AI to find more details about the company like industry, size, location, and website. Next, it looks for the company in your HubSpot CRM. If the company is not there, it adds it automatically. Finally, it updates the Google Sheet with all the new company information so you have everything organized in one place.

### Step-by-step
**1. Start with Google Sheets**
- The workflow watches your Google Sheet for new company names.

- It ignores any empty or incomplete entries.

**2. Get Company Details**
- Uses AI (OpenAI GPT-4o-mini) to find more information about the company.

- Formats the AI results so they can be used easily.

**3. Check and Update HubSpot**
- Searches your HubSpot CRM to see if the company already exists.

- If the company is new, it creates a record in HubSpot with the AI details.

**4. Save Everything in Google Sheets**
- Prepares the enriched data for saving.

- Adds or updates the company information in the Google Sheet for easy tracking.

### Why use this?
- Automatically adds useful company info without manual work.

- Keeps your CRM clean by avoiding duplicates.

- Stores all updated company details in one place for easy access.

- Runs smoothly in the background without you needing to do anything after setup.

## 🔗 Nodes Used

Google Sheets, HubSpot, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
