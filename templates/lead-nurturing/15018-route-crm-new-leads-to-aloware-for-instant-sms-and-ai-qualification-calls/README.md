# 💬 Route CRM new leads to Aloware for instant SMS and AI qualification calls

> ⚡ **50 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Description
Connect your CRM to Aloware so every new lead gets an instant SMS and is routed to the right AI-powered follow-up sequence — all within seconds of form submission.
Speed-to-lead is everything. Studies show responding within 5 minutes makes you 100x more likely to connect. This workflow eliminates the gap between "lead submitted" and "rep reached out" by automating the entire handoff from your CRM to Aloware's voice and SMS platform.

## How it works

1. A Webhook receives new lead data from your CRM (HubSpot, Salesforce, Pipedrive, or any system that can POST JSON).
2. A Set node normalizes the payload — it pulls phone, name, email, company, lead score, and source from whichever field structure your CRM sends, so you don't have to rewrite the workflow per CRM.
3. An HTTP Request creates or updates the contact in Aloware via the /webhook/forms endpoint, storing lead source and score as custom fields.
4. A second HTTP Request fires a personalized SMS to the lead within seconds: "Hi {name}! Thanks for your interest in {company}…"
5. An IF node checks the lead score against your configurable threshold (default: 70).
	- Hot leads (score ≥ threshold) → enrolled in an AI Qualification Sequence that places an automated call to qualify the lead immediately.
	- Warm leads (score &lt; threshold) → enrolled in a Nurture Sequence for drip SMS follow-up.



## How to use

1. Import the JSON into n8n.
2. Go to Settings → Variables and add: ALOWARE_API_TOKEN, ALOWARE_LINE_PHONE, ALOWARE_HOT_SEQUENCE_ID, ALOWARE_NURTURE_SEQUENCE_ID, LEAD_SCORE_THRESHOLD, and COMPANY_NAME.
3. In Aloware, create two Sequences (one for hot-lead AI qualification calls, one for warm-lead nurture SMS) and copy their IDs into the variables above.
4. Copy the Webhook URL from the trigger node and paste it into your CRM's automation (HubSpot Workflow → Webhook action, Salesforce Process Builder, Pipedrive Automations, etc.).
5. Toggle the workflow to Active and submit a test lead.

## Requirements

Aloware account with API access and at least one outbound line
CRM capable of sending webhook POSTs on new lead creation (HubSpot, Salesforce, Pipedrive, etc.)

## Customising this workflow

- Edit the SMS copy directly in the "Aloware: Send Instant Lead SMS" node — use {{ $json.leadFirstName }} and {{ $vars.COMPANY_NAME }} for personalization.
- Add more routing branches (e.g., a "cold" path for leads with score &lt; 30) by adding IF nodes after the existing split.
- Swap the CRM webhook for a Facebook Lead Ads or Google Ads trigger to capture paid leads directly.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
