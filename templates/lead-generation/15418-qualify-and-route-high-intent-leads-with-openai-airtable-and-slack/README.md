# 🎣 Qualify and route high-intent leads with OpenAI, Airtable and Slack

> ⚡ **92 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# LeadFlow AI: n8n Webhook + OpenAI + Airtable + Slack Lead Automation

This workflow captures leads via webhook, validates and deduplicates them, uses OpenAI to score and summarize intent and sends high-quality leads (score &gt; 70) to Airtable and Slack for immediate sales action.

### Quick Setup (Start in Minutes)

1. [Login to your n8n account and import this workflow](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Connect your form/API to the webhook endpoint  
3. Add Airtable credentials and select base/table  
4. Add OpenAI API credentials  
5. Connect Slack and choose a channel  
6. Activate workflow and test with sample data  


## What It Does

This workflow automates your entire lead handling process from capture to qualification and notification. When a new lead is submitted through a webhook, the system extracts and standardizes the data, ensuring all required fields are present and usable.

Next, it checks if the lead already exists in Airtable using the email address. If the lead is new, it is sent to an AI model that evaluates the message content and assigns a score, category (Hot/Warm/Cold) and a short summary.

Finally, only high-intent leads (score greater than 70) are stored in Airtable and instantly sent to Slack. This ensures your sales team focuses only on the most valuable opportunities without manual filtering.


## Who It's For

- Sales teams who want instant high-quality lead alerts  
- Marketing teams handling inbound leads from forms or ads  
- Agencies managing multiple client lead pipelines  
- Startups looking to automate lead qualification  
- Anyone using Airtable as a lightweight CRM  


## Requirements

To use this workflow, you need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- OpenAI API key
- Airtable account with:
  - Base created
  - Table with required fields
- Slack workspace with bot access
- A form or system that can send webhook POST requests  


## How It Works & Setup Guide

### Workflow Logic

1. **Webhook Trigger**
   - Receives lead data (`name`, `email`, `company`, `message`)

2. **Data Normalization**
   - Maps incoming fields into structured format

3. **Validation**
   - Ensures email exists and message length &gt; 10 characters

4. **Deduplication**
   - Searches Airtable using email
   - Only new leads move forward

5. **AI Scoring**
   - OpenAI analyzes message
   - Returns:
     - Score (0–100)
     - Category (Hot/Warm/Cold)
     - Summary

6. **Safety Parsing**
   - Ensures valid JSON output
   - Applies fallback if AI response fails

7. **Filtering**
   - Only leads with score &gt; 70 proceed

8. **Storage + Notification**
   - Saves lead in Airtable
   - Sends Slack notification instantly


### Setup Steps

1. **Webhook Setup**
   - Copy webhook URL from n8n
   - Connect it to your form/API

2. **Airtable Setup**
   - Create base and table
   - Add fields:
     - Name, Email, Company, Message
     - Lead Score, Lead Category, AI Summary
   - Connect Airtable credentials in n8n

3. **OpenAI Setup**
   - Add API key in credentials
   - Ensure model (gpt-4o-mini) is selected

4. **Slack Setup**
   - Connect Slack account
   - Select channel for notifications

5. **Test & Activate**
   - Send test webhook
   - Verify Airtable + Slack outputs
   - Activate workflow


## How To Customize Nodes

- **Validation Node**
  - Adjust message length or add more conditions (e.g., required company)

- **AI Prompt**
  - Modify scoring rules or summary format
  - Add industry-specific logic

- **Score Filter**
  - Change threshold (e.g., 60 instead of 70)

- **Slack Message**
  - Add email, message or direct contact link

- **Airtable Fields**
  - Add tags, source, campaign tracking


## Add-ons (Enhancements)

- Send email alerts for hot leads  
- Add CRM integrations (HubSpot, Salesforce)  
- Store rejected leads separately  
- Add lead source tracking (UTM parameters)  
- Auto-assign leads to sales reps  
- Add follow-up automation workflows  


## Use Case Examples

1. Website contact form lead qualification  
2. Facebook/Google Ads lead filtering  
3. SaaS demo request prioritization  
4. Agency client lead routing system  
5. Freelancer inquiry management  

And many more use cases depending on your business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|------|------|
| No data in Airtable | Field mapping issue | Check field names and mappings |
| Slack not sending messages | Wrong channel or credentials | Reconnect Slack and verify channel |
| AI output parsing fails | Invalid JSON from AI | Check prompt and parser fallback |
| Duplicate leads processed | Airtable filter issue | Verify email matching formula |
| Workflow not triggering | Webhook not connected | Recheck webhook URL and method |


## Need Help?

If you need help setting up, customizing or extending this workflow, our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at **WeblineIndia** can assist you.

We can help you:
- Customize AI scoring logic  
- Integrate with advanced CRMs  
- Build complete lead automation systems  
- Add analytics and reporting  

[Feel free to reach out to build powerful automation workflows tailored to your business](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Airtable, Slack, Webhook, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
