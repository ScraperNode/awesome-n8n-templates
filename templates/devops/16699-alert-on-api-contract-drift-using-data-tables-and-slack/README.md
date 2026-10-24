# ⚙️ Alert on API contract drift using Data Tables and Slack

> ⚡ **31 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on a schedule, polls a JSON API endpoint, derives and stores a snapshot of the response schema in an n8n Data Table, and posts a Slack alert only when the response structure or field types change.

## How it works
1. Runs every 6 hours on a schedule.
2. Loads the configured API endpoint URL, an endpoint key used for snapshotting, and the target Slack channel.
3. Fetches the endpoint with retries and skips the run if the response is not a valid JSON object or array.
4. Derives a normalized schema (field paths, types, required/optional, and nullability) and compares it to the previous schema stored in an n8n Data Table.
5. Upserts the latest schema snapshot back into the n8n Data Table under the same endpoint key.
6. Posts a formatted drift report to Slack only when a high- or medium-severity contract change is detected.

## Setup
1. Create an n8n Data Table (for example, “API Contract Snapshots”) with text columns named `endpointKey` and `schema_object`, and select its ID in both the read and upsert steps.
2. Add a Slack API credential in n8n.
3. Update the Settings values for `endpointUrl`, `endpointKey`, and `slackChannel` (Slack channel ID) to match your API and destination channel.
4. Run the workflow once to seed the initial schema snapshot, then activate it to start monitoring.

## Requirements
- n8n version recent enough to include Data Tables (built in, no community node)
- A Slack credential (OAuth2, or a bot token with chat:write)
- An HTTP or JSON endpoint to watch (ships pointed at a free no-key public endpoint, so it runs as-is)

## Customization
- Change the polling interval in the Schedule Trigger (every 6 hours by default)
- Watch several endpoints by giving each its own endpointKey and sharing one Data Table
- Lower the alert gate to also surface low-severity changes (a new optional field)
- Point it at an OpenAPI JSON document instead of a data endpoint to track the spec's structure
- Watch a private API by switching the HTTP Request authentication and adding a token credential
- Add a small LLM step to turn the change list into a plain-English impact note
- Send the alert to an on-call tool such as PagerDuty, Opsgenie, or Twilio SMS alongside Slack

## Additional info
The workflow ships pointed at a free no-key public endpoint (jsonplaceholder), so a reviewer can run it end to end on import with only a Slack credential and no API key. Three design choices keep it quiet and safe: value-churn suppression (only structural and type changes alert, never changed values or list length), idempotency (each drift is reported once, then the snapshot refreshes), and a safe skip on a failed or non-JSON fetch so a bad response never overwrites the saved shape or raises a false alarm. All sample data is fictional and no real credentials, IDs, or endpoints are included.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
