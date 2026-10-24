# 🤝 Send contract renewal reminders from HubSpot via Gmail and Slack alerts

> ⚡ **34 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works  
This workflow runs on a schedule to monitor HubSpot deals with upcoming contract expiry dates. It filters deals that are 30, 60, or 90 days away from expiration and processes each one individually. Based on the remaining days, it sends personalized email reminders to contacts via Gmail. It also notifies account managers in Slack and creates follow-up tasks in ClickUp for tracking.

## Step-by-step  

- **Schedule and filter expiring deals**  
  - **Schedule Trigger** – Runs the workflow at defined intervals.  
  - **Get all deals** – Fetches deals and contract expiry data from HubSpot.  
  - **Filter Deals** – Calculates days left and keeps only 30, 60, or 90-day expiries.  

- **Process deals and fetch contacts**  
  - **Loop Over Deals** – Iterates through each filtered deal.  
  - **Fetch Associated Contact With Deal** – Retrieves linked contact IDs via API.  
  - **Get Contact Details** – Pulls contact email and basic info from HubSpot.  

- **Route and send reminder emails**  
  - **Switch** – Routes deals based on days left (30, 60, 90).  
  - **30 day mail** – Sends urgent renewal reminder via Gmail.  
  - **60 day mail** – Sends friendly renewal notification email.  
  - **90 day mail** – Sends early awareness email.  
  - **Merge** – Combines all email paths into a single output.  

- **Notify team and create follow-ups**  
  - **Nofity Account Manager** – Sends Slack alert with deal and contact details.  
  - **Create Follow-up Task** – Creates a ClickUp task for renewal tracking.  

## Why use this?  

- Prevent missed renewals with automated tracking and alerts  
- Improve customer retention through timely communication  
- Reduce manual CRM monitoring and follow-ups  
- Keep teams aligned with Slack notifications and task creation  
- Scale contract management without increasing workload

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, ClickUp, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
