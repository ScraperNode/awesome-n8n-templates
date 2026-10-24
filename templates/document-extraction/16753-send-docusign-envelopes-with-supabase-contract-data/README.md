# 🔬 Send DocuSign envelopes with Supabase contract data

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow is triggered by another n8n workflow, fetches an assessment record from Supabase, generates an HTML contract, and sends it as a DocuSign envelope using JWT authentication in either production or sandbox based on the recipient email, then writes the envelope ID and status back to Supabase.

## How it works
1. Receives an execution request from another workflow with an assessment ID (and optional contract title).
2. Retrieves the matching assessment record from the Supabase `assessments` table.
3. Generates a styled contract HTML document from the assessment data and Base64-encodes it for DocuSign.
4. Chooses the DocuSign sandbox or production path based on whether the contact email contains a specific marker string.
5. Calls a Supabase Edge Function to create a DocuSign JWT assertion, exchanges it for a DocuSign access token, and creates a “sent” envelope with two signers and anchor-based signature tabs.
6. Updates the Supabase assessment record with the DocuSign `envelopeId` and sets the contract status to `envelope_sent`.

## Setup
1. Create and connect Supabase credentials in n8n, and update the Supabase project URL for the Edge Function endpoint (`/functions/v1/docusign-sign-jwt`).
2. Configure DocuSign JWT app settings and add n8n variables for both environments (integration key, user ID, and account ID for prod and sandbox).
3. Update the DocuSign envelope payload with the internal signer’s name/email and ensure your contract HTML includes the `SIGN_HERE` and `CLIENT_SIGN_HERE` anchor strings.
4. Adjust the environment-selection rule (the email “contains” check) to match how you want to route requests to DocuSign sandbox vs production.
5. Ensure the Supabase `assessments` table includes the fields used by the workflow (for example `contract_text`, `contact_name`, `contact_email`, `business_name`, `contract_envelope_id`, and `contract_status`).

## Requirements
- n8n instance (cloud or self-hosted)
- DocuSign account with a JWT integration app (production and/or sandbox)
- Supabase project, or adapt the two Supabase nodes to your own database
- A parent workflow that triggers this one with an assessment ID

## Customization
- Edit the contract HTML generator to match your own document layout
- Change the sandbox vs production routing rule (the email "contains" check)
- Adjust the DocuSign signature tabs and anchor strings for your document

## Additional info
Part 1 of 2. Pair it with the DocuSign Connect Listener (Part 2) for the full contract-to-billing lifecycle. Full setup guide, how the two parts connect, and support: https://docs.google.com/document/d/e/2PACX-1vRBQFcz55jjPdHvjMQyYsq_BPHNmEaCH9CSck6JORhgNx-6r9hV8JZNtyEof7w90wGgU0Kry3-0btd4/pub. 
Questions? Email support@priscgroup.com

## 🔗 Nodes Used

HTTP Request, Supabase, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
