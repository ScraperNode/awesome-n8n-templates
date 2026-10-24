# 🤝 Track marketing revenue attribution with Google Sheets, Anthropic Claude, and Gmail

> ⚡ **34 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow captures leads via webhooks, logs UTM-based channel attribution to Google Sheets, attributes won-deal revenue back to the original channel, and sends a monthly executive summary written by Anthropic Claude via Gmail.

## How it works
1. Receives a POST request on a lead-capture webhook containing lead details and UTM parameters.
2. Normalizes the lead fields, maps UTM source/medium values to a standardized marketing channel, and appends the lead to the Leads tab in Google Sheets.
3. Receives a POST request on a deal-won webhook containing the customer email and deal value.
4. Looks up the matching lead by email in the Google Sheets Leads tab, attributes the deal revenue to the original channel (or marks it as Unknown / untracked), and appends the result to the Revenue tab.
5. Runs on the 1st of every month at 08:00, reads the Revenue tab, and aggregates last month’s revenue and deal count by channel.
6. Sends the aggregated results to Anthropic Claude to generate a 4–6 sentence executive summary and emails the summary and figures using Gmail.

## Setup
1. Create a Google Sheets spreadsheet with tabs named Leads and Revenue, then select the spreadsheet in all Google Sheets nodes.
2. Add Google Sheets credentials with access to the target spreadsheet.
3. Add an Anthropic API credential for the Claude chat model used to write the monthly summary.
4. Add a Gmail credential and set the report recipient email address in the workflow.
5. Copy the two webhook URLs (lead-capture and deal-won) and configure your website form and CRM to POST the required fields (email, UTMs for leads, and deal_value for won deals).

## Requirements
- A Google account with access to Sheets and Gmail
- An Anthropic API key
- Website forms that pass UTM parameters to your webhook

## Customization
- Edit the channel mapping rules in the Normalize Lead code node to match the channels you actually use
- Swap the Gmail node for Slack or another notification channel
- Change the report schedule or the Claude prompt tone in the summary node

## Additional info
Tested end to end before submission: lead capture with UTM mapping, revenue attribution including deals from untracked leads, and the monthly Claude report delivered by email.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
