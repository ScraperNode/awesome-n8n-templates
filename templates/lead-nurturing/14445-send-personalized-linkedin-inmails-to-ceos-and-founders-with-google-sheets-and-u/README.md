# 💬 Send personalized LinkedIn InMails to CEOs and founders with Google Sheets and Unipile

> ⚡ **109 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Send personalized LinkedIn InMails automatically to CEOs and founders using n8n, Google Sheets, and Unipile — with built-in duplicate prevention, credit tracking, and full conversation ID logging.
**
---

Scale your LinkedIn outreach without manually writing or sending a single InMail. This workflow reads your leads from a Google Sheet, filters out already-messaged prospects, and sends each one a fully personalized InMail — with their first name and company name injected automatically — on a schedule, hands-free.

Built for founders, sales professionals, and automation builders who want consistent, professional LinkedIn outreach without the repetitive manual effort. Every sent InMail is tracked back to your sheet with its unique conversation ID, making follow-up sequences easy to build on top.

## Good to know

- This workflow sends InMails via **LinkedIn Sales Navigator** or **LinkedIn Recruiter Classic** — you must have one of these plans active on your LinkedIn account
- InMail credits are consumed from your **LinkedIn plan's monthly allowance** — they are not charged separately by Unipile
- Monthly InMail credit allowances by plan:
  - Sales Navigator Core: 50 credits/month
  - Sales Navigator Advanced: 50 credits/month
  - Recruiter Classic: 100 credits/month
- Unipile pricing is based on the number of connected accounts — the base plan starts at €49/$55 per month for up to 10 accounts. A 7-day free trial is available with no credit card required
- Already-messaged leads are automatically skipped on every future run — no duplicate InMails
- The `chat_id` returned after each sent InMail is saved to your sheet and can be used to build follow-up message sequences

---

## How it works

- Schedule Trigger runs the workflow automatically at your chosen frequency
- All leads are fetched from your Google Sheet and filtered to only those where the `inmail` column does not equal `Sent`
- A configurable Limit node caps how many InMails go out per run to protect your monthly credit allowance
- A Code node extracts the LinkedIn username from each profile URL
- All required data — first name, company name, username, and Unipile credentials — is bundled in the Data Arrangement node
- The Loop node processes leads one by one, sending each through the full InMail flow individually
- Unipile API resolves the LinkedIn username to an internal Provider ID required for sending InMails
- The InMail is sent via Unipile's `/api/v1/chats` endpoint using the `sales_navigator` API parameter, with the subject line and message body personalized automatically with the lead's first name and company name
- The sheet is immediately updated with `Sent` status and the unique `chat_id` of the opened conversation
- A Wait node pauses between each InMail to mimic human behavior and avoid LinkedIn restrictions
- The loop continues until all leads in the current batch are processed

---

## Set up steps

### Step 1: Prepare Your Google Sheet
Create a sheet with these exact columns:

`first_name` | `last_name` | `linkedin_url` | `company_name` | `inmail` | `chat_ID` | `row_number`

- Leave `inmail` and `chat_ID` empty — the workflow fills these automatically after each InMail is sent
- Make sure `company_name` is filled for every lead — it is used in both the subject line and the message body

### Step 2: Get Your Unipile Credentials
- Sign up at [unipile.com](https://unipile.com) — a 7-day free trial is available with no credit card required
- Connect your **LinkedIn Sales Navigator** or **LinkedIn Recruiter Classic** account from the Unipile dashboard
- Copy your **API Key**, **DSN**, and **LinkedIn Account ID**
- Open the **Data Arrangement** node and replace the three placeholder values with your credentials

### Step 3: Set Your LinkedIn Plan in the Send InMail Node
- Open the **Send InMail** node
- The `api` field is set to `sales_navigator` by default
- If you are using **LinkedIn Recruiter Classic**, change the `api` value to `recruiter`
- Do not change this field if you are on any Sales Navigator plan

### Step 4: Connect Google Sheets
- In n8n, go to **Credentials → New Credential → Google Sheets OAuth2**
- Authenticate with the Google account that owns your leads sheet
- Update the **Get Leads** and **Update Data** nodes to point to your sheet

### Step 5: Set Your Safety Limits
- Open the **Limit Connection Request** node — set max items per run (recommended: 10–15)
- Open the **Wait** node — set your delay between each InMail (recommended: 3–5 minutes)
- Open the **Schedule Trigger** — set your run frequency (recommended: every 4–8 hours)

---

## Requirements

- LinkedIn **Sales Navigator** (Core, Advanced, or Advanced Plus) **or** LinkedIn **Recruiter Classic** — required to send InMails via the API
- Unipile account with your LinkedIn account connected — starts at €49/$55/month for up to 10 accounts, 7-day free trial available
- Google Sheet with lead data in the required column format
- n8n instance (cloud or self-hosted)

---

## Customising this workflow

- Build a follow-up message workflow using the stored `chat_id` to send a reply into the same conversation thread if there is no response after a set number of days
- Add an AI node to auto-generate unique personalized InMail messages per lead based on their job title, industry, or company size
- Replace the Schedule Trigger with a webhook to fire outreach instantly when a new lead is added to your CRM
- Add a Slack or email notification node to receive a daily summary of InMails sent
- Add error handling nodes to catch failed API calls and flag those leads in a separate sheet tab for manual review
- Combine this workflow with the LinkedIn Connection Request workflow to build a full outreach sequence — connection request first, InMail after acceptance

---

*For assistance and support: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
