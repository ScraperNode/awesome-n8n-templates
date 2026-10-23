# 🎬 Create ranked editorial digests from RSS feeds with email and CSV exports

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to read multiple RSS feeds, score and rank recent articles using weighted keywords, and generate an HTML content-planning digest plus two CSV exports, with optional delivery via email.

## How it works
1. Runs on a daily schedule at 09:00 UTC or is started manually for testing.
2. Loads digest settings (RSS feed URLs, weighted keywords, exclusions, lookback window, and output limits) and validates the configuration.
3. Fetches recent items from each RSS feed and normalizes article fields while capturing feed errors as diagnostics.
4. Filters articles by safe links and publish dates, excludes unwanted phrases, scores keyword matches, deduplicates by canonicalized URL, and limits results per source and overall.
5. Adds structured editorial planning prompts (explainer, checklist, and discussion angles) to each selected article.
6. Renders an HTML digest with rankings and source health, exports a ranked shortlist CSV and a full decision ledger CSV, and optionally sends the HTML digest via email when enabled.

## Setup
1. Update the feed list, weighted keywords, excluded phrases, lookbackDays, minScore, maxItems, and maxPerSource in the Set Digest Parameters node.
2. For optional email delivery, configure an SMTP credential on the email-sending node, then set sendEmail=true and valid fromEmail and toEmail values in Set Digest Parameters.
3. Set the workflow timezone and adjust the schedule trigger time if you want the digest at a different hour.
4. Run the manual trigger once to review the HTML output and download the CSV/HTML files to confirm scoring and source diagnostics before activating the schedule.

## Requirements
- Built-in n8n nodes and trusted public RSS feeds. No paid search or AI API required. SMTP credentials are needed only for optional email; hosting and email-provider costs may apply.

## Customization
- Replace the example feeds and English keywords with your niche, adjust topic weights and source limits, and tailor the editorial planning prompts and schedule.

## Additional info
Deduplication applies within each run, so stories can reappear on later days. Editorial prompts are planning aids, not AI-generated summaries or verified facts. Read and credit original sources before publishing. Logic and graph checks passed; test full n8n execution and optional SMTP delivery in your own instance before activation.

## 🔗 Nodes Used

Send Email, RSS Read, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
