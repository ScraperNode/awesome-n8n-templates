# 💬 Send CRM lead outreach emails with Notion, Gmail, Google Drive and OpenAI

> ⚡ **42 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow watches a Notion CRM for leads ready to contact, checks Gmail to avoid duplicate outreach, then sends or drafts an email with Google Drive PDF attachments and updates the lead status in Notion, with bounce detection that marks invalid emails (using OpenAI to extract addresses).

## How it works
1. Triggers when a lead page is updated in a selected Notion CRM database.
2. Validates that the lead’s Email field looks like an email address and searches Gmail Sent for recent messages to that recipient to detect prior outreach.
3. If the lead was already emailed and the current status is safe to overwrite, it updates the Notion lead status to “Emailed.”
4. If the lead was not previously emailed, it downloads two PDF attachments from Google Drive, converts them to Gmail attachments, and either creates a Gmail draft for specific domains (optionally sending a Twilio SMS to a rep) or sends a generic vs personalized Gmail email based on whether a contact name exists.
5. After sending, it waits briefly, searches Gmail for bounce messages mentioning “Address not found,” and updates the Notion record to “INVALID EMAIL” (or sets “Emailed” when the status indicates the lead is in an active outreach stage).
6. In parallel, a Gmail trigger monitors incoming bounce notifications, uses OpenAI to extract the failed email address, matches it to a Notion CRM lead, and marks that lead as “INVALID EMAIL.”

## Setup
1. Connect your Notion credentials and select your CRM database ID in the Notion Trigger and Notion update/get-all steps, ensuring it includes Email, Contact Name, Status, and (optionally) Notes properties.
2. Connect your Gmail OAuth2 account and customize the email subject/body templates, including any domain rule used to route leads into draft review.
3. Connect Google Drive OAuth2 and select the two PDF file IDs to download and attach to the Gmail draft/email.
4. Add an OpenAI API credential and select a model for extracting the bounced email address from Gmail bounce snippets.
5. (Optional) Connect Twilio and set the From/To phone numbers to receive an SMS when a Gmail draft is created for manual review.
6. Align the Notion Status values used in the workflow (for example “Warm Lead,” “Interested,” “Emailed,” and “INVALID EMAIL”) with your pipeline so updates don’t overwrite critical stages.

## 🔗 Nodes Used

Twilio, Google Drive, Gmail, Notion, Notion Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
