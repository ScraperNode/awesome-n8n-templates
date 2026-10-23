# 💬 Send AI upsell emails with Groq, Gmail, HubSpot CRM and Slack alerts

> ⚡ **24 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works  
This workflow monitors user usage via a webhook and automatically triggers an upsell process when limits are exceeded. It formats incoming data, generates a personalized email using AI, and sends it to the user. The workflow then logs the activity in HubSpot and notifies the team via Slack. This ensures timely engagement and improves upgrade conversion rates without manual intervention.

## Step-by-step  

- **Trigger & prepare data**  
  - **Webhook** – Receives real-time user usage data from your app.  
  - **Edit Fields** – Extracts and formats key fields like email, plan, and usage.  

- **Generate and send AI email**  
  - **AI Agent** – Creates a personalized upsell message based on usage data.  
    - **Groq Chat Model** – Sub-node that powers AI text generation.  
  - **Send a message (Gmail)** – Sends the generated email to the user.  

- **Update CRM with activity**  
  - **Search contacts (HubSpot)** – Finds the user in HubSpot using email.  
  - **HTTP Request** – Logs an upsell note/activity in the contact record.  

- **Notify team for follow-up**  
  - **Send a message (Slack)** – Alerts the team with user and usage details.  

## Why use this?  

- Automates upsell outreach at the perfect moment of high intent  
- Reduces manual monitoring of user usage and limits  
- Ensures CRM is always updated with customer activity  
- Improves team visibility with real-time Slack notifications  
- Increases upgrade conversions with personalized AI messaging

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
