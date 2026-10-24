# 💬 Create review-ready outreach email drafts from Google Sheets leads with OpenAI

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow loads leads from Google Sheets (or demo data), validates contact permission and unique IDs, gathers supporting evidence from provided notes or optional LinkedIn/X lookups, and uses OpenAI to generate personalized email drafts that are upserted into a Drafts review sheet.

## How it works
1. Starts manually and reads configuration such as mode (demo/provided/social), seller details, OpenAI model, and the Google Sheets document and tab names.
2. Loads leads from synthetic demo data or reads the Leads tab in Google Sheets and also reads existing rows from the Drafts tab to prevent overwriting completed drafts.
3. Validates each lead (required fields, status=new, contact_allowed=TRUE, valid LinkedIn/X identifiers, no duplicate lead_id) and limits processing to the configured maximum number of eligible leads.
4. For each eligible lead, builds evidence either from the provided source_notes/source_url (provided/demo modes) or by fetching recent LinkedIn posts via Apify and recent X posts via the X API (social mode).
5. If evidence is available, generates a draft either with a synthetic draft in demo mode or by calling the OpenAI Chat Completions API and requesting strict JSON output containing subject, body, and evidence IDs.
6. Validates the draft schema and citations, then upserts a review row (draft, evidence source URLs, and any issues) into the Drafts tab in Google Sheets keyed by lead_id.

## Setup
1. Import the workflow and run the default demo without credentials.
2. Create separate Leads and Drafts tabs using the exact headers shown in the Required sheet headers sticky note.
3. Set the spreadsheet ID, tab names, seller details and run limit. Connect Google Sheets OAuth2 to all three Sheets nodes and OpenAI to Draft with OpenAI.
4. Set mode to provided. Add a synthetic test lead with status=new, contact_allowed=TRUE, source_notes and a matching source_url. Run the workflow and inspect Drafts.
5. Optional social mode requires separate Apify and X Header Auth credentials, configured as shown on the canvas. Run one execution at a time.

## Requirements
- Standard n8n nodes; tested on n8n 2.28.6. Live drafting requires Google Sheets OAuth2 and funded OpenAI API access. Optional social research requires Apify and/or X API access. API and hosting costs are separate.

## Customization
- Adjust sellerName, sellerCompany, offer, model, maxLeads and sheet settings in Configure workflow. Preserve the structured output schema, validation and human review.

## Additional info
No email is sent automatically. Source notes are not fetched or independently verified. Every draft requires human review. Completed drafts are preserved on reruns. Google Sheets/OpenAI were live tested with synthetic data; LinkedIn/X were tested with simulated responses. Actual n8n Cloud execution remains untested.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
