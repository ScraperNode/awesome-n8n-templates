# 🎬 Send a weekly AI‑curated RSS digest email with OpenAI and Gmail

> ⚡ **118 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs every week, reads articles from a configurable list of RSS feeds, deduplicates and ranks recent items, uses OpenAI to curate them into a themed HTML digest, and sends the finished newsletter to your inbox via Gmail.

## How it works
1. Runs weekly on Monday at 08:00.
2. Generates one item per configured RSS feed URL and reads each feed to collect article entries.
3. Merges all articles, removes duplicates, keeps items from the last 7 days, ranks them newest-first, and limits the list to 15 articles.
4. Sends the shortlisted articles to OpenAI (gpt-4o-mini) to group them into 2–4 themes and generate an HTML digest with summaries and links.
5. Wraps the AI-generated HTML fragment in a styled email template and sets the recipient and digest date.
6. Sends the HTML email through Gmail with a dated subject line.

## Setup
1. Add an OpenAI credential and attach it to the OpenAI step that curates and summarizes the digest.
2. Add a Gmail OAuth2 credential and attach it to the Gmail step that sends the email.
3. Update the RSS feed list (source label and URL) in the feed definition step to match your preferred sources.
4. Set the recipient email address in the email-building step.
5. Adjust the schedule (day/time) and, if needed, the lookback window and max article limit in the article filtering/ranking step.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
