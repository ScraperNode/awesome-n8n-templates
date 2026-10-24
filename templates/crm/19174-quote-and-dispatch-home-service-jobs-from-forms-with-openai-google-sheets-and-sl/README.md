# 🤝 Quote and dispatch home-service jobs from forms with OpenAI, Google Sheets and Slack

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow collects home-service quote requests via an n8n Form, uses OpenAI and a Google Sheets price book to estimate effort and a price range, then dispatches the job to the best matching serviceman in Slack and logs every request back to Google Sheets.

## How it works
1. Receives a job request submitted through an n8n Form (name, contact details, postcode, service type, urgency, description, and optional photo).
2. Loads business and dispatch settings, then reads the “Price book” tab from Google Sheets.
3. Sends the request plus the price book to OpenAI to extract a matching job category, an hours estimate, an urgency level, and a short customer-facing summary (without prices).
4. If OpenAI cannot produce an estimate, posts the full request to a Slack dispatch channel for a human to quote.
5. Otherwise, reads the “Servicemen” tab from Google Sheets, calculates an estimate range from the matching price book row, and selects the best serviceman based on skills, postcode coverage, and on-call status.
6. If a serviceman is selected, sends them a direct Slack message with the job details and posts a dispatch confirmation to the Slack channel; if not, posts the job to the Slack channel as unassigned with the reason.
7. Optionally emails the customer the generated response and estimate via Gmail, then appends a row with the outcome and key fields to the “Jobs log” tab in Google Sheets.

## Setup
1. Create a Google Sheet with three tabs named “Price book”, “Servicemen”, and “Jobs log”, and ensure the “Jobs log” header columns match the fields appended by the workflow (date, customer, phone, email, postcode, category, urgency, estimate_low, estimate_high, needs_site_visit, assigned_to, status, why).
2. Add Google Sheets credentials in n8n and paste your spreadsheet ID into the Dispatch Settings value for `jobsSheetId`.
3. Add an OpenAI API key credential for the chat model used to categorize jobs and estimate hours.
4. Add Slack credentials with permission to post to your dispatch channel and DM users, set the target channel (for example `#dispatch`), and store each serviceman’s Slack user ID in the “Servicemen” tab.
5. (Optional) Add Gmail credentials and set `emailCustomer` to true in Dispatch Settings to enable customer estimate emails.

## Additional info
I also wrote up why you lose the job and the case for not doing this at all: https://fractionalhq.uk/use-cases/trade-job-intake

If you would rather not set it up yourself, I can set it up for you on your own n8n account for £49. Tell me what you use at https://fractionalhq.uk/brief and I will reply with what I need from you before any work starts.

All nine of my paid n8n templates also come together as one download for $15: https://buy.stripe.com/00w3co8NR6Mq8r0eaV4c80M

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, OpenAI Chat Model, n8n Form Trigger, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
