# 📁 Deduplicate and archive Notion database rows daily with an audit log

> ⚡ **261 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs daily and deduplicates a Notion database by grouping pages on a chosen property, keeping one “best” page per group (newest by default) and archiving the rest, then appending an audit recap line to a Notion log page.

## How it works
1. Runs every day at 2am on a schedule.
2. Fetches all pages from the selected Notion database, including full property data.
3. Groups pages by a configurable Notion property (for example, “Name”) and identifies groups with more than one page.
4. Chooses one page to keep per duplicate group based on the configured rule (newest, oldest, or mostFilled) and prepares the other pages for archiving.
5. Archives each duplicate page in Notion by updating the page to `archived: true`.
6. Appends a one-line recap (scanned count, duplicates found, and how many were archived) to a specified Notion page as an audit log.

## Setup
1. Add your Notion API credentials and share both the target database and the audit log page with the Notion integration.
2. Select the Notion database to deduplicate in the database ID field of the database query step.
3. Update `MATCH_PROPERTY` and `KEEP_RULE` in the code step to match your database and your preferred keeper strategy.
4. Paste the URL of the Notion page (or block) that should receive the recap line in the audit log append step.
5. Adjust the schedule if you want the workflow to run at a different time.

## Requirements
- A Notion internal integration credential, with both the target database and the audit log page shared with the integration
- A Notion database with a property to group duplicates on (title, URL, email, number, or select)

## Customization
- Change MATCH_PROPERTY in the code step to deduplicate on a different property
- Switch KEEP_RULE between newest, oldest, and mostFilled to change which row survives
- Point the recap line at a different Notion log page
- Adjust the schedule to run at a different time or frequency

## Additional info
Duplicates are archived to the Notion trash, not hard deleted, so a bad run stays recoverable for about 30 days. Rows with an empty match property are left untouched, and clean runs are still logged. Matching ignores case and spacing, so near-identical values group together. Test on a copy of your database before pointing it at real data.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
