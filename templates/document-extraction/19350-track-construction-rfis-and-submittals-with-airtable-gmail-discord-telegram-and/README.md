# 🔬 Track construction RFIs and submittals with Airtable, Gmail, Discord, Telegram, and gpt-6-luna

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Construction questions that no longer live in someone's inbox. This workflow takes RFIs and submittals by webhook, has gpt-6-luna classify them and draft the acknowledgment, logs everything to Airtable, and escalates anything urgent through Gmail, Discord, and Telegram.

*Last updated: September 2026.*

## Quick Overview
This workflow tracks construction RFIs and submittals via webhooks, uses gpt-6-luna to draft acknowledgment emails, logs items to Airtable, and sends updates through Gmail, Discord, and Telegram, including urgent escalation and a daily due/overdue sweep.

## How it works
1. Receives new RFI submissions via a webhook, normalizes the payload, and rejects incomplete requests while notifying the office via Discord and Gmail.
2. Calculates RFI priority from the due date and keywords, uses gpt-6-luna to categorize the question and draft an acknowledgment email, then parses the JSON response with a fallback if needed.
3. Creates an RFI record in an Airtable “RFI Register,” emails the acknowledgment to the submitter via Gmail, and posts a new-RFI message to Discord.
4. If the RFI is flagged as needing engineering review, escalates it by posting an urgent Discord message, sending a Telegram alert, and emailing an engineer via Gmail.
5. Receives RFI answers via a separate webhook, validates the payload, searches Airtable for the matching RFI, and updates the record to “answered.”
6. Emails the answer to the original submitter and logs the update to Discord, or alerts the office if the answer is invalid or does not match any Airtable record.
7. Receives new submittals via a webhook, validates required fields, uses gpt-6-luna to classify the submittal and draft an acknowledgment, logs it to an Airtable “Submittal Log,” then emails the submitter and posts a Discord update.
8. Runs daily on a cron schedule to fetch RFIs and submittals from Airtable, calculates what is due soon/overdue, and sends an “all clear” or an action-needed summary to Gmail and Discord.

## Setup
1. Add an OpenAI API credential (Chat Completions) for the acknowledgment and classification steps, which are configured as gpt-6-luna.
2. Add an Airtable personal access token credential and ensure your base includes the “RFI Register” and “Submittal Log” tables with fields matching the workflow mappings.
3. Add a Gmail OAuth2 credential and update the internal notification recipients (office and engineer email addresses) to your team’s addresses.
4. Add a Discord bot credential and set the target server and channel IDs for routine and urgent posts.
5. Add a Telegram bot credential and replace the chat ID used for urgent RFI alerts.
6. Copy the three webhook URLs (rfi/intake, rfi/answer, subm/intake) and configure your forms or source systems to POST the required fields to each endpoint.

### Quick Answers
**How is RFI priority set?**
It is calculated from the due date and keywords, and gpt-6-luna categorizes the question and drafts the acknowledgment email that goes out with the RFI record.

**When does something get escalated?**
An RFI flagged for engineering review triggers an urgent Discord message, a Telegram alert, and an engineer email via Gmail.

**How does an answer reach the submitter?**
Answers posted to the rfi-answer webhook are matched to the Airtable record, marked as answered, and emailed to the original submitter, while an invalid or unmatched answer alerts the office.

**How are submittals handled?**
They arrive on their own webhook, are validated and classified with gpt-6-luna, logged to the Airtable Submittal Log, then the submitter is emailed and Discord is updated.

**Is there a daily check?**
Yes: a cron run pulls RFIs and submittals from Airtable, works out what is due soon or overdue, and posts an all clear or an action-needed summary to Gmail and Discord.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Telegram, Discord, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
