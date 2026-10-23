# 👥 Verify Australian supplier ABNs with ABR, Google Sheets and Gmail

> ⚡ **13 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow collects supplier onboarding details via an n8n Form, verifies the provided ABN against the Australian Business Register (ABR) API, and for active ABNs saves the supplier to Google Sheets and notifies your team via Gmail while showing the supplier a success or rejection page.

## How it works
1. Receives a supplier submission from an n8n Form with business and contact details, including an ABN.
2. Cleans and normalizes the submitted fields (for example, removing spaces/dashes from the ABN).
3. Calls the Australian Business Register (ABR) “AbnDetails” endpoint to look up the ABN using your ABR GUID.
4. Parses the ABR callback response to extract key fields such as ABN status, entity name, entity type, GST date, and address details.
5. Checks whether the ABR status is “Active” and routes inactive or unverified ABNs to a rejection completion page.
6. Appends verified supplier details and ABR response fields to a Google Sheets supplier register for active ABNs.
7. Sends a Gmail notification with the verified supplier details to your team and then displays a success completion page to the supplier.

## Setup
1. Create an ABR GUID and replace the masked GUID value in the ABR lookup request parameters.
2. Connect a Google Sheets OAuth2 credential and update the target spreadsheet/document and sheet tab used for the supplier register.
3. Connect a Gmail OAuth2 credential and set the recipient email address for the team notification message.
4. Review and publish the n8n Form fields and use the provided form URL wherever you collect supplier onboarding submissions.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
