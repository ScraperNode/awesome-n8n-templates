# 🎣 Qualify Calendly leads in Airtable with OpenAI GPT-based categorization

> ⚡ **7 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This automation captures Calendly bookings, filters out the leads that don't qualify, and uses OpenAI to categorize why each prospect booked a call. It's built for agencies, consultancies, and anyone running sales calls through Calendly who wants lead intent organized and tracked in Airtable.

## How it works
1. *Input:* a Calendly webhook fires when someone books or cancels.
2. *Qualification check*: validates the lead against your criteria
3. *Event routing*: decides whether it's a new booking or a cancellation
4. *New booking*: creates an Airtable record with contact details, meeting time, and booking reason, fetches your categories from Airtable, has OpenAI pick the right one, and updates the record
5. *Cancellation*: finds the existing Airtable record and deletes it
6. *Output:* organized, categorized lead data in Airtable, ready for follow-up.

## Setup
1. **Build the Airtable base.** Create two tables. Calendly Information with fields: Name, First Name, Last Name, Email, Phone, Event Name, Brand, Meeting Date, Why they booked, Categories (linked to the Categories table). Categories with: Name (text) and id (record ID).
2. **Add Airtable credentials in n8n.** In Airtable, create a personal access token with `data.records:read` and `data.records:write`. Add it as an Airtable credential in n8n and test the connection.
3. **Configure the Calendly webhook.** In Calendly, go to Integrations, then API & Webhooks, and create a webhook. Copy the URL from the "Calendly Webhook" node in n8n. Subscribe to `invitee.created` and `invitee.canceled`.
4. **Add OpenAI credentials.** Follow this guide to create your key (https://winflowai.com/blog/get-openai-api-key/), then add it as an OpenAI credential in n8n. Make sure your OpenAI account has credits.
5. **Configure the nodes.** Set your Airtable credential, Base ID, and Table IDs on each Airtable node. Adjust the "Qualified?" IF node to match your Calendly question structure. Update the "Category Assigner" OpenAI prompt for your business and categories. Map the "Create a Calendly Meeting" fields to your form questions.
6. **Test.** Activate the workflow, book a test meeting, and confirm the record and category appear in Airtable. Cancel it to confirm the record is removed.

## Requirements
- Calendly account on a plan that supports webhooks
- Airtable account (free tier works)
- OpenAI API account with credits
- n8n instance (Cloud or self-hosted)

## Additional info
Step-by-step guide:
- OpenAI API key → https://winflowai.com/blog/get-openai-api-key/

## 🔗 Nodes Used

Airtable, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
