# 📱 Send a curated AI tech news digest from RSS and sitemaps with OpenAI and Gmail

> ⚡ **36 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs weekly, gathers AI and automation news from RSS feeds and official sitemaps, uses OpenAI to curate and write a multi-story digest, and sends a formatted HTML newsletter via Gmail while deduplicating previously sent URLs and alerting via Telegram if the edition fails validation.

## How it works
1. Runs on a weekly schedule (or manually for testing) and loads a configurable catalogue of news sources and digest settings.
2. Fetches items from active RSS feeds and discovers recent pages from configured official sitemaps, then normalizes both into a single article format.
3. Filters for fresh, complete articles and checks an n8n Data Table to drop any canonical URLs that have already been sent.
4. Scores, ranks, and balances the remaining candidates across sources, then keeps the top 30 and fetches each page to extract stronger evidence text and images.
5. Uses OpenAI to select the edition, generate story write-ups from the extracted evidence, and assemble a single digest payload.
6. Validates the AI output, verifies each finalist has a usable image by re-checking page metadata, and blocks sending if the shortlist fails safety checks.
7. Sends the final HTML digest via Gmail and records each sent canonical URL in the Data Table for future deduplication, or sends a Telegram alert if it is not safe to send.

## Setup
1. Add OpenAI credentials for the GPT-4o-mini chat model used to curate and write the digest.
2. Add a Gmail OAuth2 credential and replace <YOUR_RECIPIENT_EMAIL> with the email address that should receive the newsletter.
3. Add a Telegram bot credential and set <YOUR_TELEGRAM_CHAT_ID> for failure alerts.
4. Create or select an n8n Data Table for URL deduplication/audit logging and ensure the workflow points to the correct table ID.
5. In the Source Catalogue, review/enable sources and set outputLanguage, storiesPerDigest, and the discoveryLookbackHours/freshnessDecayHours values, then adjust the schedule trigger timezone/day/time as needed.

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
