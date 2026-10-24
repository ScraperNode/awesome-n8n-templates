# 🎣 Clean and deduplicate lead lists and export a review CSV file

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow takes a JSON lead list, normalizes email and website fields, validates basic email syntax, flags duplicates by email or domain, and exports a CSV review file with an accepted/duplicate/review status for each row.

## How it works
1. Runs manually to process the sample input or your edited lead list.
2. Validates that the input contains 1–5000 lead records and that the deduplication mode is set to email or domain.
3. Normalizes each lead by trimming text, lowercasing emails, extracting a website hostname as a domain, and checking basic email syntax.
4. Classifies each row as accepted, duplicate, or review based on invalid/missing fields and whether the email or domain has already appeared in the current run.
5. Exports all rows to a downloadable CSV file that includes status, reason, and (for duplicates) the row number of the original record.

## Setup
1. In the “Edit lead list and rules” step, replace the sample leads array with your own records using the same field names (company, email, website).
2. Set deduplicateBy to email or domain depending on how you want duplicates detected.
3. Execute the workflow and download clean-leads.csv from the final CSV export step.

## Requirements
- Built-in n8n nodes only; no credentials, API services or external accounts required. Processes 1–5000 records per run.

## Customization
- Choose email or exact normalized hostname deduplication in Edit lead list and rules. Replace the fictional sample records while retaining company, email and website field names.

## Additional info
Email checks validate syntax only, not mailbox deliverability. Matching is limited to the current run, not a persistent CRM. Review every exported status before importing elsewhere. Processing logic and edge cases were tested locally; full n8n runtime execution has not yet been verified.

## 🔗 Nodes Used

Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
