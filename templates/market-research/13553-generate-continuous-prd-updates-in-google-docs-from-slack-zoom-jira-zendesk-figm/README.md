# 📊 Generate continuous PRD updates in Google Docs from Slack, Zoom, Jira, Zendesk, Figma and analytics using OpenAI

> ⚡ **50 views** · 📊 [Market Research & Insights](../)

## Description

This workflow creates an automated Product Intelligence Engine that continuously collects signals from multiple product sources and generates structured PRD updates using AI.
It ingests conversations, feedback, support tickets, analytics, and design comments, standardizes them, analyzes them with an AI PRD Agent, and automatically updates a Google Doc with structured PRD recommendations. Instead of manually reviewing Slack threads, Zoom calls, Jira comments, support tickets, and customer forms, this workflow centralizes everything into one intelligent PRD analysis system.

**High-Level Architecture** - The workflow runs in 4 layers:

**1. Signal Ingestion Layer**
Captures product signals from:
• Slack (channel messages + app mentions)
• Customer Form submissions
• Zoom recordings (scheduled)
• Jira comments (scheduled)
• Zendesk tickets (scheduled)
• Figma comments (file updates)
• Platform analytics via webhook
• (Extendable to Salesforce / HubSpot)

**2. Standardization Layer**
Each source passes through a Format Node that:
• Extracts relevant text
• Normalizes metadata
• Adds timestamps
• Labels source type
All inputs are converted into a unified "product signal" object.

**3. Intelligence Layer (AI PRD Agent)**
All signals are merged into a single stream using a Merge node.
The PRD Analysis Agent then:
• Extracts feature requests
• Detects scope changes
• Identifies risks and constraints
• Evaluates priority signals
• Detects target user shifts
• Generates structured PRD updates

**4. PRD Governance Layer - output in a Google Doc**
The structured AI output is appended to a Google Doc, which is fully traceable. This creates a living PRD that continuously evolves based on real product signals.

**Required Credentials** (And How To Add Them): You will need to configure the following credentials in n8n:


**1. Slack**
Used for Slack Trigger.
Steps:
Create a Slack App at api.slack.com
Enable:
app_mentions:read
channels:history
chat:write (optional if you want replies)
Install app to workspace
Copy Bot OAuth Token
In n8n → Create Slack API credential
Paste token
Reference - https://www.youtube.com/watch?v=qk5JH6ImK0I

**2. Zoom (OAuth2)**
Used to fetch recordings.
Steps:
Create an OAuth App in Zoom Marketplace
Add the Redirect URL from n8n
Copy Client ID + Secret
Add Zoom OAuth2 credential in n8n
Connect account
Reference - https://www.youtube.com/watch?v=BC6O_3LYgac

**3. Google Docs (OAuth2)**
Used to update PRD document.
Steps:
Create Google Cloud Project
Add Doc URl to n8n
Replace the example Google Doc URL with your own PRD document.
Reference - https://www.youtube.com/watch?v=iieEHvu93dc

**4. Jira (Cloud)**
Steps:
Generate API token from Atlassian
Create Jira Software Cloud credential
Enter:
Email
API token
Domain
Reference - https://www.youtube.com/watch?v=T4z7lzqSZDY

**5. Zendesk**
Steps:
Generate API token
Add Zendesk credential
Enter:
Subdomain
Email
API token

**6. Figma**
Steps:
Generate a personal access token in Figma
Add Figma credentials with the team ID
Paste token

**7. Platform Analytics Webhook**
Replace:
&lt;__PLACEHOLDER_VALUE__your_analytics_api_endpoint__&gt;
With your real analytics endpoint.
You can:
• Send Mixpanel exports
• Send Amplitude exports
• Or POST custom JSON

**What Makes This Powerful**
• Eliminates product signal silos
• Creates AI-driven PRD governance
• Ensures traceability of decisions
• Enables continuous PRD evolution
• Scales across teams

## 🔗 Nodes Used

HTTP Request, Webhook, Jira Software, Zendesk, Zoom, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
