# 🎫 Route Gmail support emails to Zendesk with spam filtering and duplicate checks

> ⚡ **43 views** · 🎫 [Ticket Management & Triage](../)

## Description

# (Retail Automation) Gmail Trigger → Spam Filter → Duplicate Check → Zendesk Ticket Creation

This workflow automatically converts incoming support emails from Gmail into structured Zendesk tickets. It filters spam, extracts key customer details, auto-tags issues, prevents duplicate tickets and creates clean, actionable support tickets in Zendesk.

### Quick Implementation Steps
1. Connect your Gmail support inbox to the Gmail Trigger.
2. Configure spam keywords and domains in the Spam Detection node.
3. Map email fields in the Set node.
4. Connect your Zendesk account.
5. Activate the workflow.


## What It Does

This workflow listens for new emails arriving in a Gmail support inbox and immediately processes them through a clean automation pipeline. Spam or suspicious emails are filtered early to keep the support system noise-free.

Valid emails are normalized by extracting customer details such as name, email, subject, message content and thread ID. The workflow automatically tags tickets based on keywords like “refund” or “damaged” for better prioritization.

Before creating a new ticket, the workflow checks existing Zendesk tickets to avoid duplicates. Only genuine, new requests are converted into Zendesk tickets with all required fields populated.


## Who’s It For

- Customer support teams using Gmail and Zendesk  
- Small to mid-sized businesses handling email-based support  
- Operations teams looking to reduce manual ticket creation  
- Support managers who want clean, duplicate-free ticket queues  


## Requirements

- n8n instance (self-hosted or cloud)
- Gmail account with access to the support inbox
- Zendesk account with API access enabled
- OAuth credentials for Gmail and Zendesk


## How It Works & How To Set Up

### Step-by-Step Setup

1. **Gmail Trigger**  
   Connect your Gmail account and monitor the support inbox for new emails.

2. **Spam Detection & Filtering**  
   Configure spam keywords and disposable email domains. Spam emails are stopped immediately.

3. **Extract & Normalize Email Data (Set Node)**  
   Extract customer name, email, subject, message snippet, thread ID, received time and initial tags.

4. **Auto-Tag Ticket Based on Email Content**  
   Scan the email body and apply tags like `refund`, `damaged` or `late_delivery`.

5. **Fetch Existing Zendesk Tickets**  
   Retrieve current tickets to provide historical context.

6. **Merge & Detect Duplicates**  
   Compare email subject with existing tickets to detect duplicates.

7. **Create Zendesk Ticket**  
   If no duplicate is found, create a new Zendesk ticket with structured data.


## How To Customize Nodes

- **Spam Detection Node**: Add or remove keywords and domains.
- **Tagging Code Node**: Extend keyword-to-tag mappings.
- **Set Node**: Map additional email fields if needed.
- **Zendesk Node**: Adjust priority, status or add custom fields.


## Add-ons

- Route VIP customers to priority queues.
- Assign tickets based on keywords or tags.
- Fetch order details from an eCommerce system.
- Send Slack or Email notifications to agents.


## Use Case Examples

- Converting customer order issues into Zendesk tickets.
- Filtering marketing or spam emails automatically.
- Preventing duplicate tickets from email replies.
- Auto-tagging refund and damaged item requests.
- Centralizing Gmail-based support into Zendesk.

*(There are many more ways this workflow can be extended.)*


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-----|--------------|----------|
| Tickets not created | Duplicate detected | Check subject matching logic |
| Spam emails passing through | Missing keywords | Add more spam keywords/domains |
| Empty fields in Zendesk | Incorrect Set mappings | Verify field expressions |
| OAuth errors | Expired credentials | Reconnect Gmail/Zendesk account |


## Need Help?

Need help setting this up or extending it further?

Our n8n workflow development experts at **WeblineIndia** can help you customize this workflow, add advanced automations or even build similar n8n workflows tailored to your business needs. Reach out to our experts to get started faster and smarter.

## 🔗 Nodes Used

Zendesk, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
