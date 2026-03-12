# ⚙️ Monitor website uptime with Google Sheets, Slack, Email & Phone Call alerts

> ⚡ **167 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Who’s it for
This template is ideal for developers, agencies, hosting providers, and website owners who need real-time alerts when a website goes down. It helps teams react quickly to downtime by sending multi-channel notifications and keeping a historical uptime log for tracking performance over time.

## What it does / How it works
This workflow runs on a schedule and checks a list of websites stored in Google Sheets.  
For every website URL, it performs an HTTP status check and determines whether the site is **up** or **down**.  
If the website is up, the workflow logs the status and timestamp into a separate uptime log sheet.  
If the website is down, it sends immediate alerts through Slack and Gmail, and also triggers an automated phone call using a voice-call API service.  
All uptime and downtime events are logged automatically, enabling long-term monitoring and reporting.

## Requirements
- Google Sheets OAuth2 credentials  
- Slack credentials  
- Gmail OAuth2 credentials  
- Voice-call API credentials (e.g., Vapi.ai)  
- A Google Sheet containing the list of website URLs  
- A second Google Sheet for logging uptime history  

## How to set up
1. Connect your Google Sheets, Slack, Gmail, and call-API credentials.  
2. Replace both Google Sheet IDs with your own.  
3. Update the HTTP Request node to reference your sheet’s URL column.  
4. Configure your Slack user or channel for downtime alerts.  
5. Add your API Key, assistant ID, and phone number variables to the call alert node.  
6. Adjust the schedule interval in the Schedule Trigger node.  

## How to customize the workflow
- Add SMS alerts (Twilio, Vonage)  
- Log uptime to a database instead of Sheets  
- Add retry logic for false positives  
- Monitor response time in addition to status codes  
- Connect alerts to your incident-management tools (PagerDuty, Jira, Discord)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
