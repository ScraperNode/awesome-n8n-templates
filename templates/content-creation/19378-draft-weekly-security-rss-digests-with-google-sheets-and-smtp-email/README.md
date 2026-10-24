# 🎬 Draft weekly security RSS digests with Google Sheets and SMTP email

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow runs on weekly schedules to collect security and compliance news from RSS feeds, draft a plain-English digest with templated “why this matters” blurbs, log each draft to Google Sheets, and email it to a reviewer, with a second weekly check that emails reminders for stale, unreviewed drafts.

## How it works
1. Runs every Monday at 8am and checks whether the SECURITY_DIGEST_FEED_URLS variable contains one or more RSS feed URLs.
2. If feeds are configured, it fetches items from each RSS feed and filters to recent entries that match the configured relevance keywords.
3. It compiles the filtered items into a single digest draft, adds a unique digest ID and timestamp, and includes a “no relevant items found” message when nothing matches.
4. It appends the digest draft to a Google Sheets log and sends an HTML and text review-request email via SMTP.
5. If no feeds are configured, it drafts a setup-needed notice, assigns an ID, logs it to Google Sheets, and emails the notice to the reviewer.
6. Runs every Thursday at 9am, reads the Google Sheets log, and identifies pending drafts older than the configured stale threshold.
7. If stale drafts exist, it emails a single reminder (listing all stale drafts) to the reviewer via SMTP; otherwise it does nothing.

## Setup
1. Set the n8n variables SECURITY_DIGEST_FEED_URLS (comma-separated RSS URLs), RELEVANCE_KEYWORDS, DIGEST_LOOKBACK_DAYS, and STALE_DRAFT_REMINDER_DAYS as needed.
2. Create a Google Sheets document with a “Digest Drafts” sheet and columns matching the workflow fields (status, digest_id, created_at, item_count, reviewed_at, published_at, draft_content), then set DIGEST_LOG_SHEET_ID.
3. Add Google Sheets OAuth credentials in n8n for reading and appending rows.
4. Add SMTP credentials and set FIRM_FROM_EMAIL plus CONTENT_REVIEWER_EMAIL (or rely on FIRM_FROM_EMAIL as the fallback recipient).

## 🔗 Nodes Used

Send Email, Google Sheets, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
