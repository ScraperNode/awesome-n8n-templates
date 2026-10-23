# 🔧 Analyze event scans and kit pickups with HTTP webhooks

> ⚡ **11 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This starter workflow for n8n Community Challenge 04 fetches case, scan, and kit datasets from an n8n-hosted HTTP API, then guides you to compute three answers (first accepted scan, busiest session, and uncollected kits) and optionally submit them back to the API for validation.

## How it works
1. Runs manually to start the challenge workflow.
2. Stores your participant username, participant key, and the challenge API base URL.
3. Retrieves the case data and the scans dataset from the challenge API via HTTP requests.
4. Splits the scans dataset into individual rows so you can filter and aggregate to find the earliest ACCEPTED scan for Stage 1 and the busiest session for Stage 2.
5. Uses your Stage 2 session result to request the kits dataset for that session from the challenge API and splits it into individual kit rows.
6. Expects you to filter and summarize the kit rows to count CONFIRMED attendees who requested a kit but have not picked it up for Stage 3.
7. Optionally posts each stage answer to the challenge API check endpoint (disabled by default) to validate your results.

## Setup
1. Enter your challenge username and participant key in the Settings values used by the HTTP requests.
2. If you are using the private preview environment, add an HTTP Basic Auth credential to each HTTP Request node.
3. Build the missing filter/sort/grouping logic with native n8n nodes and map your computed results into the Stage 1/2/3 answer fields before enabling the stage check requests.

## Requirements
- Create an account here: https://community.n8n.io/

## Customization
- Swap Your Username & Participant Key to Proceed

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
