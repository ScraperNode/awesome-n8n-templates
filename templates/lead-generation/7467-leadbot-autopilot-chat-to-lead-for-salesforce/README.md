# 🎣 LeadBot autopilot — chat-to-lead for Salesforce

> ⚡ **2,343 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# LeadBot Autopilot — Chat-to-Lead for Salesforce

## Description — How It Works
1. **Greets & Guides:** Welcomes the visitor and collects info step-by-step — Full Name → Email → Mobile → Product Interest.
2. **Validates Inputs:** Checks email/phone formats; politely re-asks if invalid.
3. **De-dupe in Salesforce:** Looks up by email; updates an existing lead if found.
4. **Create/Update Lead:** Writes to Salesforce, including `ProductInterest__c`.
5. **Notify Instantly:** Sends a Slack alert to your team and a personalized email to the prospect.
6. **Close the Loop:** Confirms submission and ends the chat.

## Description — Set Up Steps (≈45–75 mins)
- **Connect Credentials (20–30 mins):** Salesforce OAuth, OpenAI, Slack, SMTP.  
- **Tune the Prompt (5–10 mins):** Greeting, field order, product options.  
- **Map Fields (10–15 mins):** Name split, email/phone, `ProductInterest__c`.  
- **Smoke Test (10–15 mins):** Run a full chat; verify de-dupe, Slack + email.  
- **Go Live (5–10 mins):** Expose the webhook/chat entry point on your site.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
