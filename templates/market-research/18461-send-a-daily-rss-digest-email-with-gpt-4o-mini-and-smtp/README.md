# 📊 Send a daily RSS digest email with GPT-4o-mini and SMTP

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every morning, reads multiple RSS feeds, uses OpenAI to generate a plain-text daily digest from the latest items, and emails the summary via SMTP.

## How it works
1. Runs daily on a cron schedule.
2. Splits a comma-separated list of RSS feed URLs into individual feed requests.
3. Fetches the latest items from each RSS feed URL.
4. Combines the retrieved items into a single text payload with titles, dates, links, and snippets.
5. Uses OpenAI (GPT-4o-mini) to condense the combined items into a short, grouped daily digest while skipping ads or off-topic content.
6. Sends the generated digest as a plain-text email with today’s date in the subject line.

## Setup
1. Add your OpenAI API credentials to the OpenAI Chat Model connection.
2. Add SMTP email credentials in the email-sending step and set the From and To email addresses.
3. Replace the placeholder RSS feed URLs with your own comma-separated list in the FeedUrls field.
4. Adjust the daily cron schedule time (default: 07:00) to match when you want the digest delivered.

## 🔗 Nodes Used

Send Email, RSS Read, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
