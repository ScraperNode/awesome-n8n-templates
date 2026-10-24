# ⚒️ Route motorsports tech inspection results with OpenAI, Google Sheets, and Slack

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives motorsports tech-inspection submissions via webhook, scores each safety item against expiry rules, uses OpenAI to classify the overall outcome (Pass/Conditional/Fail/Disqualify), then posts results to a race-control timing API, archives to Google Sheets, and notifies Slack.

## How it works
1. Receives a POST request from a trackside tech-inspection app containing car details, inspector notes, and an array of safety-equipment items.
2. Splits the equipment array into individual items and calculates days-to-expiry and pass/fail per item based on class-specific renewal cycles.
3. Adds a human-readable class/rating label to each item and aggregates the per-item results back into a consolidated per-car compliance summary.
4. Sends the compliance summary and inspector notes to an OpenAI-powered text classifier to route the car into Pass, Conditional-Pass-Rework, Fail, or Disqualify.
5. Writes the chosen inspection category into an `inspectionCategory` field and routes to the matching outcome path.
6. For Pass outcomes, checks the provided grid-eligibility cutoff timestamp and posts a PASS result with a gridEligible flag to the race-control timing API.
7. For Conditional-Pass-Rework, Fail, and Disqualify outcomes, posts the corresponding result to the race-control timing API, escalates Disqualify to a chief-steward Slack channel, then appends the final result to Google Sheets and notifies the tech-inspection crew on Slack.

## Setup
1. Create an OpenAI credential and select it on the OpenAI Chat Model used by the inspection text classifier.
2. Create an HTTP Header Auth credential for your race-control timing system and replace the example API base URL in all HTTP Request steps.
3. Connect Google Sheets OAuth credentials, set the spreadsheet ID, and ensure the `Tech_Inspection_Archive` sheet exists for appending inspection logs.
4. Connect Slack credentials, set the chief-steward and tech-crew channel IDs, and confirm the workflow can post messages to both channels.
5. Copy the webhook URL for the `tech-inspection-submission` path into your trackside app and ensure the payload includes `equipmentItems`, `inspectorNotes`, `carNumber`, and `gridEligibilityCutoff` (plus any fields your timing payload expects).
6. Review and adjust the equipment expiry-cycle map in the code step (e.g., helmet/harness cycles) to match your sanctioning body’s rules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
