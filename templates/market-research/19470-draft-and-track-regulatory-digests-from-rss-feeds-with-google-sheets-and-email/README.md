# 📊 Draft and track regulatory digests from RSS feeds with Google Sheets and email

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs weekly to collect new items from a configurable set of regulatory and bar association RSS feeds, tags them by practice-area keywords, logs a drafted digest to Google Sheets, and emails it for review, then sends a separate weekly reminder if any drafts remain pending too long.

## How it works
1. Runs every Monday at 8am and checks whether the AGENCY_BAR_FEED_URLS variable contains at least one RSS feed URL.
2. If feeds are configured, reads each RSS feed and collects recent items within the DIGEST_LOOKBACK_DAYS window.
3. Tags each item against the PRACTICE_AREA_KEYWORDS map, drops items that match no practice area, and builds a digest grouped by practice area.
4. If no feeds are configured, generates a “setup required” digest notice so the workflow still produces a logged draft and review email.
5. Assigns a unique digest ID, appends the draft (status pending_review) to the “Regulatory Digest Drafts” sheet in Google Sheets, and emails the draft to the content reviewer via SMTP.
6. Runs every Thursday at 9am, reads the same Google Sheets log, and filters for drafts still pending_review older than STALE_DRAFT_REMINDER_DAYS.
7. If stale drafts exist, sends a reminder email via SMTP listing the pending digest IDs; otherwise, it skips sending.

## Setup
1. Add Google Sheets credentials and set REGULATORY_LOG_SHEET_ID to the spreadsheet that contains a “Regulatory Digest Drafts” sheet with matching columns (status, digest_id, created_at, item_count, reviewed_at, published_at, draft_content).
2. Add SMTP credentials for the Email Send nodes and set FIRM_FROM_EMAIL, plus CONTENT_REVIEWER_EMAIL (or rely on the fallback to FIRM_FROM_EMAIL).
3. Set AGENCY_BAR_FEED_URLS as a comma-separated list of RSS feed URLs in n8n Variables.
4. Review and customize PRACTICE_AREA_KEYWORDS, DIGEST_LOOKBACK_DAYS, and STALE_DRAFT_REMINDER_DAYS in n8n Variables to match your tagging and reminder needs.
5. Adjust the two schedule trigger cron expressions if you want different weekly run times.

## 🔗 Nodes Used

Send Email, Google Sheets, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
