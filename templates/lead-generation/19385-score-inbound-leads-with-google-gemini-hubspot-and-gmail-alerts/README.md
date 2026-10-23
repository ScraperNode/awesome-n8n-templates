# 🎣 Score inbound leads with Google Gemini, HubSpot, and Gmail alerts

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures inbound form submissions, cleans and enriches the lead data, uses Google Gemini to score fit against your ideal customer profile, upserts the contact in HubSpot, and emails the sales owner via Gmail only when the lead meets a defined “hot” threshold.

## How it works
1. Receives a new inbound lead submission from an n8n Form trigger.
2. Normalizes the lead details by validating and lowercasing the email, extracting the company domain, detecting free email providers, and backfilling company/website when missing.
3. Sends the cleaned lead plus your ICP description to Google Gemini to return a JSON verdict with a fit score, segment, reasoning, and a suggested email opener.
4. Parses the model response defensively, calculates whether the lead is “hot” based on the score threshold, disqualification flag, and email validity, and falls back to a safe default if the response is unreadable.
5. If the email is valid, creates or updates the contact in HubSpot (matched by email) and writes the lead’s message, score, segment, and lifecycle stage to the contact properties.
6. If the lead is hot, builds an HTML alert and sends it to the configured sales owner via Gmail; otherwise it finishes without sending an alert.

## Setup
1. Create a HubSpot Private App token with `crm.objects.contacts.read` and `crm.objects.contacts.write` scopes and add it to an n8n HubSpot credential.
2. Add credentials for Google Gemini (Chat Model) and Gmail, and select the correct account for sending alerts.
3. In the configuration step, set `sales_owner_email`, `hot_score_threshold`, and your `icp_description` to match your routing rules.
4. Ensure your HubSpot account has the contact properties used in the upsert mapping (for example message, lead status, lifecycle stage, website, company, and phone).

## 🔗 Nodes Used

HubSpot, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
