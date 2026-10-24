# 🔬 Send internal due-action alerts from Airtable via Gmail without duplicates

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow checks Airtable every 10 minutes for records with overdue “Next Action At” times and emails an internal alert via Gmail, while suppressing duplicate notifications for the same record and due time.

## How it works
1. Runs every 10 minutes (or on manual trigger) to start the due-item check.
2. Searches Airtable for records where “Next Action At” is set and is due, excluding statuses like Done, Closed, Rejected, or Suppressed.
3. Deduplicates alerts by tracking a key based on the Airtable record, its due timestamp, and the “Next Action” text in workflow static data.
4. Builds a single email subject and message listing all newly due items in time order.
5. Sends the internal due-action summary email through Gmail to the configured recipient.

## Setup
1. Add an Airtable credential and replace the placeholder Airtable Base ID and Table ID.
2. Ensure your Airtable table includes fields named Status, Next Action, and Next Action At (plus Company, Name, or Title for display).
3. Add a Gmail credential and replace you@example.com with your internal alert recipient address.
4. Run the Manual Test trigger with a sample due record before enabling the scheduled trigger, and confirm that repeated runs do not create duplicate alerts.

## Additional info
This workflow is adapted from CLEAR MERIT's Internal / Working Demo operations system. It has been sanitized to remove credentials and private Airtable identifiers, then successfully imported into n8n 2.39.5 for validation. It is not presented as an external client deployment.

## 🔗 Nodes Used

Airtable, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
