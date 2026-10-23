# 🔒 Check JWT security of API endpoints with HTTP requests and Google Sheets

> ⚡ **23 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow reads API endpoints and JWTs from Google Sheets, tests each endpoint with multiple token scenarios using HTTP requests, and writes a risk-scored security summary back to Google Sheets.

## How it works
1. Triggers manually (or on an optional daily schedule).
2. Loads the target Google Sheets document ID and the endpoint/results tab names.
3. Reads endpoint definitions from Google Sheets and keeps only rows marked as active.
4. For each endpoint, decodes the provided JWT and generates test variants (no auth, tampered payload, and alg:none).
5. Sends HTTP requests to the endpoint using the valid token and, if that succeeds, repeats the request with each test token variant and captures the response status codes.
6. Evaluates the status codes and token metadata to flag issues (for example, unauthenticated access, tampered token acceptance, alg:none acceptance, or missing exp) and assigns a risk level.
7. Appends the timestamped results and summary to the results tab in Google Sheets.

## Setup
1. Create a Google Sheet with an endpoints tab containing columns like `label`, `endpoint_url`, `method`, `token`, and `active`, and a results tab with columns like `timestamp`, `label`, `risk_level`, `t1_valid`, `t2_no_auth`, `t3_tampered`, `t4_alg_none`, and `summary`.
2. Add a Google Sheets Service Account credential in n8n and share the spreadsheet with the service account email.
3. Update the Sheet ID and tab names in the workflow’s variables (Sheet ID, endpoints sheet name, and results sheet name).
4. Ensure each endpoint row includes a valid JWT in the `token` column and set `active` to TRUE for endpoints you want to test.
5. If you want it to run automatically, enable the schedule trigger and adjust the cron expression as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
