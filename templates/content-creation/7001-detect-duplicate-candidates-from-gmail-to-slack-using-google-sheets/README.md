# 🎬 Detect duplicate candidates from Gmail to Slack using Google Sheets

> ⚡ **321 views** · 🎬 [Content Creation & Video](../)

## Description

## Detect duplicate candidates by email/phone from Gmail to Slack using Google Sheets

This workflow automatically detects duplicate job applicants by checking incoming emails from Gmail against existing records in Google Sheets.
If a candidate's email is already found in the sheet, it sends an alert to Slack; otherwise, it adds the candidate to the sheet.

##  Who’s it for

* HR and recruitment teams processing candidate emails manually
* Startups or SMEs handling job applications via Gmail
* Anyone who wants to automate resume collection and deduplication
* Teams using Slack and Google Workspace

##  How it works

1. **Triggers** every few minutes via the Schedule Trigger node
2. **Fetches** recent emails labeled "applicant" from Gmail
3. **Extracts** candidate details from the email body using regex
4. **Reads** all existing rows from the Google Sheet
5. **Compares** the candidate’s email with existing entries
6. **If duplicate** → Sends a Slack alert
7. **If new** → Appends to the Google Sheet

##  How to set up

1. **Label candidate emails** in Gmail with a label like `applicant`
2. **Connect Gmail, Google Sheets, and Slack** credentials in n8n
3. **Create a Google Sheet** with these columns:

   * `candidate_name`, `candidate_email`, `candidate_phone`, `role_applied`, `years_of_experience`, `recruiter`, `resume_url`, `source_email`
4. Import the workflow JSON
5. Update:
   * Gmail label ID
   * Google Sheet ID
   * Slack channel or user
6. Activate the workflow

##  Requirements

* n8n (self-hosted or cloud)
* Gmail account with access to labeled application emails
* Google Sheet to store candidates
* Slack account with `chat:write` scope
* Basic regex familiarity (optional)

##  How to customize

*  Change comparison logic to include phone numbers.
*  Add fallback logic to check for similar names.
*  Add filters for roles, experience levels.
*  Forward resumes to Drive or Notion.
*  Trigger an approval flow for screened candidates.

##  Add‑ons

* Google Drive: Upload parsed resumes.
* Notion / Airtable: Store structured candidate records.
* Webhooks: Forward to ATS or CRM.
* PDF parsers: Extract data from attachments.

##  Use Case Examples

| Use Case             | Description                                           |
| ------------------- | ----------------------------------------------------- |
| Resume deduplication | Avoid processing the same applicant twice             |
| Auto Slack alert     | Instantly notify recruiter of repeat candidates       |
| Centralized tracking | Keep candidate records in Sheets for filtering/export |
| Passive sourcing     | Run hourly checks on labeled Gmail inboxes            |

---

##  **Common troubleshooting**

| Issue                    | Possible Cause                             | Solution                                                       |
| ------------------------ | ------------------------------------------ | -------------------------------------------------------------- |
| Slack message not sent   | Invalid Slack token / channel not selected | Reauthorize Slack connection and select correct user/channel   |
| Google Sheet not updated | Sheet ID or tab name is incorrect          | Double-check the Sheet URL and worksheet tab                   |
| Email data not extracted | Email body format doesn’t match regex      | Adjust regex in the "Code" node                                |
| Nothing happens          | Gmail label or date filter is too strict   | Ensure emails exist with the right label in the last X minutes |

##  Need Help?

Need help setting it up or tweaking regex for your custom email format? We’re happy to help — just ask!

Want to add phone number duplication checks or auto-resume upload to Google Drive? Our Automation team at WeblineIndia can guide you step-by-step.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
