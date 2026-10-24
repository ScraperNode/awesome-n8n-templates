# 🔬 Audit Google Maps branch listings with HasData and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Check whether your branches' Google Maps listings match your approved names, addresses, phone numbers and websites. This workflow saves differences and missing fields to Google Sheets, then identifies previously different fields that match on later runs. It uses exact place IDs and never edits your listings.

## How it works
1. Start manually and load the spreadsheet ID, branch limit and country calling code from Settings. Validate them before reading the input table.
2. Read approved branch details from the Branches tab. Validate required values, reject duplicate branch IDs or reused place IDs, and stop oversized batches before paid requests.
3. Read Results once and reject duplicate saved keys. Keep the previous comparison as the baseline for each branch. Every input branch is checked again on each run.
4. Fetch each listing through HasData using its exact Google Maps place ID. Keep each response attached to its branch, and mark failed requests or unexpected place IDs as unknown.
5. Compare configured names, addresses, phone numbers and website hostnames. Accept approved aliases and normalize formatting. Retain expected and observed values alongside the request metadata.
6. Compare the current fields with their saved baseline. A field resolves only when an earlier difference now matches unchanged expected values. Missing values and failed reads cannot resolve an issue.
7. Save differences, missing fields and resolved fields to Google Sheets. Matching result keys update the latest comparison, while optional reviewer columns remain untouched.

## Setup
1. Install the verified HasData community node. Connect HasData credentials to Fetch search evidence and Google Sheets credentials to Read input, Read Results and Save review queue.
2. Create a Branches tab with branch_id, place_id, expected_name, expected_address, expected_phone, expected_website, name_aliases, address_aliases, phone_aliases and website_aliases. Name and address are required. Phone, website and aliases are optional. Keep place IDs and phone numbers as plain text.
3. Create a Results tab with result_key, checked_at, topic, status, summary, differences, unknown_fields, resolved_fields, place_id and evidence_json. Optionally add review_status and editor_notes for your team.
4. Set spreadsheet_id and country_calling_code in Settings. Add one branch with verified approved details. Put approved aliases on separate lines in their cells.
5. Run manually and inspect the expected and observed values in Results. Filter status to differences_to_review for the review queue. On a later run, check resolved_fields for differences that now match.

## Requirements
- An n8n workspace with the verified HasData community node installed.
A HasData account with credits for Google Maps Place requests.
A Google account with access to the spreadsheet, plus approved details and exact place IDs for your branches.

## Customization
- Add approved spelling or formatting alternatives on separate lines in the corresponding alias cells.
Set max_items from 1 to 10 branches. Use one country calling code per workflow.
Export Results before refreshing if you need a permanent historical archive. Opening hours are retained for manual review, not automatically compared.

## Additional info
Designed for local SEO and operations teams reviewing branch information. A mismatch is a review task, not proof that Google is wrong. Website comparisons use hostnames, not paths. Missing data cannot resolve a difference. Each run uses one paid Maps Place request per branch, with no AI model or automatic retries. Run one execution at a time. No Google Business Profile edits or notifications are sent.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
