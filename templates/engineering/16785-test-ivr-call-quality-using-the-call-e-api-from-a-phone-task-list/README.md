# ⚒️ Test IVR call quality using the CALL-E API from a phone task list

> ⚡ **24 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Manually run two authorized IVR quality checks using CALL-E Calls API v2. The workflow processes calls sequentially and returns masked outcomes, structured results, transcripts, and metadata. Replace blocked placeholder numbers before live execution.

## How it works
1. Runs when you start the workflow manually.
2. Loads polling settings from CALL-E Config. The create node reads `CALL_E_API_KEY` from the n8n deployment environment or secret store and sends requests only to `https://api.heycall-e.com`.
3. Validates the E.164 phone/task rows and blocks the shipped placeholder numbers. Loop Over Calls processes one row at a time.
4. Builds one `phone` per `POST /v2/calls` request, with a required closed scalar `result_schema`, metadata, and an `Idempotency-Key` derived from the row ID and original call inputs.
5. Polls `GET /v2/calls/{id}` while `result_status=pending`, for up to four minutes. Polling stops for `available`, `unavailable`, or `not_applicable`; telephone completion alone does not mean the result is ready.
6. Reads `call_outcome`, `result_status`, `result`, `error`, the top-level `transcript`, and metadata. Formats a masked per-call result and an execution summary, including unavailable results without automatically redialing.

## Setup
1. Create a [CALL-E API key](https://dashboard.heycall-e.com/account/api-keys) and set `CALL_E_API_KEY` in your n8n deployment environment or secret store. Keep the key out of workflow JSON and Code-node item data.
2. Import the workflow and replace both blocked placeholders in Phone/Task List with owned or explicitly authorized E.164 test numbers. Review each row's task, locale, and metadata.
3. Review CALL-E Config: `pollIntervalSeconds` defaults to 5 (allowed 1–30); `waitTimeoutMinutes` defaults to 4 (maximum 4). Keep the workflow inactive until reviewed, then execute manually to place real calls. This template has no dry-run mode.

## Requirements
- Use a self-hosted n8n deployment where the administrator permits trusted Code nodes to read `CALL_E_API_KEY`. Environment access restrictions stop execution. No separate CALL-E community-node package is required.

## Customization
- Use a stable `callItemId` for each intended call. Re-running unchanged rows replays the original calls. Changing a row ID or call inputs changes the key and may place another call.

## Additional info
A wait timeout or stopped n8n execution does not cancel the call. Retain the API `id` and resume with `GET /v2/calls/{id}`. If creation acceptance is uncertain, replay only the original saved request and key. The template never automatically retries creation. Use `id` for API reads; `call_id` is a separate Billing identifier and may be null.

[Workflow source and recovery guide](https://github.com/CALLE-AI/awesome-phone-call-agents/tree/main/plugins/n8n-calle-api) · [CALL-E API reference](https://docs.heycall-e.com/api-reference)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
