# 🔬 Route legal-for-trade scale calibration outcomes with OpenAI and Google

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives scale calibration results via webhook, calculates NIST Handbook 44-style tolerance deviations, uses OpenAI to classify each device outcome, and routes compliant, out-of-tolerance, condemned, and invalid submissions to Google Drive, Gmail, HTTP state registry endpoints, and Google Sheets with a consolidated audit log.

## How it works
1. Receives a POST webhook submission containing a visit ID, technician details, and an array of device calibration readings.
2. Splits the payload into one item per device and calculates deviation percent, a tolerance band by device class, and a numeric status hint.
3. Validates required fields and appends malformed readings to an “Invalid Submissions” tab in Google Sheets.
4. Sends valid readings (including deviation math and technician notes) to an OpenAI text classifier to choose compliant, out_of_tolerance_fail, or condemned.
5. For compliant devices, stores a certificate file in Google Drive and files a certification update to the state registry via HTTP.
6. For out-of-tolerance devices, sends an urgent Gmail alert to the owner and opens a compliance case in Google Sheets.
7. For condemned devices, submits a decommission notice to the state registry via HTTP and logs the decommission record in Google Sheets, then merges all outcomes and appends one consolidated audit-log row per visit in Google Sheets.

## Setup
1. Create credentials for Google Sheets, Google Drive, Gmail, OpenAI, and an HTTP header-auth/API key for your state weights-and-measures registry endpoints.
2. Update the webhook URL in your technician mobile app or source system to POST to this workflow’s production webhook path.
3. Replace the placeholder state registry API URLs and ensure the request bodies match your jurisdiction’s required fields.
4. Set the Google Drive destination folder and confirm the Google Sheets document and tab names (Invalid Submissions, Compliance Cases, Decommissioned Devices, Consolidated Audit Log).
5. Update the Gmail recipient address (and any CC/BCC requirements) for out-of-tolerance notifications and run a test submission with multiple readings to validate each branch.

## Requirements
- Google Workspace Accounts: OAuth2 connections for Google Drive (certificate PDF archiving), Google Sheets (case tracking, decommission records, audit logs), and Gmail (dispatching urgent out-of-tolerance alerts).
- OpenAI API Key: Configured on the chat model supporting the Text Classifier (gpt-4.1-mini).
- State Regulatory API / Auth: HTTP Header Auth or API keys configured for the target weights-and-measures submission endpoints (File State Registry Update and Submit Decommission Notice).
- Upstream Mobile Payload: An incoming JSON webhook payload containing visit_id, technician, and an array of readings (including device_id, site, device_class, test_load, measured_reading, and technician_notes).

## Customization
- Full NIST HB44 Tolerance Tables: Expand the logic in Compute Tolerance Deviation from the demo 3-class structure to reflect your state's complete tolerance bands based on specific division sizes and capacities.
- On-Site Adjustment Handling: Introduce a 4th classification category (adjusted_in_field) if technicians can calibrate and re-verify equipment during the same site visit.
- Re-Test Routing: Add a fourth branch to Route By Compliance Status for equipment marked for scheduled follow-ups rather than immediate decommission or pass/fail outcomes.
- Automated Customer Summaries: Add an HTML-to-PDF generation step right after Append Consolidated Audit Log to automatically bundle all visit results into an email attachment for the facility manager.
- Regulatory CC Rules: Add mandatory state notification inboxes to the CC field in Send Urgent Out Of Tolerance Alert where local statutes require instant disclosure.

## Additional info
Resilience & Retries: Every storage, notification, HTTP, and AI node includes continueRegularOutput with 3 retries on a 2-second backoff to prevent dropped visit data during temporary API drops.

Filing Endpoints: The state registry URLs are placeholders. In states without public REST APIs for weights and measures, swap the HTTP nodes for direct email submissions or scheduled batch exports.

Cost Footprint: Evaluates one lightweight classification call (gpt-4.1-mini) per tested scale—processing a 10-device site visit costs less than a penny in API usage.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Drive, Gmail, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
