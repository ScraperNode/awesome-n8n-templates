# 💬 Send GPT-4o follow-up emails to leads and detect replies with Gmail

> ⚡ **99 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who It's For
Sales teams, agencies, and service businesses that follow up with inbound leads via email and want to automate the entire sequence without losing the personal touch.

## How It Works
1. Webhook receives the new lead form submission
2. Configure Variables node sets your sender name, email, company name, reply detection email, and wait time in one place
3. OpenAI writes a personalized first follow-up email based on the lead's inquiry details
4. Gmail sends the first email
5. Wait node holds the workflow for 48 hours
6. Gmail searches the inbox for any reply from the lead
7. If the lead replied: Slack notifies your team and Google Sheets logs the reply status, name, email, and timestamp
8. If no reply: OpenAI writes a second follow-up from a different angle and Gmail sends it

## Set Up Steps
1. Update the Configure Variables node with your sender name, email, company name, and reply detection email
2. Connect your Gmail, OpenAI, Slack, and Google Sheets credentials to each node
3. Create a Google Sheet with columns: Lead Name, Email, Reply Status, Date
4. Activate the workflow and test with a webhook POST request

## Requirements
- Gmail account with OAuth credential
- OpenAI API key
- Slack workspace with a notifications channel
- Google Sheet set up for reply logging

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
