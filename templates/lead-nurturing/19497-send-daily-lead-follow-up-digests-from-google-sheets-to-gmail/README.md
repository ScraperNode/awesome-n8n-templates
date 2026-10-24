# 💬 Send daily lead follow-up digests from Google Sheets to Gmail

> ⚡ **19 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
Get a daily Gmail digest of leads that need follow-up from your Google Sheets tracker. See overdue leads, today’s actions, and incomplete records in one place, with preview controls and reminders sent to one configured owner.



## How it works
1. A daily Schedule Trigger runs at 09:00 in the workflow timezone. A Manual Preview trigger lets you inspect the output before enabling email delivery.
2. Edit Fields collects your spreadsheet ID, tab name, owner email, and delivery options. The next node validates these settings.
3. Google Sheets reads the lead tracker, including lead ID, name, status, follow-up date, and next action.
4. The workflow groups open leads into overdue, due today, and needs attention. Valid future leads and closed leads are counted but excluded from the action list.
5. Identical duplicate records are ignored with a warning. Conflicting lead IDs stop processing so you can correct the source data.
6. The delivery gate checks the sending controls, actionable records, and best-effort daily delivery history. Preview and skipped results remain available in the execution output.
7. Gmail sends one HTML digest to the configured owner. The final node records Gmail’s returned message ID. You contact customers manually and update their next actions in the sheet.

## Setup
1. Import the workflow JSON into n8n. Create a Google Sheets tab named Leads with these exact headers: lead_id, name, status, follow_up_date, and next_action. Display dates as YYYY-MM-DD.
2. Connect Google Sheets credentials in Read lead tracker and Gmail credentials in Email owner digest. In Edit settings, enter your spreadsheet ID, tab name, and your own email address for testing.
3. Keep sendEmails=false and allowManualSend=false. Run the full workflow manually and inspect Build follow-up digest. For one deliberate email test, clear previewDate and set both sending switches to true. After the test, restore allowManualSend=false.
4. Confirm the workflow timezone, leave previewDate blank, keep sendEmails=true, and publish or activate the workflow. Observe the first scheduled execution before relying on the daily reminder.

## Requirements
- An n8n instance supporting the included built-in nodes.
- A Google spreadsheet and a Gmail or Google Workspace mailbox.
- Google Sheets and Gmail credentials configured in n8n.
- One current row per lead and one owner inbox for reminders.
- No AI subscription is required. Hosting costs and Google account limits still apply.

## Customization
- Change the daily schedule and workflow timezone.
- Set maxItemsPerSection from 1 to 20; complete counts remain visible.
- Enable sendEmptyDigest if you want an email when no actions are due.
- Update next_action and follow_up_date after contacting each lead.

## Additional info
The template is free and starts inactive with email sending disabled. Daily duplicate suppression is best effort; keep one active copy and check Sent mail before retrying uncertain deliveries. Local logic checks passed, but live n8n import, Google connections, scheduled delivery, and state persistence still require testing.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
