# ⚙️ Log workflow failures to Google Sheets and send Telegram alerts

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This companion error workflow captures failed n8n executions, logs each failure as a row in a Google Sheets “Error Log” tab, and sends a Telegram alert with the failing node, error details, and a link to the execution.

## How it works
1. Triggers when the assigned n8n workflow execution fails via the Error Trigger.
2. Builds a standardized error record including the last executed node, error code/message, execution URL, and timestamp.
3. Appends the error record as a new row in a Google Sheets tab named “Error Log.”
4. Sends a Telegram message containing the formatted failure summary and next-step guidance.
5. If the Google Sheets append fails, sends an alternate Telegram message noting that the Error Log row was not written.

## Setup
1. Add Google Sheets credentials and select the target spreadsheet in the Google Sheets append step.
2. Create an “Error Log” sheet tab with columns: template, correlation_id, status, stage, summary, entity_type, entity_id, error_code, error_message, error_node, execution_url, and timestamp.
3. Add Telegram credentials and set the target chat ID in both Telegram message steps.
4. In the main workflow, set this workflow as its Settings → Error Workflow so failures are routed here.

## Requirements
- Google Sheets OAuth and a Telegram bot

## Customization
- Change the template value in Prepare Error Record to reuse it for another workflow. Swap Telegram for another chat or email node, and keep the second alert so a failed sheet write is never silent.

## Additional info
For anyone running a production n8n workflow who wants to hear about failures the per-node error branches can't catch: timeouts, crashes between nodes, and nodes with no error output. Need this built and run for your business? See the lead to reply system: https://signalnine.io/systems/lead-to-reply?utm_source=n8n-template&utm_medium=template&utm_campaign=growth-listings&utm_content=revenue-lifecycle-engine-errors-desc

## 🔗 Nodes Used

Google Sheets, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
