# 🧾 Handle failed payment renewals with AI analysis, Jira tickets and Slack alerts

> ⚡ **28 views** · 🧾 [Invoice Processing](../)

## Description

# Webhook from Payment Provider → Jira Finance Ticket → Slack Invoice Follow-up Automation

This workflow automates failed subscription renewal processing by validating webhook data, using AI to analyze urgency and churn risk, creating a Jira Finance Task and notifying the finance team via Slack. If required fields are missing, it sends an error alert for manual review instead.

### ⚡ Quick Implementation Steps (Start Using in 60 Seconds)

1. Import workflow JSON into n8n.
2. Add Jira & Slack credentials.
3. Configure webhook URL `/payment-failed-renewal` in payment provider.
4. Test with:  
```json
{ "customerId": "C-101", "customerEmail": "user@example.com", "subscriptionId": "S-500", "amount": 39.99 }
```
5. Activate workflow.

## What It Does

This automation connects your payment system with your financial operations. When a subscription renewal fails, the payment provider sends a webhook. The workflow validates the fields, uses OpenAI to analyze the payment failure reason (determining urgency & churn risk), routes high-value failures to high priority, creates a Jira task with an AI-drafted recovery email and alerts the finance team on Slack.

If required data is missing, the workflow prevents incomplete Jira tickets by routing the event to an error handler and sending a detailed Slack alert listing all missing fields and full payload for manual inspection.

## Who’s It For

- Finance & billing departments  
- SaaS companies with recurring billing  
- Teams using Jira for billing operations  
- Slack-based financial support teams  
- Companies wanting automated revenue recovery workflows  

## Requirements to Use This Workflow

- n8n instance
- OpenAI API Key (or compatible LLM credential)
- Jira Software account with permissions for FIN project
- Slack bot token with channel posting rights
- Payment provider that supports POST JSON webhooks
- Webhook configured to: `https://YOUR-N8N-URL/webhook/payment-failed-renewal`

## How It Works & How To Set Up

### Step-by-Step Flow

1. Webhook receives payment failure payload.
2. Validation node checks required fields:  
   - `customerId`  
   - `customerEmail`  
   - `subscriptionId`  
   - `amount`
3. **AI Analysis**: OpenAI analyzes failure reason, sets urgency, and drafts email.
4. **Logic**: Switch node routes High Value (&gt;$500) to 'High' priority.
5. Jira Finance Task created (with AI draft).
6. Slack message sent (with Churn Risk score).

### Setup Steps

#### Step 1 — Webhook Setup
- Method: POST  
- Path: `payment-failed-renewal`

#### Step 2 — Jira Setup
- Select Jira credentials in **Create Jira Finance Ticket** node.
- Ensure:  
  - Project: FIN  
  - Issue type: Task  

#### Step 3 — Slack Setup
- Add Slack credentials to both Slack nodes.
- Select finance alert channel.

#### Step 4 — OpenAI Setup
- Add OpenAI credentials in the **AI Analysis** node.

#### Step 5 — Test
```json
{
  "customerId": "CUST-001",
  "customerEmail": "billing@example.com",
  "subscriptionId": "SUB-1001",
  "amount": 19.99
}
```

#### Step 6 — Activate
Enable the workflow.

## How To Customize Nodes

### Webhook
- Add Basic Auth  
- Add token-based security  
- Add JSON schema validation  

### Validate Payload
Enhance with:
- Email format validation  
- Numeric validation for amount  
- Auto-fallback values  

### Jira Node
Customize:
- Ticket summary structure  
- Labels (`billing-recovery`, `urgent`, etc.)  
- Add custom fields  
- Change issue type or project  

### Slack Nodes
Enhance:
- Mentions: `@finance-team`  
- Threads instead of channel posts  
- Rich blocks, buttons, or attachments  

## Add-ons (Optional Enhancements)
- Automated email to customer for payment recovery  
- Retry count–based escalation (e.g., retry ≥ 3 → escalate to manager)  
- Log data to Airtable / Google Sheets  
- Sync events into CRM (HubSpot, Salesforce, Zoho)  
- Notify Sales for high-value customer failures  

## Use Case Examples
1. Stripe renewal payment fails → Create Jira task → Slack finance alert.  
2. Chargebee retry attempts exhausted → Notify billing team immediately.  
3. Declined credit card → Jira ticket with failure reason.  
4. Razorpay/PayPal renewal failure → Automated follow-up.  
5. Webhook missing data → Slack error alert ensures nothing is silently ignored.  

## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Webhook not triggering | Wrong URL / method | Use POST + correct endpoint |
| Jira ticket missing | No permissions or invalid payload | Check Jira permissions + required fields |
| Slack shows undefined values | Missing fields in payload | Confirm payload structure |
| Error alert triggered incorrectly | Field names mismatch | Match exact names: customerId, customerEmail, subscriptionId, amount |
| Payment provider not sending events | Firewall/CDN blocking | Whitelist the n8n webhook URL |
| Workflow silent | Not activated | Turn workflow ON |

## Need Help?
If you want help customizing this workflow or extending it into a complete revenue recovery automation suite:

[WeblineIndia](https://www.weblineindia.com/) can support you with:
- Jira & Slack automation pipelines  
- Payment provider webhook integrations  
- Finance workflow optimization  
- AI-based billing insights  
- End‑to‑end automation solutions  

Reach out anytime for expert implementation or enhancements.

## 🔗 Nodes Used

Function, Slack, Webhook, Jira Software, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
