# 🔬 Score and review nonprofit grant opportunities with Google Sheets

> ⚡ **27 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Sheets grant queue, validates and de-duplicates new grant opportunities, scores each grant against an organization profile, generates a structured recommendation summary, then appends the scored record to a grant master sheet and updates the queue status.

## How it works
1. Triggers manually or when a new row is added in a Google Sheets Grant Queue sheet.
2. Loads grant opportunities with status set to New and validates required fields (grant_id, organization_id, foundation_name, program_name, and status).
3. Loads the Google Sheets Organization Profile and existing Grant Master records, then checks the incoming grants for duplicates by grant_id and by organization + foundation + program.
4. Marks invalid or duplicate queue rows in Google Sheets and stops them from being scored.
5. Scores each non-duplicate grant using the Organization Profile (priority programs, geography, exclusions) plus signals like previous funder, new applicants allowed, rolling deadline, and invitation-only restrictions.
6. Generates a recommendation summary including eligibility and deadline statuses, research completeness, and missing-field flags for human review.
7. Appends the final scored grant record to the Google Sheets Grant Master sheet and updates the Grant Queue row to Processed.

## Setup
1. Create and connect a Google Sheets credential in n8n.
2. Select your spreadsheet and sheet tabs for the Grant Queue, Organization Profile, and Grant Master in all Google Sheets nodes used by the workflow.
3. Ensure the Grant Queue sheet includes the required columns (grant_id, organization_id, foundation_name, program_name, status) and set new entries to status = New.
4. Ensure the Organization Profile sheet includes matching organization_id values and fields used for scoring (for example: organization_name, priority_programs, primary_geography/state/country, excluded_grant_types).
5. Configure the Google Sheets update/append operations to match on grant_id where required (Validation Error, Duplicate, and Queue Status updates) and map columns to your Grant Master output schema.

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
