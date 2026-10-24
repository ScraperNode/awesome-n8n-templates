# 💬 Check cold email compliance and draft Gmail messages with Precleared

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow checks each lead’s cold-email compliance using the Precleared API and, when allowed, generates a compliant message and saves it as a draft in Gmail, while flagging non-compliant leads with the verdict, reason, and suggested next step.

## How it works
1. Runs manually to process a batch of leads.
2. Loads sender details (country, company info, postal address, opt-out line, and pitch) and prepares lead fields like email, name, company, and address source.
3. Sends each lead to the Precleared API to check whether cold-email outreach is permitted and to retrieve any required footer text and a receipt ID.
4. Creates a Gmail draft for leads with the verdict `ok_to_email`, including the required footer details and saving the compliance rule and receipt ID.
5. Routes all other leads to a “hold back” output that includes the compliance verdict, the reason, any suggested next step (such as getting an API key or buying a pack), and the receipt ID when available.

## Setup
1. Update the sender details in the workflow (sender country, your name, company, postal address, opt-out line, and pitch).
2. (Optional) Add a Precleared API key by configuring the HTTP request to send an `Authorization: Bearer ...` header if you need more than the free daily checks.
3. Connect your Gmail account in the Gmail Draft action and confirm the target mailbox.
4. Replace the sample leads with your own lead source (for example Google Sheets, Airtable, HubSpot, or a webhook) and map your lead fields to `email`, `first_name`, `company`, and `address_source`.

## 🔗 Nodes Used

HTTP Request, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
