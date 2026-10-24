# 📊 Send weekly developer release digest email using RSS feeds and Resend

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to collect recent release and news items from multiple developer-focused RSS/Atom feeds, filters out noisy and dev-build entries, groups the remaining items by category, and sends an HTML digest email via Resend.

## How it works
1. Runs on a weekly schedule (Monday at 09:00).
2. Loads a predefined list of RSS/Atom feed URLs with a category and source label, then fetches the latest items from each feed.
3. Attaches feed metadata (category, source, fetched time) to each item and keeps only entries from the last 7 days when a publish date is available.
4. Filters out development builds (for example “-dev-”, “dev build”, or “snapshot”) and removes common non-release noise (for example “docs”, “tests”, “refactor”, or “cleanup”).
5. Normalizes the remaining items into a consistent format and groups them by category.
6. Generates a styled HTML email with up to five items per category and sends it via Resend only when there is at least one release to report.

## Setup
1. Add a Resend API key credential. You can also use the OAuth option if available for you
2. Update the Resend email fields (to/from and subject, if needed) to match your recipients and a sender address verified in Resend.
3. Edit the feed list to add, remove, or re-categorize RSS/Atom sources for your digest.

## 🔗 Nodes Used

RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
