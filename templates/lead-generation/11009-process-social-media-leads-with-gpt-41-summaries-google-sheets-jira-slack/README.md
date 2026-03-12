# 🎣 Process social media leads with GPT-4.1 summaries, Google Sheets, Jira & Slack

> ⚡ **46 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Automated Social Media Lead Processing with AI Summaries, Slack Alerts & Jira Ticketing

This workflow automatically collects new lead messages from social media platforms, LinkedIn or web forms, filters relevant marketing inquiries using keywords, classifies and summarizes the lead with AI, logs it to Google Sheets, creates a Jira task and sends Slack notifications. Additionally, it generates weekly lead reports for team insights.  

It reduces manual triage, ensures no valid inquiry is missed and keeps your team updated with both immediate notifications and summary reports.

### Quick Start – Implementation Steps

1. Connect your webhook to your social media inbox, LinkedIn, Twitter or web form.  
2. Add your OpenAI, Google Sheets, Jira and Slack credentials.  
3. Enable the workflow.  
4. Send a test message to confirm Google Sheets logging, Slack notification and Jira task creation.  
5. Activate the scheduler for weekly reports to track lead performance.

## What It Does

This workflow performs the following key tasks:

* Filters incoming messages for marketing-related keywords like *ad request*, *promo request*, *collaboration*, *partnership* or *social media inquiry*.  
* Uses OpenAI GPT to classify the lead into categories such as Sales, Support, Partnership, Influencer Inquiry or General Lead.  
* Generates a short AI summary of the message.  
* Logs structured lead data to Google Sheets, including username, source, category, summary and timestamp.  
* Creates a Jira task automatically with summary, description, category and received time.  
* Sends a Slack notification to alert the team instantly.  
* Runs a scheduled workflow that aggregates weekly leads and sends a weekly report to Slack.

This ensures a structured, automated pipeline for capturing, summarizing and assigning leads efficiently.

## Who’s It For

* Marketing and sales teams managing leads from social media and web forms. 
* Agencies handling client campaigns and inquiries.
* Businesses that want automated notifications and ticketing.
* Teams using Slack and Jira for daily operations.

## Requirements to Use This Workflow

* n8n account or self-hosted instance.  
* Webhook-enabled social media inbox or lead form.  
* OpenAI API Key.  
* Slack Bot Token with channel posting permission.  
* Jira Software Cloud API credentials.  
* Google Sheets credentials.  
* Predefined keyword list for filtering messages.  

## How It Works & Setup Steps

### 1. Get DM (Webhook Trigger)

Receives new messages from social media or web forms and starts the workflow.

### 2. Lead Keyword Filter (Code Node)

Filters incoming messages for predefined marketing keywords and removes irrelevant or spam messages.

### 3. AI Lead Classifier (OpenAI Node)

Classifies the lead into categories (Sales, Support, Partnership, Influencer Inquiry, General Lead) and generates a one-line summary using GPT-4.1.

### 4. AI Output Parser (Code Node)

Parses AI JSON output and merges it with original message data, adding timestamp and structured fields.

### 5. Store Lead (Google Sheets Node)

Logs structured lead data to Google Sheets including username, source, category, summary and timestamp.

### 6. Create Task (Jira Node)

Automatically creates a Jira story or task in your selected project with the AI summary, category and timestamp.

### 7. Send a Summary (Slack Node)

Sends a formatted message to your selected Slack channel, alerting your team of the new lead.

### 8. Weekly Reporting

* **Schedule Trigger** – triggers the weekly reporting workflow.  
* **Extract Lead Data** – fetches all logged leads from Google Sheets.  
* **Weekly Lead Filter** – filters data to include leads from the last week.  
* **Report Data Formatter** – calculates total leads, category counts, source counts and example leads.  
* **Weekly Report Slack** – sends a formatted weekly lead summary to Slack.

## How to Customize Nodes

### Keyword Filter

Add or remove keywords in the JavaScript code to match your specific lead types or campaigns.

### AI Classification

Update the OpenAI prompt for different summary lengths, tones, or lead categories.

### Google Sheets Logging

Map additional columns like email, phone or campaign source as needed.

### Jira Fields

Customize summary, description, labels, priority or assignees based on your project requirements.

### Slack Message Format

Modify emojis, line breaks and formatting to suit your team’s Slack notifications.

## Add-Ons (Extend the Workflow)

* Send email alerts for high-priority leads.  
* Trigger WhatsApp replies using an API provider.
* Integrate with CRMs like HubSpot, Zoho or Salesforce.
* Add sentiment analysis to detect frustrated or VIP users.
* Automate daily or weekly analytics reports to Slack.

## Use Case Examples

1. Collecting Instagram, LinkedIn and Twitter DMs and logging them to Google Sheets.  
2. Creating automated Jira tickets for marketing inquiries.  
3. Sending instant Slack notifications for new leads.  
4. Filtering out irrelevant messages and only processing valid marketing leads.  
5. Generating weekly lead summary reports for team review.  

## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| No leads appearing | Webhook not receiving messages | Check webhook URL and ensure messages are sent correctly |
| AI summary empty | OpenAI API key invalid or model limit reached | Regenerate API key / check usage |
| Jira task not created | Missing required Jira fields or incorrect project ID | Add required fields or update Jira project settings |
| Slack message not sent | Wrong channel ID or missing permissions | Reconnect Slack credentials |
| Filter passes 0 items | Keywords do not match | Update or expand keyword list in filter node |


## Need Help?

If you need assistance setting up this workflow, customizing nodes, building add-ons or automating more processes, our [n8n workflow development team](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** is happy to help. We can guide you through integrations, scaling or building end-to-end automation systems tailored to your business.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Jira Software, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
