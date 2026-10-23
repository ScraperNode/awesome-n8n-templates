# 💬 Route lead reply follow-up tasks by intent with Gmail, OpenAI, Pipedrive, and Slack

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for lead replies, looks up the sender in Pipedrive, uses OpenAI to classify the lead’s intent and urgency, then creates the appropriate Pipedrive follow-up activity, logs an AI analysis note, and notifies the deal owner via Slack and Gmail.

## How it works
1. Triggers every minute when a new email arrives in the Gmail inbox.
2. Extracts and cleans the sender name/email, subject, and message snippet for analysis.
3. Searches Pipedrive for a matching person using the sender’s email address and emails an internal reviewer if no match is found.
4. Sends the email details to OpenAI (GPT-4o) to classify intent, buying stage, sentiment, urgency, and recommended next action as JSON.
5. Normalizes the AI intent and routes the reply to the correct path (Meeting Request, Pricing Inquiry, Follow Up Later, or Not Interested).
6. Creates a corresponding Pipedrive activity (meeting, call, or mail) or marks the deal as lost for “Not Interested,” then adds a Pipedrive note with the full AI analysis.
7. Sends a Slack message to the deal owner with the AI summary and recommendation, then emails an internal summary with the same details.

## Setup
1. Connect Gmail OAuth2 credentials for both the Gmail Trigger (inbox monitoring) and Gmail nodes (sending the internal emails).
2. Connect a Pipedrive credential with permission to search persons, create activities, update deals, and create notes, and confirm your activity types (Meeting/Call/Mail) match your Pipedrive configuration.
3. Add an OpenAI credential (LangChain OpenAI node) and ensure the selected model (gpt-4o) is available in your account.
4. Connect Slack OAuth2 credentials and set the target Slack user (or adjust the node to post to a channel) for deal-owner notifications.
5. Update environment-specific fields such as the “lead not found” alert recipient email address and any variables used in the internal summary email (for example owner email/person/org fields if you want them populated from Pipedrive).

## Requirements
- ## AI Analysis Requirements
- Interested
- Meeting Request
- Pricing Inquiry
- Information Request
- Follow Up Later
- Not Interested
- Wrong Contact
- Competitor Mention
- Budget Constraint
- Project Delayed

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Pipedrive, Slack, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
