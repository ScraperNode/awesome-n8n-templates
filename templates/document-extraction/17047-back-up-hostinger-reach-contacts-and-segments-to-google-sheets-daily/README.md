# 🔬 Back up Hostinger Reach contacts and segments to Google Sheets daily

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily at 7am to back up Hostinger Reach contacts and segments into Google Sheets, upserting records into separate Contacts and Segments tabs and adding a last_synced_at timestamp for tracking.

## How it works
1. Runs every day at 7am and sets the target Google Sheets URL plus the tab names for contacts and segments.
2. Requests the first page of Hostinger Reach contacts and continues fetching additional pages until the last page is reached.
3. Splits the returned contacts into individual records, maps key fields (including uuid and email), and adds a last_synced_at timestamp.
4. Upserts the contact records into Google Sheets using uuid as the matching key.
5. Fetches all Hostinger Reach segments, splits them into individual records, and adds a last_synced_at timestamp.
6. Upserts the segment records into a separate Google Sheets tab using uuid as the matching key.

## Setup
1. Add a Hostinger API credential for the Hostinger Reach nodes that list contacts and segments.
2. Add a Google Sheets credential and ensure the Google Sheet is accessible to that account.
3. Update the Google Sheets URL and the Contacts/Segments tab names in the configuration step.
4. Ensure your Contacts and Segments sheets include a uuid column (and any other fields you want to store) so upserts can match and update existing rows.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
