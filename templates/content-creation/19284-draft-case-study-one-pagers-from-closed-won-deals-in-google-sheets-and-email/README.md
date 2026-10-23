# 🎬 Draft case study one-pagers from Closed Won deals in Google Sheets and email

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs daily to detect newly Closed Won deals in Google Sheets, match them with client results, draft a case-study one-pager, log it to a review ledger, and send internal and client email requests with an optional compliance check, plus daily reminder emails for stale reviews.

## How it works
1. Runs daily on a schedule and reads a Google Sheets Deals Tracker to find newly marked “Closed Won” deals while deduplicating deals already processed.
2. Reads a Google Sheets Results Tracker and matches each newly closed deal to its before/after metrics by deal ID.
3. If no results entry exists, sends an email to the internal reviewer requesting the missing metrics.
4. If metrics exist, calculates the strongest headline metric and assembles a draft one-pager summary.
5. Appends the draft and metadata to a Google Sheets Case Studies ledger and emails the internal reviewer a review request while logging the message via an executed compliance/audit sub-workflow.
6. Builds a client sign-off request, runs it through the executed compliance check sub-workflow, and either sends the client email or suppresses it when not approved.
7. In a separate daily scheduled branch, reads the Case Studies ledger, identifies drafts still in pending review past a threshold, and emails reminder nudges to the internal reviewer.

## Setup
1. Add Google Sheets credentials and set the sheet IDs/worksheet names for the Deals Tracker, Results Tracker, and Case Studies ledger (via the workflow variables used in the document ID fields).
2. Configure an SMTP/email-sending credential and set the from address and internal reviewer email (for example, FIRM_FROM_EMAIL and FIRM_ATTORNEY_EMAIL).
3. Provide and publish the compliance/guardrail sub-workflow referenced by GUARDRAIL_WORKFLOW_ID so the Execute Workflow steps can log/check outbound messages.
4. Ensure your Sheets include the expected columns (for example deal_id, pipeline, stage, contact_email in Deals; deal_id and metric fields in Results; and status/created_at/draft_summary/headline_stat in Case Studies).
5. Set STALE_REVIEW_DAYS and adjust the cron expressions if you want different reminder thresholds or run times.

## 🔗 Nodes Used

Send Email, Google Sheets, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
