# 🤝 Review and fix HubSpot deal pipeline hygiene with TypeSafe Jev and Gmail

> ⚡ **43 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every Monday and scans a HubSpot deal pipeline for hygiene issues and expansion opportunities, optionally using TypeSafe Jev to recommend fixes. It emails a Gmail approval form, then applies only the reviewer-approved updates back to HubSpot and sends a results summary.

## How it works
1. Runs every Monday at 08:00 and loads the configured HubSpot pipeline, portal details, and deal owners.
2. Searches HubSpot for all deals in the selected pipeline and gathers Closed Won deal-to-company associations to identify existing clients.
3. Applies rules to flag open deals with issues (for example past/missing close dates, staleness, stuck stages, missing amount/owner/contact) and to find companies eligible for an expansion conversation.
4. For each flagged item, fetches the latest associated HubSpot note and (if enabled) sends the deal/client context to TypeSafe Jev to choose a recommended action with a confidence score, falling back to deterministic rules when Jev is disabled or unavailable.
5. Sends a Gmail message containing a review form with one checkbox per proposed fix, preselecting higher-confidence recommendations, and waits up to the configured review window for a response.
6. Matches the reviewer’s selections to the proposed fixes and applies only the approved changes in HubSpot (updating deals, creating tasks, or creating expansion deals), then emails a results summary (or a “no changes” message if nothing is approved).

## Setup
1. Create a HubSpot private app (or service key) with the required scopes and add it to n8n as a HubSpot App Token credential.
2. Connect a Gmail OAuth2 account to send the review email, wait for the form response, and send result/failure notifications.
3. (Optional) Add a TypeSafe Jev API key as an HTTP Header Auth credential (Authorization: Bearer <key>) or set `useJev` to false to use the built-in rules only.
4. Update the Settings values for `pipelineId` and `reviewerEmail`, and adjust thresholds like `staleDays`, `stuckDays`, `expansionAfterDays`, and `reviewWindowDays` as needed.
5. Set the recipient address in the failure-alert email so workflow errors are reported to the right inbox.

## 🔗 Nodes Used

HTTP Request, Gmail, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
