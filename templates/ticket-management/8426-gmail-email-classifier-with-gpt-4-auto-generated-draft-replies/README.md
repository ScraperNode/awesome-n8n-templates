# 🎫 Gmail email classifier with GPT-4 auto-generated draft replies

> ⚡ **986 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How It Works
This workflow automatically classifies incoming Gmail messages into categories such as **High Priority**, **Inquiry**, and **Finance/Billing**, and then generates professional draft replies using **GPT-4**. By combining Gmail integration with AI-powered text generation, the workflow helps business owners and freelancers reduce the time spent managing emails while ensuring that important messages are handled quickly and consistently.

When a new email arrives, the workflow:
1. Triggers via Gmail.
2. Uses an AI classifier to categorize the message.
3. Applies the appropriate Gmail label.
4. Passes the email body to GPT-4 to generate a tailored draft reply.
5. Saves the draft in Gmail, ready for review and sending.

## Requirements
- A Gmail account with API access enabled.  
- An OpenAI API key with GPT-4 access.  
- n8n account or self-hosted instance.  

## Setup Instructions
1. Import this workflow into your n8n instance.  
2. Under **Credentials**, connect your Gmail account and OpenAI API key.  
3. Replace placeholder `YOUR_LABEL_ID_XXX` values with your Gmail label IDs (obtainable via Gmail → List Labels).  
4. Execute the workflow and check that draft replies are generated in your Gmail account.  

## Customization
- Add or edit categories to fit your business needs (e.g., “Sales Leads” or “Support”).  
- Adjust the GPT-4 prompts inside each “Generate Draft” node to match your preferred tone and style.  
- Combine with other workflows (e.g., CRM integration, Slack alerts) for a complete email automation system.  

This template is especially useful for **small businesses and freelancers** who want to save time, improve response speed, and maintain professional communication without manually writing every reply.

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI Chat Model, OpenAI, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
