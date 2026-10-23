# 🔬 Create Google Calendar events from labeled Gmail confirmations with easybits Extractor

> ⚡ **56 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors labeled Gmail messages, uses easybits Extractor to pull event details from the email body and any PDF/image attachments, and either creates a Google Calendar event or labels the email for review and sends you a notification.

## How it works
1. Polls Gmail every minute for new emails that have the specified “Events” label and downloads any attachments.
2. Renders the email subject, sender, date, and body into a minimal PDF and sends it to easybits Extractor to extract structured event fields.
3. Splits PDF/image attachments into separate items and sends each one to easybits Extractor to extract the same event fields.
4. Merges the extracted results, prioritizing attachment data over email-body data and filling missing fields from the body when needed.
5. Validates that required fields (at least `start_datetime` and `event_type`) are present.
6. If valid, creates a Google Calendar event with the extracted title, start/end time, location, and a formatted description, then removes the “Events” label from the email.
7. If invalid, adds a “Needs-Review” label, removes the “Events” label, and sends you an HTML email listing missing fields and what was extracted.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail Trigger and Gmail actions, and update the Events label ID, Needs-Review label ID, and review recipient email address.
2. Install and configure the easybits Extractor community node (`@easybits/n8n-nodes-extractor`) and add your easybits Extractor API key and Pipeline ID to both Extractor steps.
3. Connect Google Calendar OAuth2 credentials and replace the target calendar ID with your calendar (or create a dedicated “Auto-imported” calendar and select it).
4. Create the Gmail labels used by the workflow (for example, `Events` and `Events/Needs-Review`) and apply the Events label to test emails you want turned into calendar events.

## 🔗 Nodes Used

Google Calendar, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
