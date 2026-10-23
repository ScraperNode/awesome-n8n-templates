# 🎣 Turn company lists into verified prospect emails with Hunter.io and Google Sheets

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow turns a company list into verified prospect emails. It reads target companies from a Google Sheet, resolves each website with Hunter's free Domain Finder, finds public email addresses with Domain Search, verifies each address with the Email Verifier, and writes the best personal email back to the sheet.

## How it works
1. Runs manually (or put it on a weekly schedule once you're happy).
2. The workflow reads your target companies from a Google Sheet and skips rows that are already enriched.
3. For each company: Hunter's Domain Finder resolves the company website for free; Domain Search finds the public email addresses at that domain.
4. The Email Verifier checks each address and anything invalid is dropped; disposable and webmail domains are skipped.
5. It picks the highest-confidence personal email that meets your confidence threshold.
6. The email, name, position, confidence score and verification status are written back to the sheet and the row is marked enriched. Rows with no usable email keep their original status and are simply retried on the next run.

## Setup
1. Sign up for a free Hunter.io account (no credit card) and copy your API key from the dashboard; paste it into the CONFIG - Outbound node and confirm the sheet name and min_confidence (80 recommended).
2. Connect your own Google Sheets OAuth2 on the two Sheets nodes (all credential slots are placeholders — none are included).
3. Create a sheet named "Outbound - Companies" with columns row_id, company, domain (optional — auto-resolved free), email, first_name, last_name, position, confidence, verification, status.
4. Add target companies and run.

## Requirements
- A Hunter.io account (free tier: 50 credits/month, API included, no credit card) and a Google account for Sheets. Credit math: 1 email found = 1 Hunter credit, 1 verification = 0.5 credit — Domain Finder is free, so the free tier covers roughly 30 fully enriched and verified prospects per month.

## Customization
- Lower min_confidence in the CONFIG node to widen the net, swap the manual trigger for a weekly schedule, route the enriched rows into your CRM instead of Sheets, or feed them straight into an outreach-drafting workflow (nothing sends in this template — enrichment only).

## Additional info
Freelancers, small agencies, founders and SDRs doing their own cold outreach — anyone who needs verified B2B emails without buying sketchy lists — plus agencies that want a sellable lead-enrichment automation for local clients.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
