# 🎣 B2B lead qualification

> ⚡ **1,258 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

This automated n8n workflow qualifies B2B leads via voice calls using the VAPI API and integrates the collected data into Google Sheets. It triggers when a new lead’s phone number is added, streamlining lead qualification and data capture.

## What is VAPI?
VAPI is an API service that enables voice call automation, used here to qualify leads by capturing structured data through interactive calls.

### Good to Know

- VAPI API calls may incur costs based on usage; check VAPI pricing for details.
- Ensure Google Sheets access is properly authorized to avoid data issues.
- Use credential fields for the HTTP Request node 'Bearer token' instead of hardcoding.
- Use a placeholder Google Sheet document ID (e.g., "your-sheet-id-placeholder") to avoid leaking private data.

## How It Works

1. Detect when a new phone number is added for a lead using the **New Lead Captured node**.
2. Use the Receive Lead Details from **VAPI node** to capture structured data (name, company, challenges) via a POST request.
3. Trigger an outbound VAPI call to qualify the lead with the **Initiate Voice Call (VAPI) node**.
4. Store the collected data into a Google Sheet using the **Save Qualified Lead to CRM Sheet node**.
5. Send a success response back to VAPI with the **Send Call Data Acknowledgement node**.

### How to Use

- Import the workflow into n8n.
- Configure VAPI API credentials in the HTTP Request node using credential fields.
- Set up Google Sheets API access and authorize the app.
- Create a Google Sheet with the following columns: Name (text), Company (text), Challenges (text), Date (date).
- Test with a sample lead phone number to verify call initiation and data storage.
- Adjust the workflow as needed and retest.

## Requirements

1. VAPI API credentials
2. Google Sheets API access

### Customizing This Workflow
Modify the Receive Lead Details from VAPI node to capture additional lead fields or adjust call scripts for specific industries.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
