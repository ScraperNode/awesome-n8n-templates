# 🔧 Accounting Deadline Alerts Automations

> ⚡ **77 views** · 🔧 [Miscellaneous](../)

## Description

## 🎯 Accounting Alerts Automation

**Purpose:** Automatically track Companies House filing deadlines for UK accounting firms and prevent costly penalties (£150-£1,500 per missed deadline).

**How it works:**
- Daily automated checks pull live deadline data from Companies House API
- Color-coded email alerts (Red/Orange/Yellow/Green) prioritize urgent deadlines
- Interactive "Yes/No" buttons let recipients confirm completion status
- All data syncs back to Google Sheets for complete audit trail

**Value:** Saves 2-3 hours/week per firm while eliminating manual tracking errors.

## ⚙️ Daily Deadline Check & Alert System

**Runs:** Every weekday at 5 PM (Mon-Fri)

**What happens:**
1. **Read Company Database** - Fetches all tracked companies from Google Sheets
2. **Get Company Data** - Pulls live filing deadlines from Companies House API for each company
3. **Update Due Dates** - Syncs latest deadline data back to the tracking sheet
4. **Build Interactive Email** - Creates HTML email with:
   - Color-coded urgency indicators (days remaining)
   - Sortable table by due date
   - Clickable Yes/No confirmation buttons for each company
5. **Send via Gmail** - Delivers consolidated report to accounting team

**Why automated:** Manual deadline checking across 10-50+ companies is time-consuming and error-prone. This ensures nothing falls through the cracks.


## ✅ Email Response Handler (Webhook Flow)

**Triggered when:** Recipient clicks "Yes" or "No" button in the alert email

**What happens:**
1. **Webhook** - Receives confirmation status (company_number, company_name, yes/no)
2. **Process Data** - Extracts response details from the webhook payload
3. **Update Sheet** - Records confirmation status in Google Sheets with timestamp
4. **Confirmation Page** - Displays success message to user

**Why this matters:** Provides instant feedback to the user and creates an audit trail of who confirmed what and when. No separate tracking system needed—everything updates automatically in the same spreadsheet.

**Result:** Accountability without administrative burden.

## 📋 Setup Requirements

**Google Sheets Database Structure:**
Create a sheet with these columns:
- company_number (manually entered)
- company_name (manually entered)  
- accounts_due (auto-updated)
- confirmation_due (auto-updated)
- confirmation_submitted (updated via email clicks)
- last_updated (auto-timestamp)

**Required Credentials:**
- Google Sheets OAuth (for reading/writing data)
- Companies House API key (free from api.company-information.service.gov.uk)
- Gmail OAuth (for sending alerts)

**Webhook Configuration:**
Update webhook URL in "Build Interactive Email" node to match your n8n instance.

**Time to Setup:** ~15 minutes once credentials are configured.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
