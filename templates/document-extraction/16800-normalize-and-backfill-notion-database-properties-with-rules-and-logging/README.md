# 🔬 Normalize and backfill Notion database properties with rules and logging

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to normalize and backfill properties in a Notion database, standardizing Status values, deriving a Key slug and Created week stamp, updating only changed pages, and appending a run recap to a Notion log page.

## How it works
1. Runs every day at 3am on a schedule.
2. Fetches all pages (rows) from a selected Notion database with full property data.
3. Applies normalization rules to backfill missing Status values, canonicalize known Status variants, and optionally derive a Key slug from the title and a Created week value from the page creation time.
4. Updates only the Notion pages where one or more of these derived values differs, and stamps a Last normalized date on each updated page.
5. Appends a one-line recap of the run (scanned vs. updated counts and what changed) to a specified Notion page or block.

## Setup
1. Add a Notion API credential and share both the target database and the log page with your Notion integration.
2. Select the Notion database to process in the database ID field used to fetch all database pages.
3. Update the rules in the code configuration (property names, DEFAULT_STATUS, and the CANONICAL_STATUS mapping) to match your database.
4. Ensure the target database has the mapped properties (Status, Key, Created week, Last normalized) with the expected types, and adjust the update mapping if your property names differ.
5. Paste the URL of the Notion page/block that should receive the run recap into the append-to-block configuration.

## Requirements
- A Notion internal integration credential, with both the target database and the log page shared with the integration
- A database with the mapped properties (Status, Key, Created week, Last normalized) in the expected types

## Customization
- Edit DEFAULT_STATUS to change what gets backfilled into blank Status values
- Extend the CANONICAL_STATUS map to fold more spelling variants into your canonical values
- Rename the property keys in the rules block to match your own schema
- Point the run recap at a different Notion log page
- Adjust the schedule to run at a different time

## Additional info
Only rows that actually change are written, so the workflow is idempotent and safe to schedule. A Status value that is present but not in the canonical map is never overwritten, and the Last normalized stamp is applied only on a real change, so clean rows stay untouched. Fully deterministic: the same row always resolves the same way. Test on a copy of your database first.

## 🔗 Nodes Used

Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
