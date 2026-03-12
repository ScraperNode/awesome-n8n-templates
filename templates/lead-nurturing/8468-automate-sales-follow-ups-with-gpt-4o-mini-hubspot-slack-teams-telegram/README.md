# 💬 Automate sales follow-ups with GPT-4o-mini, HubSpot, Slack, Teams & Telegram

> ⚡ **420 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

This workflow automatically generates personalized follow-up messages for leads or customers after key interactions (e.g., demos, sales calls). It enriches contact details from HubSpot (or optionally Monday.com), uses AI to draft a professional follow-up email, and distributes it across multiple communication channels (Slack, Telegram, Teams) as reminders for the sales team.

## Step-by-step
**1. Trigger & Input**

- Schedule Trigger – Runs automatically at a defined interval (e.g., daily).

- Set Sample Data – Captures the contact’s name, email, and context from the last interaction (e.g., “had a product demo yesterday and showed strong interest”).

**2. Contact Enrichment**

- HubSpot Contact Lookup – Searches HubSpot CRM by email to confirm or enrich contact details.

- Monday.com Contact Fetch (Optional) – Can pull additional CRM details if enabled.

**3. AI Message Generation**

- AI Language Model (OpenAI) – Provides the underlying engine for message creation.

- Generate Follow-Up Message – Drafts a short, professional, and friendly follow-up email:

- References previous interaction context.

- Suggests clear next steps (call, resources, etc.).

- Ends with a standardized signature block for consistency.

**4. Multi-Channel Communication**

- Slack Reminder – Posts the generated message as a reminder in the sales team’s Slack channel.

- Telegram Reminder – Sends the follow-up draft to a Telegram chat.

- Teams Reminder – Shares the same message in a Microsoft Teams channel.

## Benefits

- Personalized Outreach at Scale – AI ensures each follow-up feels tailored and professional.

- Context-Aware Messaging – Pulls in CRM details and past interactions for relevance.

- Cross-Platform Delivery – Distributes reminders via Slack, Teams, and Telegram so no follow-up is missed.

- Time-Saving for Sales Teams – Eliminates manual drafting of repetitive follow-up emails.

- Consistent Branding – Ensures every message includes a unified signature block.

## 🔗 Nodes Used

Slack, Telegram, HubSpot, Monday.com, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
