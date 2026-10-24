# ⚒️ Route AV rental kit readiness with Airtable, OpenAI, Google Sheets, and Trello

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow receives an authenticated reservation-change webhook, fetches the matching reservation and kit stock from Airtable, calculates shortages and allowed substitutions, uses OpenAI to classify technician notes, and routes the assessment to Airtable, Google Sheets, Gmail, or Trello for operational follow-up.

## How it works
1. Receives a POST webhook event containing an Airtable reservation recordId and an eventId.
2. Normalizes the incoming payload, loads routing configuration values (Airtable base/table names, Google Sheet ID, Trello list ID, recipient email), and waits briefly to let upstream stock updates settle.
3. Fetches the reservation record and current kit free-stock list from Airtable.
4. Parses the reservation RequirementsJson, allocates available stock (including only approved substitutes in the same compatibility group), computes shortages and time-to-dispatch, and determines a route (ready, substitute, crosshire, or blocked).
5. Validates that required inputs are present (for example a non-paginated stock response and a valid DispatchAt timestamp) and stops the run if the source data is invalid.
6. Uses OpenAI to classify the technician notes as clear vs. review-required and sends review-required cases to a blocked-kit task.
7. Routes clear cases by policy: updates the reservation in Airtable for ready kits, appends a row to a Google Sheets “Substitutions” sheet for substitution review, creates a Gmail draft for cross-hire, or creates a Trello card for blocked kits.

## Setup
1. Configure the webhook header authentication and copy the webhook URL into the system that sends reservation-change events.
2. Add credentials for Airtable (HTTP Header Auth with a PAT), OpenAI, Google Sheets, Gmail, and Trello.
3. Replace the placeholder values in the configuration step (Airtable base ID, table names, Google Sheet ID, Trello list ID, internal recipient email, and crossHireLeadHours).
4. Ensure your Airtable schema includes Reservations fields JobName, DispatchAt, RequirementsJson, TechnicianNotes plus ReadinessAssessment, AssessmentJson, and AssessmentEventId, and a KitStock table with Sku, FreeQty (integer), and CompatibilityGroup.
5. Create a Google Sheets tab named “Substitutions” with columns eventId, recordId, status, and assessmentJson.

## Requirements
- Authenticated Webhook Input: Accepts POST payload containing { "recordId": string, "eventId": string } via Header Auth.
- Airtable Source Tables:
- Reservations table with fields: JobName, DispatchAt (ISO timestamp), RequirementsJson (array of {sku, qty, compatibilityGroup, approvedSubstitutes}), and TechnicianNotes.
- KitStock table with fields: Sku, FreeQty (integer), and CompatibilityGroup.
- Destination Storage & Integration Accounts:
- Airtable Personal Access Token (PAT) with read/write access.
- Google Sheets account with an active sheet containing columns A:D (eventId, recordId, status, assessmentJson).
- Gmail account configured for drafting internal review emails.
- Trello account with a pre-configured list for blocked tasks.
- OpenAI API credentials (low-temperature model for technician constraint classification).

## Customization
- Cross-Hire Lead Time: Adjust the default 12-hour threshold in the Normalise Kit Event node to match your supplier delivery SLAs.
- Connector-Family Verification: Modify the Shape Kit Readiness node to enforce verified connector-group checks before allocating substitutes.
- Venue & Technician Rules: Extend the Classify Technician Constraints prompt/rules to flag venue-specific access limitations, rigging rules, or power constraints.
- Task Management System: Swap the Create Blocked Kit Task node from Trello to Jira, ClickUp, Linear, or an internal dispatch ticketing platform.

## Additional info
Stock Allocation & Concurrency: Assessments represent operational proposals rather than hard inventory locks; source stock systems must manage final dispatch reservations. Concurrency checks cap inputs at 100 stock SKUs and 50 kit lines per run.

Retry & Guard Policies: External service calls use continueRegularOutput with up to 3 retries (2,000 ms delay). Non-idempotent notifications/drafts should rely on upstream eventId deduplication to prevent duplicate records on network timeouts.

Data Privacy & AI Safety: Only operational fields are passed to the OpenAI classification node; customer personal identifying data is stripped. Airtable queries cap at 100 records and fail closed if unhandled pagination offsets occur.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Trello, Webhook, Gmail, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
