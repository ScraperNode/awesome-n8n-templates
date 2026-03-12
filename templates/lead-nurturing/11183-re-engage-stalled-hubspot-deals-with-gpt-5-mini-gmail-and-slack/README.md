# 💬 Re-engage stalled HubSpot deals with GPT-5-mini, Gmail, and Slack

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Who is this for

This workflow is designed for **Customer Success Managers** and **Sales Teams** who manage high-volume pipelines in HubSpot. If you have prospects who stop responding after the contract is sent, this automation helps you recover them without manual follow-up.

## What it does

This template automatically identifies deals that have "stalled" in your pipeline (specifically in the **Contract Sent** stage) and initiates a personalized re-engagement sequence.

1.  **Monitors Pipeline**: Runs on a schedule to find deals marked as `stalled` in HubSpot.
2.  **Smart Filtering**: Identifies all associated contacts for a deal and selects the **first available contact**. This ensures the email goes to a real person involved in the deal.
3.  **Spam Prevention**: Fetches the `Last Contacted` date from HubSpot. If there has been any activity (call, email, meeting) in the last **7 days**, the workflow **skips** that contact. This safety gate prevents automation from interfering with active conversations.
4.  **AI Personalization**: Uses **GPT-5-mini** (via OpenAI) to generate a helpful check-in email. The prompt is context-aware, using the contact's name and deal stage to sound personal rather than generic.
5.  **Multi-Channel Sync**: Sends the approved email via **Gmail**, alerts the internal team in **Slack**, and logs the email body to the **HubSpot Activity Timeline**.

## How to set up

1.  **Credentials**: Connect your HubSpot, OpenAI, Slack, and Gmail accounts in n8n.
2.  **Configuration**: Open the `Config: Setup Variables` node and enter your **Sender Name**, **Company Name**, and **Calendar Link**.
3.  **Slack Channel**: Open the **Slack: Notify CSM** node and select the channel where you want your team to be alerted (e.g., `#sales-alerts`).
4.  **HubSpot Settings**: By default, this targets the `contractsent` stage. Ensure your HubSpot pipeline matches this ID.

## Requirements

- **n8n** (Cloud or Self-hosted)
- **HubSpot** account
- **OpenAI** API Key
- **Gmail** & **Slack** accounts

## How to customize the workflow

- **Target Different Stages**: To re-engage leads in other phases (e.g., "Qualification" or "Onboarding"), open the **HubSpot: Search Stalled Deals** node and change the `dealstage` filter to your desired pipeline stage ID.
- **Adjust the Safety Gate**: The workflow blocks emails if there has been contact in the last **7 days**. To change this window (e.g., to 30 days for cold leads), open the **Filter: Last Activity Check** node and edit the time value in the expression.
- **Modify the AI Persona**: Open the **AI: Generate Email** node to edit the System Prompt. You can adjust the tone (formal vs. casual), lengths constraints, or language to match your brand voice.

## 🔗 Nodes Used

Slack, HubSpot, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
