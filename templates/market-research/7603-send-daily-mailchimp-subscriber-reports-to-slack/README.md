# 📊 Send daily Mailchimp subscriber reports to Slack

> ⚡ **253 views** · 📊 [Market Research & Insights](../)

## Description

## What this workflow does
This workflow sends a **daily Slack report** with the current number of subscribers in your Mailchimp list.  
It’s a simple way to keep your marketing or growth team informed without logging into Mailchimp.

## How it works
1. **Cron Trigger** starts the workflow once per day (default: 09:00).  
2. **Mailchimp node** retrieves the total number of subscribers for a specific list.  
3. **Slack node** posts a formatted message with the subscriber count into your chosen Slack channel.

## Pre-conditions / Requirements
- A Mailchimp account with API access enabled.  
- At least one Mailchimp audience list created (you’ll need the List ID).  
- A Slack workspace with permission to post to your chosen channel.  
- n8n connected to both Mailchimp and Slack via credentials.

## Setup
1. **Cron Trigger**  
   - Default is set to 09:00 AM daily. Adjust the time or frequency as needed.  

2. **Mailchimp: Get Subscribers**  
   - Connect your Mailchimp account in n8n credentials.  
   - Replace `{{MAILCHIMP_LIST_ID}}` with the List ID of the audience you want to monitor.  
   - To find the List ID: Log into Mailchimp → Audience → All contacts → Settings → Audience name and defaults.  

3. **Slack: Send Summary**  
   - Connect your Slack account in n8n credentials.  
   - Replace `{{SLACK_CHANNEL}}` with the name of the channel where the summary should appear (e.g., `#marketing`).  
   - The message template can be customized, e.g., include emojis, or additional Mailchimp stats.

## Customization Options
- **Multiple lists:** Duplicate the Mailchimp node for different audience lists and send combined stats.  
- **Formatting:** Add more details like new subscribers in the last 24h by comparing with previous runs (using Google Sheets or a database).  
- **Notifications:** Instead of Slack, send the update to email or Microsoft Teams by swapping the output node.

## Benefits
- **Automation:** Removes the need for manual Mailchimp checks.  
- **Visibility:** Keeps the whole team updated on subscriber growth in real time.  
- **Motivation:** Celebrate growth milestones directly in team channels.  

## Use Cases
- Daily subscriber growth tracking for newsletters.  
- Sharing metrics with leadership without giving Mailchimp access.  
- Monitoring the effectiveness of campaigns in near real time.

## 🔗 Nodes Used

Cron, Slack, Mailchimp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
