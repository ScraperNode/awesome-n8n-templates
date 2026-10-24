# 📊 Sync Austin commercial permit use changes to Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
Track proposed changes in how Austin commercial properties are used. This workflow sends permit descriptions, previous and planned uses, supporting quotes, and official record links to Google Sheets for review, updating existing rows on sequential reruns.

## How it works
1. Runs on a Monday 7:00 AM America/Chicago schedule or when started manually.
2. Calculates the last 14 fully completed UTC dates (ending yesterday) to define the reporting window.
3. Calls the Apify API to run the Record Foundry Austin commercial use-change actor and fetch the report items for that date range.
4. Validates the returned report structure and dates, then flattens each permit’s described use transitions into single-row fields (prior uses, planned uses, and evidence quotes).
5. Writes literal text to Google Sheets using RAW formatting. It matches the single permitKey column to update existing rows on sequential reruns; keep one execution at a time to avoid concurrent duplicates.

## Setup
1. Create a Google spreadsheet with a tab named Permits. Copy the complete tab-separated header row from the workflow’s Sheet headers and setup note into cell A1. Keep permitKey as the matching column.
2. Enter the spreadsheet ID in Set user configuration, then connect Google Sheets OAuth2 in the final node. The ID is the part between /d/ and /edit in the spreadsheet URL.
3. Create an HTTP Header Auth credential with header name Authorization and value Bearer YOUR_APIFY_TOKEN. Select it in Fetch one Apify permit report. Use your own Apify account and token.
4. Run manually and inspect the sheet before activating the Monday 7 AM America/Chicago schedule. Keep the final node’s Cell Format set to Let n8n format (RAW) so source text is not evaluated as a formula.

## Requirements
- An n8n instance, an Apify account able to run the paid Actor, and a Google account with edit access to the destination spreadsheet.

## Customization
- Adjust the schedule to your review cadence. Keep executions sequential and preserve the permitKey matching column, RAW cell formatting, and report validation.

## Additional info
The template is free. Record Foundry’s API charges $1 per nonempty report; empty reports are free. Each Actor request has a $1 maximum charge. n8n hosting costs are separate. After a timeout, check the existing Apify run before retrying, because another start may be billable.

The report covers the last 14 completed UTC issue dates. Overlapping weekly windows can miss later revisions or late-published records; old sheet rows are not removed when source records disappear or stop matching. Valid empty reports write no rows; malformed reports fail visibly. Permit descriptions do not confirm business openings or completed construction.

API documentation: https://apify.com/recordfoundry/austin-commercial-use-changes

Prefer a one-time downloadable Austin report? Prepare it free, review the match count, and pay $9 only if you choose to download matches. No account needed: https://recordfoundry.goodlifegames.io/buy-austin?utm_source=n8n

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
