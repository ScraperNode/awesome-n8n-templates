# 🔬 Detect procurement workflow gaps with Google Sheets, OpenAI, and Gmail

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches procurement events in Google Sheets, validates and normalizes each entry, checks the procurement’s lifecycle state to detect missing required steps, and then uses OpenAI to recommend a recovery action, logs results back to Google Sheets, and notifies stakeholders via Gmail.

## How it works
1. Triggers every minute when a new or updated row appears in the “Procurement Events” Google Sheets tab.
2. Normalizes key fields (IDs, event type/status, timestamps, amount, currency, and email addresses) and stops early by writing an error result back to Google Sheets if required fields are missing.
3. Looks up the current procurement’s workflow state in the “Workflow State” sheet and loads the required lifecycle steps from the “Procurement Steps” sheet.
4. Compares completed steps (including the current event) with required steps to identify missing steps and determine whether a workflow gap exists.
5. If a gap is detected, logs the gap to the “Gap Log” sheet and sends the gap context to OpenAI to generate a structured recovery recommendation.
6. Validates the OpenAI response and routes it to either a recovery task or a manual review task, writing the result to the “Workflow Results” sheet.
7. Sends a Gmail notification to the requester with the missing step and recommended action so the procurement workflow can be corrected.

## Setup
1. Create and populate a Google Sheets spreadsheet with tabs and columns that match the workflow’s configuration: “Procurement Events”, “Workflow State”, “Procurement Steps”, “Gap Log”, and “Workflow Results”.
2. Add Google Sheets credentials in n8n and update the spreadsheet ID and sheet/tab selections in all Google Sheets nodes to point to your document.
3. Add an OpenAI API credential and confirm the selected model (gpt-4.1-nano) is available for your account.
4. Add a Gmail credential with permission to send email, and ensure your input rows include a valid requester_email value for notifications.

## Additional info
## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|---|---|---|
| Procurement event does not enter the workflow | Google Sheets Trigger is not configured correctly or the workflow is inactive | Verify the Google Sheets Trigger configuration and make sure the n8n workflow is active |
| Event is rejected as invalid | `event_id`, `procurement_id`, or `event_type` is empty | Check the Procurement Events sheet and provide all three required fields |
| Workflow state is not retrieved | No matching `procurement_id` exists in Workflow State | Add or update the corresponding procurement workflow state record |
| No lifecycle steps are detected | Procurement Steps does not contain valid required steps | Verify `step_key`, `step_name`, `step_order`, `owner_role`, `success_event_type`, and `required` values |
| A lifecycle step is ignored | The step does not have `required = yes` | Update the required field in Procurement Steps |
| AI recommendation fails | OpenAI credential, model configuration, or response format is invalid | Verify the OpenAI credential, selected model, and AI node configuration |
| AI response is treated as manual review | The AI response is not valid JSON or contains an unsupported action | Review the AI prompt and response structure |
| Recovery route is unsupported | The missing step does not exist in the supported recovery route configuration | Add the required recovery step to the `allowedSteps` object or use manual review |
| Recovery task is not created | Recovery route validation did not return a valid route | Review `route_status`, `missing_step_key`, and the supported recovery routes |
| Manual-review task is created unexpectedly | AI response failed validation or the recovery step is unsupported | Review the recommendation and route-validation output |
| Email is not sent | Gmail credential or requester email is unavailable | Verify the Gmail credential and the `requester_email` value |
| Email goes to the wrong recipient | The requester email in the procurement event is incorrect | Verify `requester_email` in Procurement Events |
| Workflow results are missing | The relevant Google Sheets node cannot write to Workflow Results | Verify Google credentials, sheet access, and column mappings |
| Gap Log is not updated | Gap logging node cannot access or write to the Gap Log sheet | Verify the spreadsheet, sheet name, credentials, and column mappings |
| Procurement state appears incorrect | Workflow State data does not match the procurement ID or contains unexpected values | Review the Workflow State record and completed-step information |
| Amount is incorrect | Amount is converted using the JavaScript `Number()` conversion | Verify that the source amount contains a valid numeric value |
| Currency defaults unexpectedly | Currency is empty in the source event | Provide the required currency value in Procurement Events |
| Notification status remains pending | The workflow result is created before notification completion | Check the Gmail node execution and downstream workflow execution status |

## 🔗 Nodes Used

Google Sheets, Gmail, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
