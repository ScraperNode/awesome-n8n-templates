# 💬 Send personalized LinkedIn connection requests with Google Sheets and Unipile

> ⚡ **186 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Send personalized LinkedIn connection requests automatically using n8n, Google Sheets, and Unipile — with built-in safety limits, duplicate prevention, and full invitation tracking.

---

Scale your LinkedIn outreach without manually sending a single connection request. This workflow reads your leads from a Google Sheet, filters out already-contacted prospects, and sends each one a personalized connection note via LinkedIn — automatically, on a schedule, and safely within LinkedIn's limits.

Built for founders, sales teams, and recruiters who want consistent LinkedIn outreach without repetitive manual work. Every request is tracked back to your sheet with its invitation ID and status, making follow-up workflows easy to build on top.

## Good to know

- Unipile pricing is based on the number of connected accounts, not per API call or per message sent. The base plan starts at €49/$55 per month and includes up to 10 linked accounts
- For this workflow, connecting one LinkedIn account counts as one account
- Unipile does not enforce usage limits — you can send as many requests as you need. However, LinkedIn itself applies its own rate limits and usage policies
- A 7-day free trial is available with all features included and no credit card required
- LinkedIn has daily connection request limits — keep your total across all runs under 20 per day to avoid account restrictions
- Already-contacted leads are automatically skipped on every future run — no risk of sending duplicate requests

---

## How it works

- Schedule Trigger runs the workflow automatically at your chosen frequency
- All leads are fetched from your Google Sheet and filtered to only those with an empty `connection_request_status` column
- A configurable Limit node caps how many requests go out per run to stay within LinkedIn's safe limits
- A Code node extracts the LinkedIn username from each profile URL
- All required data — username, connection note, and Unipile credentials — is bundled in the Data Arrangement node
- The Loop node processes leads one by one, sending each through the full request flow individually
- Unipile API resolves the LinkedIn username to an internal Provider ID required for sending invites
- The connection request is sent with the personalized note pulled directly from your Google Sheet
- The sheet is immediately updated with the invitation status and unique invitation ID
- A Wait node pauses between each request to mimic human behavior and avoid LinkedIn restrictions
- The loop continues until all leads in the current batch are processed

---

## Set up steps

### Step 1: Prepare Your Google Sheet
Create a sheet with these exact columns:

`first_name` | `last_name` | `linkedin_url` | `connection_note` | `connection_request_status` | `invitation_id` | `row_number`

- Leave `connection_request_status` and `invitation_id` empty — the workflow fills these automatically
- Write a personalized message per lead in the `connection_note` column

### Step 2: Get Your Unipile Credentials
- Sign up at [unipile.com](https://unipile.com) — a 7-day free trial is available with no credit card required
- Connect your LinkedIn account from the Unipile dashboard
- Copy your **API Key**, **DSN**, and **LinkedIn Account ID**
- Open the **Data Arrangement** node and replace the three placeholder values with your credentials

### Step 3: Connect Google Sheets
- In n8n, go to **Credentials → New Credential → Google Sheets OAuth2**
- Authenticate with the Google account that owns your leads sheet
- Update the **Get Leads** and **Update Connection Request Status and ID** nodes to point to your sheet

### Step 4: Set Your Safety Limits
- Open the **Limit Connection Request** node — set max items per run (recommended: 10–15)
- Open the **Wait** node — set your delay between requests (recommended: 3–5 minutes)
- Open the **Schedule Trigger** — set your run frequency (recommended: every 4–8 hours)

---

## Requirements

- Unipile account with LinkedIn connected — starts at €49/$55/month for up to 10 accounts, 7-day free trial available
- Google Sheet with lead data in the required column format
- n8n instance (cloud or self-hosted)

---

## Customising this workflow

- Build a follow-up message workflow triggered when a connection is accepted, using the stored `invitation_id`
- Replace the Schedule Trigger with a webhook to fire outreach from your CRM when a new lead is added
- Add an AI node to auto-generate personalized connection notes from each lead's job title or company name
- Add Slack or email notifications for a daily outreach summary
- Add error handling nodes to catch failed API calls and log them in a separate sheet tab
- Filter leads by industry, title, or location by adding extra conditions to the Filter node

---

*For assistance and support: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
