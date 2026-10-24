# 💬 Send multi-stage customer project emails from Google Sheets with Zoho ZeptoMail

> ⚡ **10 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

Keep your clients informed at every stage of their project without lifting a finger. This workflow runs daily from Google Sheets and automatically sends four timed emails a Day 3 progress update, a Day 5 near-completion nudge, a feedback request on project completion, and a post-delivery upsell all via Zoho ZeptoMail. Each email is logged back to the sheet so no message ever sends twice.

## Who it's for

Service businesses (resume writing, LinkedIn optimization, design, freelance agencies) that manage client orders in a Google Sheet and want structured follow-up without a CRM.

## How it works

1. A Schedule Trigger fires daily at 9 AM and reads all rows from your Google Sheet
2. Blank rows are filtered out; date variables are calculated dynamically
3. Four parallel branches check independently whether each email type is due:
   - **T+3** — progress update sent 3 days after the order date
   - **T+5** — near-completion update sent at day 5 (only after T+3 is confirmed sent)
   - **Feedback** — sent once the project status is marked Completed
   - **Upsell** — sent ~3 days after feedback, offering premium add-ons
4. Each qualifying row is looped one at a time, the email is sent via ZeptoMail, and the sheet is updated to prevent re-sends
5. After the upsell sends, the row status is set to **All Done** — permanently stopping all further checks for that customer

## Setup

1. Connect your **Google Sheets** and **Zoho ZeptoMail** credentials in n8n
2. Replace all `YOUR_RESOURCE_ID_HERE` placeholders in the Google Sheets nodes with your actual spreadsheet and sheet IDs
3. Set your sender address in all four email nodes (`YOUR_EMAIL_HERE`)
4. Update the feedback form link and booking link in the Feedback and Upsell email templates
5. Ensure your sheet has these columns: `Customer Name`, `Email`, `Project Type`, `Date Added`, `Status`, `T3_Email_Sent`, `T5_Email_Sent`, `Feedback_Email_Sent`, `Feedback_Email_Date`, `Upsell_Email_Sent`, `original_subject`

## Requirements

- Self-hosted n8n instance (community node required)
- Community node: `n8n-nodes-zohozeptomail`
- Active Zoho ZeptoMail account with a configured mail agent

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
