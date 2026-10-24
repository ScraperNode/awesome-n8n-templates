# 🔬 Save lab results as FHIR LOINC Observations with optional Slack alerts

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Receives lab results by webhook, validates them, maps each test to a LOINC-coded FHIR R4 Observation, and saves it with duplicate protection. Critical results can trigger a Slack alert without patient identifiers. Reference and panic ranges are configurable demo examples.

## How it works
1. Receives a POST request on the `/lab-result` webhook containing a JSON lab result payload.
2. Loads template settings, validates required fields and formats (including ISO timestamps), and normalizes the test identifier.
3. Maps the test to a supported LOINC code and expected unit, and enriches it with configurable reference and panic ranges.
4. Checks for duplicates using an idempotency key and stops early with a duplicate response if the result was already processed.
5. Builds a FHIR R4 Observation linked to `Patient/{patient_id}` and creates it on the target FHIR server using an `If-None-Exist` header to prevent duplicates.
6. If the result is in the configured panic range and Slack alerts are enabled, posts a critical alert to Slack without patient identifiers, then returns the final status and Observation details to the webhook caller.

## Setup
1. Provide a reachable FHIR R4 base URL and ensure `Patient/{patient_id}` resources already exist on that server.
2. If your FHIR server requires authentication, configure a Bearer token (or other auth method) on the HTTP request that posts the Observation.
3. In the workflow settings node, review and replace the demo reference/panic ranges for each supported test with your lab-validated ranges.
4. To enable critical alerts, create a Slack Incoming Webhook, paste its URL into the settings, and keep critical alerts turned on.
5. Activate the workflow and send test requests to the `/lab-result` webhook URL from your lab system or integration source.

## Requirements
- n8n (self-hosted or Cloud)
- A FHIR R4 server (the public HAPI test server works for demos)
- Existing Patient resources on that server
- Bearer token credential if your FHIR server requires authentication
- Slack Incoming Webhook URL (optional, for critical alerts)
- A lab system or source able to POST JSON to a webhook

## Customization
- Edit reference and panic ranges per test in the Settings node, with no code changes
- Add a new test by adding its LOINC code, accepted unit and ranges in the "Map Test + Ranges" node
- Replace the Slack alert node with Teams, email, SMS or another channel
- Change the idempotency key to match your source system's unique result ID
- Add unit conversion if your lab sends different units
- Add a Patient lookup or create step if patients may not exist yet

## Additional info
The reference and panic ranges are demo examples only and vary by laboratory, method and population; replace them before any clinical use. The optional patient_name field is accepted but never written to the Observation or sent to Slack. Treat your Slack webhook URL as a secret. 

For more on integrating n8n with FHIR APIs, see Ciphernutz's guide: https://ciphernutz.com/blog/fhir-api-integration-using-n8n

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
