# 🔬 Draft dental denial appeal packets from Gmail EOBs with OpenAI and Google Drive

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for dental EOB/claim denial emails, uses OpenAI to extract denied procedure line items and draft appeal letters, then saves a combined appeal packet to Google Drive, logs outcomes in n8n Data Tables, updates a practice management system via HTTP, and notifies staff by email.

## How it works
1. Triggers every minute when a Gmail message matching the EOB/denial subject filter arrives.
2. Normalizes the email into consistent fields (patient, payer, claim number, received date, and raw denial text) and sends the text to OpenAI to extract denied CPT/ADA line items, reason codes, denied amounts, and appeal deadlines.
3. Splits the extracted results into one item per denied procedure and applies rules to determine appealability, recommended appeal strategy, required documentation, and deadline urgency.
4. Logs non-appealable denials to an n8n Data Table and emails the billing manager to review/write off as needed.
5. Tags appealable items as priority or standard based on how close the filing deadline is, then uses OpenAI to draft a one-page appeal letter for each denied line.
6. Aggregates all drafted letters into a single appeal packet per claim, saves it as a text file in Google Drive, logs the packet metadata to an n8n Data Table, updates the claim status in the practice management system via HTTP, and emails the front desk for review and submission.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger and both Gmail notification emails, and update the subject search query and recipient addresses for your team.
2. Add an OpenAI API credential for the extraction and drafting models.
3. Connect Google Drive OAuth2 credentials and set the target folder (ID/name) where appeal packets are saved.
4. Create (or rename in the workflow) the n8n Data Tables `dental_appeal_log` and `dental_denial_log` with the columns referenced in the workflow.
5. Replace the practice management system HTTP endpoint URL and configure HTTP header authentication to match your PMS API.

## Requirements
- Active n8n instance (Cloud or Self-Hosted)
- Gmail OAuth2 Credential (for receiving EOBs and sending notifications)
- OpenAI API Key (gpt-4o & gpt-4o-mini access for extraction & drafting)
- Google Drive OAuth2 Credential (for saving appeal packets)
- Practice Management System (PMS) API Endpoint & HTTP auth header

## Customization
- Denial Logic: Edit the reasonMap object in Score Appeal Strategy & Deadline to add custom payer denial codes or change the 5-day urgent deadline threshold.
- Notification Channels: Replace Notify Front Desk or Notify Billing Manager Gmail nodes with Telegram/Slack nodes for chat-based triaging.
- Human Approval: Insert an n8n Form or sendAndWait node between Draft Appeal Letter and Save Appeal Packet to Drive for mandatory manual review.
- Secondary Storage: Append a Google Sheets node after Log Appeal Decision to mirror logs for non-technical office staff.

## Additional info
Automate dental practice denial management with the Dental Insurance Pre-Auth Denial Appeal Drafting & Resubmission Tracker.

This workflow automatically converts raw EOB emails into evidence-cited appeal letters. It uses AI (gpt-4o-mini) to extract CPT line items, runs policy-based scoring for appealability and deadlines, filters non-appealable lines to save AI spend, and drafts custom appeal letters (gpt-4o). Packets are saved to Google Drive, logged to n8n Data Tables (dental_appeal_log), and pushed to your PMS API while notifying your team—saving 25+ minutes per denial. Built-in error handling (onError=continueRegularOutput) ensures smooth, unbroken execution.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
