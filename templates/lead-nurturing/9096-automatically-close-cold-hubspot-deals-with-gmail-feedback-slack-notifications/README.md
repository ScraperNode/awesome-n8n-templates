# 💬 Automatically close cold HubSpot deals with Gmail feedback & Slack notifications

> ⚡ **88 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works

This workflow identifies HubSpot deals that have gone untouched for 21+ days and automatically updates their status to Closed Lost. It fetches associated contacts, retrieves their details, and sends personalized follow-up emails requesting feedback. Finally, it notifies your team via Slack about the deals moved to Closed Lost. The workflow runs on a scheduled interval, ensuring consistent lead management without manual intervention.

## Step-by-step

**1. Trigger the workflow**  
- **Schedule Trigger** – Runs the workflow at a defined interval (daily, weekly, etc.).  
- **Get HubSpot Deals** – Retrieves all deals with key properties from HubSpot.  
- **Extract Deal Fields** – Normalizes deal data for consistent processing.  

**2. Identify and update cold deals**  
- **Filter Cold Leads (21+ days)** – Keeps only deals not updated in the past 21 days.  
- **Update Deal to Closed Lost** – Marks stale deals as Closed Lost in HubSpot.  

**3. Map deals to contacts**  
- **Fetch Deal Associations** – Retrieves contacts linked to filtered deals.  
- **Extract Contact IDs** – Parses associations to get contactId, dealId, and dealName.  
- **Get Contact Details** – Fetches enriched contact information.  
- **Extract Contact Email** – Simplifies data, keeping only the email field.  

**4. Follow-up & team notification**  
- **Send Gmail Feedback Request** – Sends a personalized thank-you email requesting feedback.  
- **Send Slack Notification** – Alerts the team about deals updated to Closed Lost.  

## Why use this?

- Ensures timely closure of stale HubSpot deals, keeping your pipeline clean.  
- Automates follow-up emails to gather valuable feedback from disengaged leads.  
- Reduces manual effort in deal management and contact outreach.  
- Keeps your team informed in real-time with Slack notifications.  
- Improves sales process efficiency and lead data hygiene.

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
