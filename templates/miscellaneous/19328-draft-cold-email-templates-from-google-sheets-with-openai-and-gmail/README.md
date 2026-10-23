# 🔧 Draft cold email templates from Google Sheets with OpenAI and Gmail

> ⚡ **6 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs manually or weekly to read leads from Google Sheets, filters them against an n8n Data Table suppression list and a cooldown log, drafts short personalised cold emails with OpenAI, creates Gmail drafts for review, and records each draft in Google Sheets and the sent log.

## How it works
1. Runs on a manual trigger or every week on Monday at 08:00.
2. Loads outreach settings, reads the existing sent log from an n8n Data Table, and pulls lead rows from a Google Sheets “Leads” tab.
3. Normalizes lead fields (for example trimming text and lowercasing emails) and skips any lead whose email appears in the n8n Data Table suppression list.
4. Filters out invalid emails, leads without a research note, duplicate emails within the same run, and any email drafted within the configured cooldown window, then caps the batch size.
5. Sends each remaining lead plus your sender details to OpenAI to generate a subject and email body that follow strict length and content rules.
6. Validates the AI output, creates a Gmail draft addressed to the lead, upserts the email and timestamp into the sent log Data Table, and appends the draft details (including Gmail draft ID) to a Google Sheets “Draft Log” tab.

## Setup
1. Add credentials for Google Sheets, Gmail, and OpenAI (Chat) and select an available OpenAI chat model.
2. Create two n8n Data Tables named “Suppression List” (email) and “Sent Log” (email, lastDraftedAt) and select them in the Data Table nodes.
3. Create a Google Sheets spreadsheet with “Leads” and “Draft Log” tabs, ensure the Leads tab includes columns like name, company, email, title, researchNote, and sourceUrl, and paste the spreadsheet URL into both Google Sheets nodes.
4. Fill in the Outreach Settings values (sender name, company one-liner, value proposition, draft cap, and cooldown days) before activating the workflow.

## Additional info
See the parts that break, and who I think should not buy this, at https://fractionalhq.uk/use-cases/ai-cold-email-drafter

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI Chat Model, Information Extractor, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
