# ⚡ Report overlapping Google Calendar appointments by email with Gmail

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Checks one Google Calendar for overlapping timed appointments and prepares an email report for its owner. It starts with a fictional example you can run without Google credentials. In live mode, Gmail sends a report when a clash or invalid date needs attention.

## How it works
1. Runs either manually or every morning on a schedule.
2. Loads and validates the audit settings (calendar ID, recipient email, timezone, lookahead window, and report limits).
3. Uses demo mode to generate fictional events, or otherwise fetches upcoming events from Google Calendar while expanding recurring events.
4. Filters out cancelled, free (transparent), all-day, self-declined, and duplicate events, then detects overlapping timed appointment pairs.
5. Builds a text report summarizing overlap counts, excluded events, and any events that could not be checked due to invalid timed dates.
6. If demo mode is off and the report needs attention, sends the report by Gmail to the configured internal recipient; otherwise it outputs the audit result for inspection.

## Setup
1. Run the template manually with demo_mode enabled. The example needs no Google credentials and sends no email; five fictional events produce one overlap.
2. For live use, connect Google Calendar and Gmail, then configure the calendar ID, an authorized internal recipient, timezone, review window and report limit in the configuration node.
3. Switch demo_mode off for a manual live check. Review its output and confirm the report destination before enabling the schedule.

## Requirements
- Use one calendar for a single person or bookable resource. Intentional overlaps in a shared team calendar will also be reported. All-day events are excluded.

## Additional info
Created by [Webs del Camp](https://websdelcamp.cat/es/automatizaciones?utm_source=n8n&utm_medium=referral&utm_campaign=calendar_audit_2026_10_03&utm_content=template_author), web and business automation services in Spain.

The included demo was run in n8n 2.41.6: five fictional appointments produce three busy events and one overlapping pair. Demo mode sends no email.

## 🔗 Nodes Used

Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
