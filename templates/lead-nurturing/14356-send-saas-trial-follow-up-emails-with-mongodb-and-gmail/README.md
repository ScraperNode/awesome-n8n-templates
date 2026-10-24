# 💬 Send SaaS trial follow-up emails with MongoDB and Gmail

> ⚡ **61 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works  
This workflow runs on a daily schedule to monitor users currently on a trial plan. It fetches user data from MongoDB, calculates their trial stage, and assigns a trigger label such as Day 3, Day 7, Day 13, or Last Day. Based on this stage, the workflow sends a targeted email using Gmail. This ensures consistent engagement and improves trial-to-paid conversion without manual effort.

## Step-by-step  

- **Fetch and filter trial users**  
  - **Schedule Trigger** – Runs the workflow daily at a fixed time.  
  - **Find documents** – Retrieves users with an active trial plan from MongoDB.  
  - **Code in JavaScript** – Calculates trial progress and assigns a trigger type (day_3, day_7, day_13, last_day).  

- **Send stage-based emails**  
  - **Loop Over Items** – Iterates through each filtered user.  
  - **Switch** – Routes users based on their trigger type.  
  - **Send day 3 email** – Sends onboarding encouragement email.  
  - **Send day 7 mail** – Sends mid-trial engagement email.  
  - **Send day 13 mail** – Sends near-expiry reminder email.  
  - **Send Last day email** – Sends final urgency email before trial ends.  
  - **Merge** – Combines all branches and continues looping for remaining users.  

## Why use this?  

- Automates user engagement throughout the trial lifecycle  
- Improves activation and feature adoption with timely nudges  
- Increases conversion rates with strategic email timing  
- Eliminates manual tracking of trial users  
- Scales easily for large SaaS user bases

## 🔗 Nodes Used

MongoDB, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
