# ⚙️ Health check websites with Google Sheets & Telegram alerts

> ⚡ **3,751 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## What does this template do ? 

This workflow performs scheduled health checks on a list of URLs stored in a Google Sheet. Every X minutes, it retrieves the URLs, sends HTTP requests to check their availability, and notifies a Telegram chat if any request fails.

You can easily replace Telegram with any other notification service supported by n8n, such as Slack, Discord, Email, or Microsoft Teams.

## Use Case
Ideal for monitoring internal or external services, ensuring uptime and responsiveness. Integrate with your preferred messaging platform for real-time failure notifications—without setting up complex infrastructure.

## What the Workflow Does
- ⏰ Triggers at regular intervals using **Schedule Trigger**  
- 📄 Reads URLs from a **Google Sheet**  
- 🌐 Sends HTTP requests to check URL health  
- 🚨 Sends failure alerts (including error code and URL) to **Telegram (or any service of your choice)**  

## Apps & Services Used
- Google Sheets  
- Telegram (or alternative notification service)  
- HTTP Request  

## Pre-requisites
- Telegram bot and chat ID (if using Telegram)  
- Connected Google Sheet with a `URLS` column  ([template](https://docs.google.com/spreadsheets/d/17-tY9_wn-D2FV627Sx3-Z3abqFYvz794edej7es5J6w/edit?usp=sharing))

## Customization Tips
- Adjust the schedule interval in the trigger node  
- Replace Telegram with Slack, Email, Discord, or any other notification node  
- Customize alert messages with more context or formatting  
- Add filters, retries, or logging as needed

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
