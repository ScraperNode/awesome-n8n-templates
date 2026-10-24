# 🎣 Score and route B2B leads with Google Gemini, Google Sheets, Slack, and Gmail

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow accepts new leads via a webhook, validates and deduplicates them in Google Sheets, enriches contact and company details via HTTP APIs, scores the lead with Google Gemini, then saves the result back to Google Sheets and notifies the team via Slack and Gmail based on the lead tier.

## How it works
1. Receives a lead submission via a POST webhook endpoint.
2. Extracts the form fields, normalizes key values (like email and website), and validates that required fields are present.
3. Looks up the lead by email in Google Sheets and only continues if no existing record is found.
4. Fetches contact and company enrichment data from external HTTP endpoints and maps the responses into structured enrichment fields.
5. Merges the original lead data with enrichment details, builds a scoring prompt, and sends it to Google Gemini to return a JSON score, tier, summary, reasons, confidence, and recommended action.
6. Parses the Gemini JSON response, merges it back into the lead profile, and routes the lead into Hot, Warm, or Cold.
7. Appends the tiered lead record to Google Sheets with the appropriate status and sends matching Slack and Gmail notifications.

## Setup
1. Configure the webhook URL (path: `lead-intake`) in your lead capture form or source system.
2. Add Google Sheets credentials and update the spreadsheet/document IDs and sheet tab for the duplicate check and the Hot/Warm/Cold “append row” actions.
3. Add a Google Gemini (PaLM) API credential and confirm the model selection and scoring prompt meet your qualification rules.
4. Add Slack and Gmail credentials, then set the target Slack channel and recipient email addresses used for Hot/Warm/Cold notifications.
5. Replace the placeholder enrichment URLs (`dummyjson.com` and `jsonplaceholder.typicode.com`) with your real enrichment providers, and adjust the field mappings to match their response format.

## Additional info
## How To Customize Nodes

You can customize this workflow in several practical ways without changing the overall design:

- Replace `Fetch Contact Test Data` with a real contact enrichment API and update `Map Contact Enrichment` to match that provider’s response.
- Replace `Enrich Company Data` with a real company intelligence source and update `Map Company Enrichment` as needed.
- Edit `Build AI Scoring Payload` to change the lead qualification criteria or tier thresholds.
- Update the prompt in `Score Lead With AI.` if your business wants different scoring logic, industry preferences, or decision-maker weighting.
- Modify the `Score Router` conditions if you want to use different tier labels.
- Replace the Google Sheets storage nodes with CRM nodes if your team wants to store leads in another system.
- Edit the Slack and Gmail message content in each tier branch so the follow-up matches your sales or marketing style.
- Adjust the duplicate check logic in `Find Existing Lead` if you want to match by phone, domain, or another unique field instead of email only.


## Add-ons

This workflow can be extended with additional features such as:

- A CRM sync step after each Google Sheets append action.
- Lead owner assignment based on territory, source, or score.
- A retry path for failed enrichment or notification nodes.
- Separate nurturing sequences for Warm and Cold leads using email automation tools.
- A reporting dashboard based on the Google Sheets output.
- An audit log or error log for failed validations, duplicate leads, or API issues.
- A human approval step before Hot leads are sent to the sales team.


## Use Case Examples

This workflow can support several business scenarios, including:

- Scoring demo request leads before handing them to a sales team.
- Qualifying website contact form submissions for B2B services.
- Prioritizing inbound product inquiries based on company fit and buying intent.
- Sending lower-value or lower-confidence leads into nurture instead of direct sales follow-up.
- Creating a lightweight lead qualification system for teams that use Google Sheets instead of a CRM.

There can be many more use cases depending on your lead source, scoring rules, and follow-up process.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :-- | :-- | :-- |
| Webhook does not receive lead data | The external form is not sending a POST request to the correct webhook path | Verify the form points to the `lead-intake` webhook URL and sends JSON data.  |
| Lead stops after validation | Required fields such as email, full name, or company are missing or invalid | Review `Set Lead Fields` and `Validate Lead Input.` and confirm the incoming payload uses the expected field names.  |
| Duplicate check is not working | The Google Sheet does not contain the expected `email` column or the wrong sheet is selected | Confirm the spreadsheet, sheet, and lookup column used in `Find Existing Lead`.  |
| Enrichment data looks incorrect | The workflow uses test HTTP endpoints rather than real business data providers | Replace the test endpoints and update the related mapping nodes to match the new API responses.  |
| AI scoring fails or returns unusable output | Gemini credentials are missing or the response format does not match the parser expectations | Check the Google Gemini credential, review the prompt in `Score Lead With AI.`, and make sure the parser still matches the returned JSON format.  |
| Lead does not route to Hot, Warm, or Cold | `lead_tier` is missing or does not match the exact values expected by `Score Router` | Confirm that `Parse AI Score.` returns one of these exact values: Hot, Warm, or Cold.  |
| Google Sheets append fails | Credentials are not connected or the destination sheet schema does not match the mapped fields | Reconnect the Google Sheets credential and verify the target sheet includes the columns used in the append nodes.  |
| Slack messages are not delivered | Slack credentials are invalid or the configured channel is not correct | Reauthorize the Slack account and verify the selected channel in each Slack node.  |
| Gmail messages are not sent | Gmail credentials are missing or the recipient address is not appropriate for production | Reconnect Gmail and update the send-to addresses in each Gmail node.  |
| Lead data in Google Sheets looks inconsistent | Some mapped fields use values from enrichment while others use values from the original lead object | Review the field mappings in the three Google Sheets storage nodes and align them with the data source you want to trust.  |


## Need Help

If you want help setting up this workflow, replacing the test enrichment services, refining the Gemini prompt, connecting it to your own lead sources, extending it with custom add-ons or to [hire n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/), WeblineIndia can help. 

WeblineIndia can also assist in building similar n8n workflows for lead management, AI scoring, CRM automation, notifications and business process automation based on your exact requirements.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
