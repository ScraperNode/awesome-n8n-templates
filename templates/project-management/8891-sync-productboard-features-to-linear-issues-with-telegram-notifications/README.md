# 📋 Sync Productboard features to Linear issues with Telegram notifications

> ⚡ **104 views** · 📋 [Project Management](../)

## Description

## How it works

This workflow automatically syncs new Productboard features into Linear as issues and notifies the team via Telegram. It starts on a schedule, fetches Productboard features through API requests, and transforms the raw data into clean, structured fields. Newly created features are filtered, then inserted into Linear, and a success message is sent to Telegram for confirmation.

## Step-by-step

**1. Trigger and fetch data**  
- **Schedule Trigger** – Starts the workflow at predefined intervals.  
- **HTTP Request to Productboard** – Pulls the latest features from the Productboard API.  

**2. Transform and clean data**  
- **Code (Transform Features)** – Strips HTML, formats dates, and extracts clean fields like name, description, status, owner, and link.  

**3. Filter for new items**  
- **If (Filter New Features)** – Compares createdAt with today’s date, allowing only new features to proceed.  

**4. Create issues in Linear**  
- **Create Linear Issue** – Opens a new Linear issue using the feature’s name and description.  

**5. Notify via Telegram**  
- **Success Notification (Telegram)** – Sends a confirmation message once the sync is successful.  

## Why use this?

- Automates the sync of Productboard features into Linear without manual copying.  
- Ensures only new features are captured, preventing duplicates.  
- Keeps your team updated instantly through Telegram notifications.  
- Saves time by standardizing data and formatting before inserting into Linear.  
- Creates a smooth handoff from product planning to engineering execution.

## 🔗 Nodes Used

HTTP Request, Telegram, Linear, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
