# 🎣 Automated lead capture, scoring & CRM integration with HubSpot, Clearbit & Slack

> ⚡ **769 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

How it works
This Lead Capture & Auto-Qualification workflow transforms raw leads into qualified prospects through intelligent automation. Here's the high-level flow:
Lead Intake → Data Validation → Enrichment → Scoring → Smart Routing → CRM Integration & Notifications
The system captures leads from any source, validates the data, enriches it with company intelligence, scores based on qualification criteria, and automatically routes high-value prospects to sales while nurturing lower-priority leads.
Set up steps
Time to set up: Approximately 30-45 minutes
Prerequisites: Active accounts with HubSpot, Clearbit, Apollo, and Slack
Step 1: Import Workflow (2 minutes)

Copy the workflow JSON and import into your n8n instance
The workflow will appear with all nodes and sticky note documentation

Step 2: Configure Environment Variables (5 minutes)
Set these in your n8n environment:

APOLLO_API_URL
SLACK_SALES_CHANNEL_ID
SLACK_MARKETING_CHANNEL_ID
CRM_ASSIGNMENT_URL

Step 3: Set Up API Credentials (15 minutes)
Create credential connections for:

Clearbit API (enrichment)
Apollo API (HTTP Header Auth)
HubSpot API (CRM integration)
Slack API (notifications)

Step 4: Customize Scoring Logic (10 minutes)

Review the qualification criteria in the Code node
Adjust scoring weights based on your ideal customer profile
Modify industry targeting and company size thresholds

Step 5: Test & Activate (8 minutes)

Send test webhook requests to validate the flow
Verify CRM contact creation and Slack notifications
Activate the workflow for live lead processing

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Clearbit

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
