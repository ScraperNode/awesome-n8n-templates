# 🎣 Manage B2B referral leads with Gmail, Slack, HubSpot, and Google Sheets

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives B2B referral submissions via a webhook, validates the payload, emails the referrer and referred lead via Gmail, alerts the sales team in Slack, deduplicates and creates records in HubSpot, waits 3 days to send a follow-up if needed, and logs outcomes to Google Sheets.

## How it works
1. Receives a referral submission via a POST webhook and validates that required fields (referrer and lead name/email) are present.
2. Returns an immediate JSON response indicating success or a 400 validation error listing missing fields.
3. Structures the referral data into a consistent format (referrer details, lead details, notes, timestamp, and a generated referral ID).
4. Sends a thank-you email to the referrer via Gmail and posts the referral details to the sales team in Slack.
5. Searches HubSpot for an existing contact and, if none is found, creates a new HubSpot contact and a new deal in the default pipeline.
6. Sends an intro/nurture email to the referred lead via Gmail, waits 3 days, checks Gmail for a reply from the lead, and sends an automated follow-up email if no reply is found.
7. Appends the referral record and follow-up outcome to a Google Sheets “Referrals” worksheet, and posts an alert to a Slack error channel if the final Slack step encounters an issue.

## Setup
1. Configure the source form/website to send a POST request to the workflow webhook URL (path: /referral-submission).
2. Add Gmail credentials for sending the referrer thank-you, lead nurture email, and optional follow-up, and ensure the sending mailbox can search replies.
3. Add Slack OAuth2 credentials and set the target channels in the Slack nodes (sales alerts and the error channel).
4. Add HubSpot credentials and confirm the contact search and deal creation map to your desired properties and pipeline (currently set to the default pipeline).
5. Add Google Sheets credentials and replace the document ID with your spreadsheet ID, ensuring a sheet named “Referrals” exists with matching columns.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, HubSpot, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
